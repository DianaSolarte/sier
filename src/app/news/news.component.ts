import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  title: string;
  body: string;
  @Input() publishedRows: { title: string, body: string }[] = [];
    // Define the publishedRows property as a public array of numbers

    constructor() {
      this.title = 'Título de la noticia';
      this.body = 'Description';
    }
  }
