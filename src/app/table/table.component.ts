import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() page_size: number = 5;
  @Input() page_number: number = 1;

  editRow: any = null;
  publishRow: any = null;
  @Input() data: any[] = [];


  tableColumns = [
    { name: 'ID', property: 'id' },
    { name: 'Titulo', property: 'title' },
    { name: 'Contenido', property: 'body' }
  ];
  pageChanged(event: any): void {
    this.page_number = event.page;
    this.updateData(this.page_size, this.page_number);
  }
  updateData(pageSize: number, pageNumber: number): void {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    this.data = this.data.slice(startIndex, endIndex);
  }
  deleteRow(row: any) {
    if (window.confirm('¿Está seguro de que desea eliminar esta fila?')) {
      const index = this.data.indexOf(row);
      this.data = this.data.filter((r: any) => r !== row);
    }

}
}
