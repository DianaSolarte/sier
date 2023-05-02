import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title: string = '';
  @Input() message: string = '';
  @Output() onClose: EventEmitter<string> = new EventEmitter<string>();

  modalRef?: NgbModalRef;


  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalRef = this.modalService.open(content);
  }

  deleteRow() {
    this.modalRef?.close('delete');
  }
  close(result: string) {
    this.onClose.emit(result);
  }
}
