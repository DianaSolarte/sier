import { Component, Input, Output, ElementRef, EventEmitter  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component'; // importar el componente ModalComponent aquí
import { EditModalComponent } from '../edit-modal/edit-modal.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() page_size: number = 5;
  @Input() page_number: number = 1;
  @Input() data: any[] = [];
  @Output() onEdit: EventEmitter<any> = new EventEmitter();

  editRow: any;
  row: any = {};
  publishedRows: any[] = [];
;



  tableColumns = [
    { name: 'ID', property: 'id' },
    { name: 'Titulo', property: 'title' },
    { name: 'Contenido', property: 'body' }
  ];


  modalContent!: ElementRef;

 // referencia al elemento modal en el HTML

  constructor(private modalService: NgbModal) {}

  pageChanged(event: any): void {
    this.page_number = event.page;
    this.updateData(this.page_size, this.page_number);
  }

  updateData(pageSize: number, pageNumber: number): void {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    this.data = this.data.slice(startIndex, endIndex);
  }

  openDeleteModal(row: any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Eliminar registro';
    modalRef.componentInstance.message = `¿Está seguro de que desea eliminar el registro con el título "${row.title}"?`;
    modalRef.componentInstance.onClose.subscribe((result: string) => {
      if (result === 'confirm') {
        const index = this.data.indexOf(row);
        this.data = this.data.filter((r: any) => r !== row);
        this.modalService.dismissAll();
      }
    });
  }
  openModal() {
    this.modalService.open(this.modalContent);
  }

  closeModal() {
    this.modalService.dismissAll();
  }
  edit(row: any) {
    this.editRow = Object.assign({}, row);
    const modalRef = this.modalService.open(EditModalComponent);
    modalRef.componentInstance.title = 'Editar registro';
    modalRef.componentInstance.editRow = this.editRow;
    modalRef.componentInstance.data = this.data;
    modalRef.componentInstance.onSave.subscribe((result: any) => {
      const index = this.data.indexOf(result);
      if (index >= 0) {
        this.data[index] = { ...result };
      }
      this.editRow = null;
      this.modalService.dismissAll();
      // Update the table data after the save event is emitted
      this.updateData(this.page_size, this.page_number);
    });
    modalRef.componentInstance.onCancel.subscribe(() => {
      this.editRow = null;
      this.modalService.dismissAll();
    });
  }

saveEdit() {
  this.data[this.data.indexOf(this.editRow)] = Object.assign({}, this.editRow);
  this.editRow = null;
}


  cancelEdit() {
    this.editRow = null;
  }

  publishRow(row: any) {
    this.publishedRows.push(row);
  }


}




