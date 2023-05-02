import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  // Variables de entrada decoradas
  @Input() title: string = '';
  @Input() message: string = '';
  // Variable de salida decoradas
  @Output() onClose: EventEmitter<string> = new EventEmitter<string>();

  // Se utiliza el operador ? para indicar que puede ser null o undefined
  modalRef?: NgbModalRef;

  // Se inyecta el servicio NgbModal en el constructor
  constructor(private modalService: NgbModal) {}

  // Se abre el modal utilizando el servicio NgbModal
  open(content: any) {
    this.modalRef = this.modalService.open(content);
  }

  // Se cierra el modal y se emite el evento de cerrar con el resultado 'delete'
  deleteRow() {
    this.modalRef?.close('delete');
  }

  // Se emite el evento de cerrar con el resultado especificado por el usuario
  close(result: string) {
    this.onClose.emit(result);
  }
}

