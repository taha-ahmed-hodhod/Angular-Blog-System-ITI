export interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
}

export interface ArticleFormValue {
  title: string;
  content: string;
  imageUrl: string;
}

export interface Comment {
  id: string;
  articleId: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: string;
}