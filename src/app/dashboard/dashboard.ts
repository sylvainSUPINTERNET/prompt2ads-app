import { isPlatformBrowser, JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, effect, Inject, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  customerIds = httpResource(() => 'https://jsonplaceholder.typicode.com/todos');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 

    console.log(this.customerIds);
  }
  
  // ngOnInit() {
  //   effect(() => {
  //     if (isPlatformBrowser(this.platformId)) {
  //       (async () => {
  //         const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //         const data = await res.json();
  //         setTimeout(() => this.user.set(data), 2000);
  //       })();
  //     }
  //   });
  // }
}
