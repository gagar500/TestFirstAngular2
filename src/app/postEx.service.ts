import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class PostExService{

    constructor(private _http:Http){

    }

      getPost(url:string){
      return  this._http.get(url)
        .map(res => res.json());
    }


}