import { Component } from '@angular/core';
import { LucideAngularModule, PlusIcon } from 'lucide-angular';

@Component({
  selector: 'app-project-create',
  imports: [LucideAngularModule],
  templateUrl: './project-create.html',
  styleUrl: './project-create.css',
})
export class ProjectCreate {
  
  navigateToNewProject() {
    alert("click");
  }
  readonly plusIcon = PlusIcon;

}
