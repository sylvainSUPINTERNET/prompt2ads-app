import { Component } from '@angular/core';
import { PencilRulerIcon, LucideAngularModule, NotebookPenIcon } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  pencilRulerIcon = PencilRulerIcon;
  notebookPenIcon = NotebookPenIcon;
}
