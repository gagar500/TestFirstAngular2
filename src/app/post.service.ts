import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Post } from "app/post";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PostService{

    private _url ="https://jsonplaceholder.typicode.com/posts";

    constructor(private _http:Http){

    }
    getPost():Observable<Post[]>{
      return  this._http.get(this._url)
        .map(res => res.json());
    }
    createPost(post:Post){
        this._http.post(this._url,JSON.stringify(post))
           .map(res => res.json());
    }
}