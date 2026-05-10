import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { AuthService } from '../../services/auth.service';
import { Article, Comment } from '../../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly articleService = inject(ArticleService);
  private readonly authService = inject(AuthService);

  protected readonly article = signal<Article | null>(null);
  protected readonly comments = signal<Comment[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly currentUser = this.authService.currentUser;
  protected readonly commentText = signal('');
  protected readonly isSubmittingComment = signal(false);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadArticle(id);
      this.loadComments(id);
    }
  }

  private loadArticle(id: string): void {
    this.articleService.getArticleById(id).subscribe({
      next: (article) => {
        this.article.set(article);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Could not load article.');
        this.isLoading.set(false);
      },
    });
  }

  private loadComments(id: string): void {
    this.articleService.getComments(id).subscribe({
      next: (comments) => this.comments.set(comments),
    });
  }

  protected onCommentChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.commentText.set(target.value);
  }

  protected submitComment(): void {
    const user = this.currentUser();
    const article = this.article();
    const text = this.commentText().trim();

    if (!user || !article || !text) return;

    this.isSubmittingComment.set(true);
    this.articleService.addComment(article.id, text, user).subscribe({
      next: (newComment) => {
        this.comments.update((prev) => [newComment, ...prev]);
        this.commentText.set('');
        this.isSubmittingComment.set(false);
      },
      error: () => {
        this.isSubmittingComment.set(false);
        // Handle error
      },
    });
  }

  protected shareArticle(): void {
    const article = this.article();
    if (!article) return;

    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: 'Check out this article on Article Hole!',
        url: window.location.href,
      });
    } else {
      void navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  }
}
