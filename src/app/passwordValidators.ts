import { FormControl } from '@angular/forms';

export class PasswordValidators{
    static shouldHaveSameConfirmPassword(control: FormControl,controlConfirm: FormControl){
        if((control.value.length >0 && controlConfirm.value.length>0)
        && (control.value != controlConfirm.value))
            return "{shouldHaveSameConfirmPassword:true}";

        return null;
    }

     static currentPasswordNotCorect(control: FormControl) {

        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (control.value != "12345")
                    resolve({ currentPasswordNotCorect: true });
                else
                    resolve(null);
            }, 1000);
        });
    }
}