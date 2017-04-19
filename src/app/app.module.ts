import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';

import { AuthorsService } from './authors.service';
import {AutoGrowDirective} from './auto-grow.directive';
import {StarComponent} from './star.component';
import {HeartComponent} from './heart.component';
import {VoteComponent} from './vote.component';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';

@NgModule({
  declarations: [
    AppComponent,CoursesComponent,AuthorsComponent,AutoGrowDirective,StarComponent,HeartComponent,VoteComponent,TweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers:[AuthorsService,TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
