import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  post={
    isActive:true
  }
  tweet={
    totalLikes:10,
    iLike:false
  }

  vote={
    myVote:0,
    voteCount:10
  }

  onActiveChange($event){
    console.log($event);
  }

  onVote($event){
      console.log($event);
  }
}
