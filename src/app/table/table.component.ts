import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  // Definir tipos para las propiedades de entrada y salida
  @Input() page_size = 5;
  @Input() page_number = 1;
  @Input() data: any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onPublish = new EventEmitter<any>();

  // Definir tipos para las propiedades de clase
  editRow: any;
  row: any = {};
  publishedRows: any[] = [];
  currentPage = 1;
  activeModal: any;
  
  tableColumns = [
    { name: 'ID', property: 'id' },
    { name: 'Titulo', property: 'title' },
    { name: 'Contenido', property: 'body' }
  ];


  // Usar ViewChild para obtener una referencia al elemento modal en el HTML
  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;

  constructor(private modalService: NgbModal) {}

  // Usar una función de flecha para mantener el contexto de 'this' dentro de la función
  pageChanged = (event: any): void => {
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
        // Usar Array.filter() en lugar de Array.indexOf() y Array.splice() para eliminar la fila
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
    // Usar Object.assign() para clonar el objeto en lugar de modificar el objeto original
    this.editRow = Object.assign({}, row);
    const modalRef = this.modalService.open(EditModalComponent);
    modalRef.componentInstance.title = 'Editar registro';
    modalRef.componentInstance.editRow = this.editRow;
    modalRef.componentInstance.data = this.data;
    modalRef.componentInstance.onSave.subscribe((result: any) => {
      // Usar Array.findIndex() en lugar de Array.indexOf() para encontrar el índice de la fila modificada
      const index = this.data.findIndex((r: any) => r.id === result.id);
      if (index >= 0) {
        // Usar el spread operator para actualizar solo las propiedades modificadas en lugar de clonar todo el objeto
        this.data[index] = { ...this.data[index], ...result };
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



  publishModal(row: any) {
    this.publishedRows.push(row);
    const modalpub = this.modalService.open(PostModalComponent);
    modalpub.componentInstance.title = 'Publicar Noticia';
    modalpub.componentInstance.message = `Se ha publicado una nueva noticia con exito"${row.title}"?`;
    modalpub.componentInstance.onClose.subscribe((result: string) => {
      if (result === 'confirm') {
        // Agrega la fila al arreglo de noticias publicadas
        this.publishedRows.push(row);
        this.data = this.data.filter((r: any) => r !== row);
        // Cierra el modal
        this.modalService.dismissAll();
        // Muestra un mensaje de éxito con alert()
        alert('¡Noticia publicada con éxito!');
      }
    });
  }

  openModalpub() {
    const modalRef = this.modalService.open(PostModalComponent);
    modalRef.componentInstance.name = 'Usuario';
  }
  closeModalpub() {
    this.activeModal.close('Modal cerrado');
  }


}





