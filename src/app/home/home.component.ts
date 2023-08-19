import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Articles: any[] = [];
  filteredArticles: any[] = [];
  searchKeywords: string = '';

  constructor(private http: HttpClient, private service: ServiceService) {}

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.service.getAllArticles().subscribe(
      (response: any) => {
        this.Articles = response.results;
        this.filteredArticles = this.Articles;
        console.log(this.Articles);
      },
      (error: any) => {
        console.error('error retreiving articles:', error);
      }
    );
  }

  filterArticles() {
    if (!this.searchKeywords) {
      this.filteredArticles = this.Articles; // Reset to original list if keywords are empty
      return ;
    }

    // Convert keywords to lowercase for case-insensitive comparison
    const keywords = this.searchKeywords.toLowerCase().split(' ');

    this.filteredArticles = this.Articles.filter(article => {
      const name = article.title.toLowerCase();
      const description = article.summary.toLowerCase();

      // Check if any keyword matches the name or description
      return keywords.some(keyword => name.includes(keyword) || description.includes(keyword));
    });
  }
}
