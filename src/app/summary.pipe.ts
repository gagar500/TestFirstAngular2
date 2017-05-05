import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'Summary'})
export class SummaryPipe implements PipeTransform {
        transform(value: any, maxWords: Number) {
            if(!maxWords)
                maxWords=5;
           if(value)
                return value.substring(0,maxWords) + "....";
        }


}