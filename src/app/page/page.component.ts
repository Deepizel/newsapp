import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { Artice } from '../module/module.module';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  article: Artice = {
    id: 0,
    image_url: '',
    news_site: '',
    published_at: '',
    summary: '',
    title: '',
    updated_at: '',
    url: '',
  };
  image: string = '';
  title: string = '';
  summary: string = '';
  url: string = '';
  constructor(private Service: ServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');

    this.Service.getArticleById(articleId).subscribe(
      (response: any) => {
        this.article = response; // Assign the retrieved article to the property
        console.log(this.article, 'article');
        this.image = this.article.image_url;
        this.title = this.article.title;
        this.summary = this.article.summary;
         this.url = this.article.url;
        console.log(this.image);
      },
      (error: any) => {
        console.error('Error fetching article:', error);
      }
    );
  }
}
