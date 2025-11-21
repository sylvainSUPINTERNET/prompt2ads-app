import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-cancel-btn',
  imports: [],
  templateUrl: './custom-cancel-btn.html',
  styleUrl: './custom-cancel-btn.css',
})
export class CustomCancelBtn {
  @Output() close = new EventEmitter<void>();

  
  handleClick() {
    this.close.emit();
  }
}
