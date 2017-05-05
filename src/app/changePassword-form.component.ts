import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from './passwordValidators';


@Component({
    selector: 'changePassword-form',
    templateUrl: '../app/changePassword-form.component.html'
})

export class ChangePasswordFormComponent {
    form: FormGroup;
    isSamePassword = true;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            currentPassword: ['', Validators.compose([Validators.required]), PasswordValidators.currentPasswordNotCorect],
            newPassword: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmPassword: ['', Validators.compose([Validators.required])]
        })

    }

    confirmPasswordCheck() {
        if ((this.form.controls.newPassword.value.length > 0 && this.form.controls.confirmPassword.value.length > 0)
            && (this.form.controls.newPassword.value != this.form.controls.confirmPassword.value)) {
            this.isSamePassword = false;
        } else {
            this.isSamePassword = true;
        }



    }

    ChangePassword() {
        if (this.form.controls.currentPassword.hasError('currentPasswordNotCorect')) {
            this.form.controls.currentPassword.setErrors({
                invalidCurrentPassword: true
            });
            return false;
        }else{
            console.log(this.form);
        }

     
    }
}
