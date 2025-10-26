import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { animate } from 'motion';
import { Customer } from "../customer/customer";

@Component({
  selector: 'app-home',
  imports: [Customer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  @ViewChild('box') box!: ElementRef;
  
  protected readonly title = signal('prompt2ads-app');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngAfterViewInit() {
      if (isPlatformBrowser(this.platformId)) {
        animate(this.box.nativeElement, 
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.6 }
        );
      }
    }
}