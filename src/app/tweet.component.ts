import { Component, Input } from "@angular/core"
import { TweetService } from './tweet.service'

@Component({
    selector: "tweet",
    templateUrl: "../app/tweet.template.html",
    styleUrls: ["./tweet.component.css"],
    providers: [TweetService]
})

export class TweetComponent {
    /** @Input() likeCount;
    @Input() tweetInfo;
    @Input() tweetTopic;
    @Input() tweetName;
    @Input() isLike; */

    tweetItems;

    onLike(index) {
        this.tweetItems[index].likeCount +=   this.tweetItems[index].isLike ? -1 : 1;
        this.tweetItems[index].isLike = !this.tweetItems[index].isLike;
    }

    constructor(tweetsService: TweetService) {
        this.tweetItems = tweetsService.getTweet();
    }

}