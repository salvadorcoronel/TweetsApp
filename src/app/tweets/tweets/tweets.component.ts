import { Component, OnInit } from '@angular/core';
import { TweetsNavigationService } from '../shared/tweets.navigation.service';
import { TweetsService } from '../shared/tweets.service';
import { Tweet } from '../shared/Tweet';
import { ItemEventData } from '@nativescript/core/ui/list-view/list-view';

@Component({
  selector: 'ns-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  public tweetsList: Array<Tweet> = [];

  nameLoadTweetsButton: string = 'Load Tweets';
  loadTweetsStatus: string = 'Loaded!';
  quantityTweetsToLoad: number = 5;
  constructor(private navigation: TweetsNavigationService,
              private tweetsService: TweetsService) { 
    this.tweetsList = this.tweetsService.getTweets();
  }

  ngOnInit(): void {
  }

  loadTweetsButton() {
    alert('Loading tweets...');
  }

  navigateToTweet() {
    this.navigation.navigateToTweet();
  }

  onItemTap(args: ItemEventData) {
    console.log(`Index: ${args.index}; View: ${args.view} ; Item: ${this.tweetsList[args.index]}`);
  }

}
