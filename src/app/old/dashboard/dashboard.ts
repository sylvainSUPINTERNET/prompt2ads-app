import { isPlatformBrowser, JsonPipe } from '@angular/common';
import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { Component, ElementRef, inject, Inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ArrowRightIcon, LucideAngularModule} from 'lucide-angular';
import { ProjectCreate } from "../project-create/project-create";
import { animate } from 'motion';
import { CustomLoader } from "../custom-loader/custom-loader";
import { CustomError } from "../custom-error/custom-error";
import { ProjectList } from "../project-list/project-list";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe, LucideAngularModule, ProjectCreate, CustomLoader, CustomError, ProjectList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  @ViewChild('boxAnimatedTopToBottom') boxAnimatedTopToBottom!: ElementRef;
  readonly ArrowRightIcon = ArrowRightIcon;
  // @ViewChild('boxAnimatedTopToBottomList') boxAnimatedTopToBottomList!: QueryList<ElementRef>;
  
  private router = inject(Router);

  customerIdsResource:any = httpResource(() => (
      {
        method: 'GET',
        url: `${environment.apiUrl}/api/google/customers`,
        headers: {
          "X-Google-Session-Id": "6fe6bd99-94bc-4bce-96d6-cb359c73eb62" // todo move this
        },
        timeout: 30000
    }
  ));

  userInfoResource:any = httpResource(() => (
      {
        method: 'GET',
        url: `${environment.apiUrl}/api/google/users/user-info`,
        headers: {
          "X-Google-Session-Id": "6fe6bd99-94bc-4bce-96d6-cb359c73eb62" // todo move this
        },
        timeout: 30000
    }
  ));


  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
        if ( this.boxAnimatedTopToBottom?.nativeElement ) {
          animate(this.boxAnimatedTopToBottom.nativeElement,
            { opacity: [0, 1], y: [-50, 0] },
            { duration: 0.6 }
          );
        }
    }
  }


  getProfileError(_error: HttpErrorResponse): string {
    return 'Error, try again';
  }

  
  navigateToNewProject() {
    console.log('Navigating to new project creation page');
    this.router.navigate(['/new-project']);
  }

}
