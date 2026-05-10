import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ArticlesComponent } from './articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [ArticlesComponent, ArticleDetailComponent],
  imports: [SharedModule],
  exports: [ArticlesComponent, ArticleDetailComponent],
})
export class ArticlesModule {}