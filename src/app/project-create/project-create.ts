import { Component } from '@angular/core';
import { ProjectList } from "../project-list/project-list";

@Component({
  selector: 'app-project-create',
  imports: [ProjectList],
  templateUrl: './project-create.html',
  styleUrl: './project-create.css',
})
export class ProjectCreate {

}
