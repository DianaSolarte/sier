import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})

export class EditModalComponent {
  // VARIABLES DE ENTRADA
  @Input() editRow: any; // El objeto que se va a editar
  myRow: any = {}; // Copia del objeto que se va a editar para mantener los cambios
  @Input() data: any[] = []; // La lista de objetos que se van a editar

  // VARIABLES DE SALIDA
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>(); // Evento que se emite cuando se guardan los cambios
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>(); // Evento que se emite cuando se cancela la edición

  title: string = ''; // El título del objeto que se va a editar
  description: string = ''; // La descripción del objeto que se va a editar

  constructor(private modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll();
  }
  saveChanges() {
    // Buscar el índice del objeto modificado en el array
    const index = this.data.indexOf(this.myRow);
    if (index >= 0) {
      // Actualizar los datos del objeto en el array
      this.data[index].title = this.myRow.title;
      this.data[index].body = this.myRow.body;
    }
    // Cerrar el modal y emitir el evento onSave
    this.modalService.dismissAll();
    this.onSave.emit(this.editRow);
  }

}
