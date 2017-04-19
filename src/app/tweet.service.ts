import {Tweet} from "./tweet"

export class TweetService{
    getTweet():Tweet[]{
      return  [{"likeCount":10,"tweetInfo":"i am korn","tweetTopic":"Korn","tweetName":"@Korn","isLike":true},
      {"likeCount":1,"tweetInfo":"i am best","tweetTopic":"Best","tweetName":"@Best","isLike":false},
      {"likeCount":253,"tweetInfo":"i am owen","tweetTopic":"Owen","tweetName":"@Owen","isLike":true},
      {"likeCount":3,"tweetInfo":"i am Ronaldo","tweetTopic":"Ronaldo","tweetName":"@R7","isLike":false}];
    }
}