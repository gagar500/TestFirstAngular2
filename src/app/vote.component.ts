import { Component, Input,Output,EventEmitter } from '@angular/core'

@Component({
    selector: 'vote',
    templateUrl: '../app/vote.template.html',
    styles: [`
    .container-vote {
         width:20px; 
        } 

        .highlighted{
            color:Red;
        }
    .glyphicon-menu-up {
      
            cursor:pointer;
        }

    .glyphicon-menu-down {
          
            cursor:pointer;
        }
        `]
})

export class VoteComponent {
    @Input() myVote = 0;
    @Input() voteCount = 10;
    @Output() vote = new EventEmitter();

    isUp = false;
    isDown = false;

    onUp() {
        this.isUp = false; 
        this.isDown = false;
        if (this.myVote != 1) {
            this.myVote += 1;
            this.voteCount += 1;
        }
       
       if(this.myVote==1)  this.isUp = true; 
     
     this.vote.emit({voteTotal:this.voteCount});

    
    }

    onDown() {
          this.isUp = false; 
        this.isDown = false;
        if (this.myVote != -1) {
            this.myVote -= 1;
            this.voteCount -= 1;
        }
    
           if(this.myVote== -1)      this.isDown = true;
       
      this.vote.emit({voteTotal:this.voteCount});
       
    }
}