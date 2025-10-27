import { isPlatformBrowser } from '@angular/common';
import { Component, effect, ElementRef, Inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { animate } from 'motion';
import { Customer } from "../customer/customer";
import { LucideAngularModule, BubblesIcon } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  @ViewChild('boxTitle') boxTitle!: ElementRef;
  
  protected readonly title = signal('prompt2ads-app');
  readonly BubblesIcon = BubblesIcon;
  user = signal<null | {id:string}>(null);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      setTimeout( async () => {
        this.user.set(await res.json());
      }, 2000)
    });
  }

    ngAfterViewInit() {
      if (isPlatformBrowser(this.platformId)) {
        animate(
          this.boxTitle.nativeElement, 
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.6 }
        );
      }
    }
}