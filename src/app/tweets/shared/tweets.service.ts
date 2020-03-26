import { Injectable } from '@angular/core';
import { Tweet, TweetBuilder } from './Tweet';

@Injectable()
export class TweetsService {

  private tweetsList: Array<Tweet> = [];

  constructor() { 
    this.tweetsList = [
      new TweetBuilder()
        .setAuthor('Salvador', '@salvadeveloper')
        .setDescription('Hi NS Developers from Peru')
        .setImage('https://pbs.twimg.com/profile_images/411741206343729152/HzitO56v_400x400.png')
        .setLike(24, false)
        .build(),
      
      new TweetBuilder()
        .setAuthor('Leyli', '@ns')
        .setDescription('Hi Designers from Peru')
        .setImage('https://pbs.twimg.com/profile_images/411741206343729152/HzitO56v_400x400.png')
        .setLike(1, true)
        .setLastAction('Kamen Bundev Retweeted')
        .build(),

      new TweetBuilder()
        .setAuthor('Leyli', '@ns')
        .setDescription('Hi Designers from Peru')
        .setImage('https://pbs.twimg.com/profile_images/411741206343729152/HzitO56v_400x400.png')
        .setLike(1, true)
        .setLastAction('John Papa Liked')
        .build(),

      new TweetBuilder()
        .setAuthor('Leyli', '@ns')
        .setDescription('Hi Designers from Peru')
        .setImage('https://pbs.twimg.com/profile_images/411741206343729152/HzitO56v_400x400.png')
        .setLike(1, false)
        .setLastAction('Fullstack Developer and 3 others follow')
        .build(),
        
    ]
  }

  getTweets() {
    return this.tweetsList;
  }

}
