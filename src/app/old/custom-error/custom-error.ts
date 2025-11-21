import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-error',
  imports: [],
  templateUrl: './custom-error.html',
  styleUrl: './custom-error.css',
})
export class CustomError {
  @Input() errorMessage: string = 'Something went wrong, please try again.';
}
