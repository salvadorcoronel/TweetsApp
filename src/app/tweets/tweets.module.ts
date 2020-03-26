import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TweetsComponent } from './tweets/tweets.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetsRoutingModule } from './tweets.routing';
import { TweetsNavigationService } from './shared/tweets.navigation.service';
import { TweetsService } from './shared/tweets.service';



@NgModule({
  declarations: [TweetsComponent, TweetComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    TweetsRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    TweetsNavigationService,
    TweetsService
  ]
})
export class TweetsModule { }
