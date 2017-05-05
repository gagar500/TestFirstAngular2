import { Component } from '@angular/core'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
    selector: 'rx',
    templateUrl: './rx.template.html'
})

export class RxComponent {
    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            search: []
        });
        // var observablr = Observable.from([1, 2, 3]);
        // var startDates = [];
        // var startDate = new Date();
        // for (var day = -2; day <= 2; day++) {
        //     var date = new Date(
        //         startDate.getFullYear(),
        //         startDate.getMonth(),
        //         startDate.getDate() + day
        //     );
        //     startDates.push(date);
        // }

        // Observable.from(startDates)
        // .map(date=>{
        //     console.log("getting deal for date:" + date)
        //     return [1,2,3];
        // })
        // .subscribe(x=> console.log(x));



        // var observablr = Observable.interval(1000);
        // observablr
        // .flatMap(x=>{
        //     console.log("call to server:" + x)
        //     return Observable.of([1,2,3,4]);

        // })
        // .subscribe(x => console.log(x));

        var userStream = Observable.of({
            userId: 1, userName: 'Korn'
        }).delay(2000);
        var tweetStream = Observable.of([1, 2, 3, 4, 5]).delay(1500);

        // Observable.forkJoin(userStream,tweetStream)
        // .map(join=> new Object({user:join[0],tweet:join[1]}))
        //    Observable.throw(new Error("test error"))
        //     .subscribe(result=> console.log(result),error=>{
        //             console.error(error);
        //         });

        // var counter = 0;
        // var ajaxCall = Observable.of('url')
        //     .flatMap(() => {
        //         if (++counter < 2)
        //             return Observable.throw(new Error("test error"));
        //         return Observable.of([1, 2, 3]);
        //     }).catch(err=>{
        //         var local = Observable.of([4,5,6]);
        //         return local;
        //     }).delay(2000).timeout(200);
        // ajaxCall
        // .subscribe(result => console.log(result), error => {
        //     console.error(error);
        // },()=>{
        //     console.log("completed");
        // });

Observable.of([1,2,3,4,5,6,7,8])
.take(3)
            .subscribe(result => console.log(result), error => {
            console.error(error);
        },()=>{
            console.log("completed");
        });

        var search = this.form.controls.search;
        search.valueChanges.debounceTime(400)
            .map(str => (<string>str).replace(' ', '-­‐'))
            .subscribe(x => console.log(x));
    }


}