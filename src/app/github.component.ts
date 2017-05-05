import { Component, OnInit } from '@angular/core';
import { PostExService } from './postEx.service';
import { Observable } from 'rxjs/Rx'


@Component({
    selector: 'git-hub',
    templateUrl: './github.template.html'
})

export class GitHubComponent implements OnInit {

    isLoading = false;
    github = {};
    followers = [];

    constructor(private _post: PostExService) {
       
    }



    ngOnInit(): void {
        this.isLoading=true;
        var x = this._post.getPost("https://api.github.com/users/octocat");
        var y = this._post.getPost("https://api.github.com/users/octocat/followers");
        Observable.forkJoin(x, y).subscribe(result=>{
            this.github = result[0];
            this.followers = result[1];
        },err=>{
            console.error(err);
        },()=>{
            this.isLoading=false;
        });
         
    }


}