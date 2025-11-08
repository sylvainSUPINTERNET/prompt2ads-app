import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-confirm-btn',
  imports: [],
  templateUrl: './custom-confirm-btn.html',
  styleUrl: './custom-confirm-btn.css',
})
export class CustomConfirmBtn {
  @Input() path!: string;
  @Input() buttonText!: string;
  @Output() confirm = new EventEmitter<void>();
}
