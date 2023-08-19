import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {

  article:any[] =[];
  constructor(private Service: ServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');

     this.Service.getArticleById(articleId).subscribe(
      (response: any) => {
        this.article = response; // Assign the retrieved article to the property
      },
      (error: any) => {
        console.error('Error fetching article:', error);
      }
    );
  }
}
