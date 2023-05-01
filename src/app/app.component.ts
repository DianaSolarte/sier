import { Component } from '@angular/core';
import { JSONPlaceholderService } from './services/jsonplaceholder.service';
import { TableComponent } from './table/table.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'red';
  data: any[] = [];
  constructor(private JSONPlaceholder: JSONPlaceholderService){}

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data;
   });
   page_size: number = 10
   page_number: number = 1
}
}
