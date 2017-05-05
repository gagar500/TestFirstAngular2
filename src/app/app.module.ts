import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import {SummaryPipe} from './summary.pipe';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';
import {RegistFormComponent} from './regist-form.component';
import {SignUpFormComponent} from './signup-form.component';
import {ChangePasswordFormComponent} from './changePassword-form.component';
import {RxComponent} from './rx.component';
import {PostService} from './post.service';
import {PostExService} from './postEx.service';
import {GitHubComponent} from './github.component';

@NgModule({
  declarations: [
    AppComponent,CoursesComponent,
    AuthorsComponent,AutoGrowDirective,StarComponent,HeartComponent,VoteComponent,
    TweetComponent,SummaryPipe,ZippyComponent,ContactFormComponent,RegistFormComponent,SignUpFormComponent
    ,ChangePasswordFormComponent,RxComponent,GitHubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers:[AuthorsService,TweetService,PostService,PostExService],
  bootstrap: [AppComponent]
})
export class AppModule { }
