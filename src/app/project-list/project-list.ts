import { Component, inject } from '@angular/core';
import { PlusIcon, LucideAngularModule } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  imports: [LucideAngularModule, ],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  readonly plusIcon = PlusIcon;

  private router = inject(Router);

  constructor() {}

  navigateToNewProject() {
    console.log('Navigating to new project creation page');
    this.router.navigate(['/new-project']);
  }
}
