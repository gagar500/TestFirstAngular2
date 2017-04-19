import {Component, Input} from '@angular/core'

@Component({
    selector:"like",
    templateUrl:"../app/heart.template.html",
    styles:[`
        .glyphicon-heart {
            color:#ccc;
            cursor:pointer;
        }
        .highlighted{
            color:deeppink;
        }
        `]
})

export class HeartComponent{
    @Input() totalLike =0;
    @Input() iLike =false;

    onOver(){
     this.totalLike += 10;
    }

    onChangeNum(){
        this.iLike = !this.iLike;
        this.totalLike += this.iLike ? 1 : -1;
    }
}