
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
  @Input() editRow: any;
  myRow: any = {};
  @Input() data: any[] = [];
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  title: string = '';
  description: string = '';

  constructor(private modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll();
  }

  saveChanges() {
    const index = this.data.indexOf(this.myRow);
    if (index >= 0) {
      this.data[index].title = this.myRow.title;
      this.data[index].body = this.myRow.body;
    }
    this.modalService.dismissAll();
    this.onSave.emit(this.editRow);
  }
  }

