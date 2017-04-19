import { Component } from '@angular/core'
import { CoursesService } from './courses.service'

@Component({
  selector: 'courses',
  template: `
  <h2>Courses {{name}}</h2>
  <div>{{title}}</div>
  <input type="text" autoGrow [value]=name (input)="onTextChange($event);"/>
  <input type="text" [(ngModel)]="title"/>
  <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
  </ul>
  `,
  providers: [CoursesService]
})
export class CoursesComponent {
  name = "korn";
  title = "The title of this courses";
  courses;

  onTextChange($event){
    this.name = $event.target.value;
  }

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }
}