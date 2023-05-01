import { Component } from '@angular/core';
import { JSONPlaceholderService } from './services/jsonplaceholder.service';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'red';
  myData: any[] = [];
  data: any[] = [];
  page_size: number = 5;
  page_number: number = 1;

  constructor(private JSONPlaceholder: JSONPlaceholderService){}

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data;
      this.myData = data;
   });
  }
  updateData(pageSize: number, pageNumber: number) {
  this.page_size = pageSize;
  this.page_number = pageNumber;
  this.myData = [...this.data];
}
}
