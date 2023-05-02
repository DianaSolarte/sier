import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent {

  @Input() message= '';
  @Output() confirm = new EventEmitter<void>();


constructor(public activeModal: NgbActiveModal) {}
onConfirm() {
  this.confirm.emit();
}

public closeModal() {
  this.activeModal.close();
}
}

