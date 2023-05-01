import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  editRow: any = null;
  deleteRow: any = null;
  @Input() data: any[] = [];
  tableColumns = [
    { name: 'ID', property: 'id' },
    { name: 'Titulo', property: 'title' },
    { name: 'Contenido', property: 'body' }
  ];
}
