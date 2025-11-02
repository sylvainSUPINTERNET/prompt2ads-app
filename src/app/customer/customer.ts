import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ArrowRightIcon, LucideAngularModule } from 'lucide-angular';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-customer',
  imports: [JsonPipe, LucideAngularModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  
  readonly ArrowRightIcon = ArrowRightIcon;

  customerIdsResource:any = httpResource(() => (
      {
        method: 'GET',
        url: `${environment.apiUrl}/customers`,
        headers: {
          "X-Google-Session-Id": "6fe6bd99-94bc-4bce-96d6-cb359c73eb62"
        },
        timeout: 30000
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