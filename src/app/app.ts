import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, scroll } from "motion"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('box') box!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  protected readonly title = signal('prompt2ads-app');

  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) {
      animate(this.box.nativeElement, 
        { opacity: [0, 1], y: [-50, 0] },
        { duration: 0.6 }
      );
    }

  }
}
