import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './usernameValidators';


@Component({
    selector: 'signup-form',
    templateUrl: '../app/signup-form.component.html'
})

export class SignUpFormComponent {

    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
                
            ]),UsernameValidators.shouldBeUnique],
            password: ['', [Validators.required, Validators.minLength(2)]]
        })
    }

    //  form = new FormGroup({
    //      username: new FormControl('',Validators.required),
    //      password:new FormControl('',[Validators.required,Validators.minLength(2)])
    //  });

    signup() {
        //authService.logic(this,form.value);

        this.form.controls.username.setErrors({
            invalidLogin:true
        });
        console.log(this.form.value);
    }
}