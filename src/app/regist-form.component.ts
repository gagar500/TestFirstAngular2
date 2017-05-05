import {Component} from '@angular/core';

@Component({
    selector:'regist-form',
    templateUrl:'regist-form.component.html',
    styles:['.form-control.ng-touched.ng-invalid { border: 1px solid red;} ']
})

export class RegistFormComponent{

    onSubmit(form){
        console.log(form);
    }
}