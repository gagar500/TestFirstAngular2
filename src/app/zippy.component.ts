import { Component,Input } from '@angular/core';

@Component({
    selector: 'Zippy',
    template: `
<div class="panel panel-default">
  <div class="panel-heading cursor" >
    <div class="panel-title"  (click)="toggle()">{{title}}
    <i class="right glyphicon" [ngClass]="
    {
        'glyphicon-chevron-down':!isExpand,
         'glyphicon-chevron-up':isExpand
        }" ></i>
     </div>
    
  </div>
  <div *ngIf="isExpand" class="panel-body">
        <ng-Content></ng-Content>
     </div>
  </div>
  `,
  styles:['.right {float: right;}','.cursor {cursor: pointer;}']
})

export class ZippyComponent {
    @Input() title;
    isExpand = false;

    toggle(){
        this.isExpand = !this.isExpand;
    }

}