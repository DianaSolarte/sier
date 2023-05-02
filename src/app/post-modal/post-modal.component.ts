import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent {

  // IPropiedad de entrada para recibir el mensaje a mostrar
  @Input() message= '';

  // Propiedad de salida para emitir un evento cuando el usuario confirma
  @Output() confirm = new EventEmitter<void>();

  // Constructor con inyección de dependencia NgbActiveModal
  constructor(public activeModal: NgbActiveModal) {}

  // Método para emitir el evento de confirmación
  onConfirm() {
    this.confirm.emit();
  }

  // Método para cerrar el modal.
  public closeModal() {
    this.activeModal.close();
  }
}
