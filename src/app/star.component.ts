import { Component, Input, EventEmitter,Output } from '@angular/core'

@Component({
    selector:"star",
    templateUrl:"../app/star.template.html"

})

export class StarComponent{
   @Input() isActive=false;

   @Output('activeChange') change =new EventEmitter();

    onToggle(){
        this.isActive = !this.isActive;
        this.change.emit({ newValue: this.isActive});
    }
}
