import { isPlatformBrowser, JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, effect, Inject, PLATFORM_ID, signal } from '@angular/core';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  customerIds = httpResource(() => (
      {
      url: `${environment.apiUrl}/customers`,
      headers: {
        "X-Google-Session-Id": "6fe6bd99-94bc-4bce-96d6-cb359c73eb62"
      }
    }
  ));


  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
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
