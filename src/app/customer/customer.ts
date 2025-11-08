import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, ElementRef, Inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { ArrowRightIcon, LucideAngularModule } from 'lucide-angular';
import { environment } from '../../environments/environment';
import { CustomLoader } from "../custom-loader/custom-loader";
import { CustomError } from "../custom-error/custom-error";
import { CustomCancelBtn } from "../custom-cancel-btn/custom-cancel-btn";
import { CustomConfirmBtn } from "../custom-confirm-btn/custom-confirm-btn";
import { animate } from 'motion';


@Component({
  selector: 'app-customer',
  imports: [JsonPipe, LucideAngularModule, CustomLoader, CustomError, CustomCancelBtn, CustomConfirmBtn],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  
  @ViewChild('divCustomerInfo') divCustomerInfo!: ElementRef;
  @ViewChild('customerTitleContainer') customerTitleContainer!: ElementRef;
  @ViewChild('divCustomerInfoResult') divCustomerInfoResult!: ElementRef;

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

   customerInfo:any = httpResource(() => (
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

  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  confirm() {
    sessionStorage.setItem('google_customer_id', this.customerId());
  }
  

  getCustomerInfo(customerId: string) {

    if (this.divCustomerInfo?.nativeElement) {
      animate(this.divCustomerInfo.nativeElement, 
        { opacity: [1, 0], x: [0, 50] },
        { duration: 0.2 }
      );
    }

    if ( this.customerTitleContainer?.nativeElement) {
      animate(this.customerTitleContainer.nativeElement,
        { opacity: [1, 0], x: [0, 50] },
        { duration: 0.2 }
      );
    }

    this.customerId.set(customerId);
    
    this.customerInfo.reload();
    this.isShown.update((isShown) => true);
  }

  closeCustomerInfo() {
    if (this.divCustomerInfo?.nativeElement) {
      animate(this.divCustomerInfo.nativeElement, 
        { opacity: [0, 1], x: [50, 0] },
        { duration: 0.2 }
      );
    }

    if (this.customerTitleContainer?.nativeElement) {
      animate(this.customerTitleContainer.nativeElement, 
        { opacity: [0, 1], x: [50, 0] },
        { duration: 0.2 }
      );
    }

    this.isShown.update((isShown) => false);
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