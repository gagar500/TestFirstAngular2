import {Component} from '@angular/core'
import {AuthorsService} from './authors.service'

@Component({
    selector:'authors',
   template:`
  <h2>Authors Korn</h2>
  <div>{{title}}</div>
  <ul>
    <li *ngFor="let author of authors">
    {{author}}
    </li>
  </ul>
  `
})

export class AuthorsComponent{
    title = "The Authors of this courses";
    authors;

    constructor(authorsService:AuthorsService){
       this.authors = authorsService.getAuthors();
    }
}