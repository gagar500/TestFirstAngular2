import { Component,OnInit } from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
   isLoading = true;


//   constructor(private _postService:PostService){
//  //   this._postService.createPost({UserId:1,id:null,title:'korn',body:'korn body'});
//   }

   ngOnInit(): void {
    //  this._postService.getPost().subscribe(x=> {
    //    this.isLoading=false;
    //    console.log(x[0].UserId)});
    }

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
