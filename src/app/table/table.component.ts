import { Component, Input,ViewChild, ElementRef,   } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component'; // importar el componente ModalComponent aquí


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() page_size: number = 5;
  @Input() page_number: number = 1;
  @Input() data: any[] = [];

  editRow: any = null;
  publishRow: any = null;



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

  deleteRow(row: any) {
    this.openDeleteModal(row);

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

}


