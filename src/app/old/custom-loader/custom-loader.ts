import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-loader',
  imports: [],
  templateUrl: './custom-loader.html',
  styleUrl: './custom-loader.css',
})
export class CustomLoader {
  @Input() srMessage: string = 'Loading...';
  @Input() width = 12;
  @Input() height = 12;
  @Input() containerMarginTopEm = 0;

  get containerStyle() {
    return `justify-center flex mt-[${this.containerMarginTopEm}em]`;
  }

  get spinnerClasses() {
    return [
      `w-${this.width}`,
      `h-${this.height}`,
      'text-gray-600',
      'animate-spin',
      'fill-purple-600'
    ].join(' ');
  }
}
