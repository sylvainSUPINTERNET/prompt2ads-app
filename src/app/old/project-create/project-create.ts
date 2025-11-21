import { Component, inject } from '@angular/core';
import { LucideAngularModule, PlusIcon } from 'lucide-angular';

@Component({
  selector: 'app-project-create',
  imports: [LucideAngularModule],
  templateUrl: './project-create.html',
  styleUrl: './project-create.css',
})
export class ProjectCreate {

  readonly plusIcon = PlusIcon;

  navigateToNewProject() {
    alert("new")
  }

}
