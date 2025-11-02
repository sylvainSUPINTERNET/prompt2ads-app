import { isPlatformBrowser } from '@angular/common';
import { Component, effect, ElementRef, Inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { animate } from 'motion';
import { LucideAngularModule, BubblesIcon, MegaphoneIcon, View } from 'lucide-angular';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  readonly BubblesIcon = BubblesIcon;
  readonly MegaphoneIcon = MegaphoneIcon;

  @ViewChild('boxTitle') boxTitle!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  
  protected readonly title = signal('prompt2ads-app');

  // user = signal<null | {id:string}>(null);


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // effect(() => {
    //   if (isPlatformBrowser(this.platformId)) {
    //     (async () => {
    //       const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //       const data = await res.json();
    //       setTimeout(() => this.user.set(data), 9000);
    //     })();
    //   }
    // });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Animation d’entrée du titre
      if (this.boxTitle?.nativeElement) {
        animate(this.boxTitle.nativeElement, 
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.6 }
        );
      }
    }
  }

  showBurger() {
    if ( this.mobileMenu?.nativeElement ) {
      this.mobileMenu.nativeElement.classList.toggle("hidden");
    }
  }

  closeMenu() {
    if ( this.mobileMenu?.nativeElement ) {
      this.mobileMenu.nativeElement.classList.add("hidden");
    }
  }
}