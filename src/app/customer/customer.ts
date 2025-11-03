import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { ArrowRightIcon, LucideAngularModule } from 'lucide-angular';
import { environment } from '../../environments/environment';
import { CustomLoader } from "../custom-loader/custom-loader";
import { CustomError } from "../custom-error/custom-error";


@Component({
  selector: 'app-customer',
  imports: [JsonPipe, LucideAngularModule, CustomLoader, CustomError],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  
  isShown = signal<boolean>(false);
  customerId = signal<string>('');

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

   customerInfo = httpResource(() => (
      {
        method: 'GET',
        url: `${environment.apiUrl}/customers/validate`,
        headers: {
          "X-Google-Session-Id": "6fe6bd99-94bc-4bce-96d6-cb359c73eb62",
          "X-Google-Customer-Id": this.customerId()
        },
        timeout: 30000
      }
  ));


  getCustomerInfo(customerId: string) {
    this.customerId.set(customerId);
    this.customerInfo.reload();
    this.isShown.update((isShown) => true);
  }

  closeCustomerInfo() {
    this.isShown.update((isShown) => false);
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  
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