import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-confirm-btn',
  imports: [],
  templateUrl: './custom-confirm-btn.html',
  styleUrl: './custom-confirm-btn.css',
})
export class CustomConfirmBtn {
  @Input() path!: string;
  @Input() buttonText!: string;
}
