import { Injectable } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Injectable()
export class TweetsNavigationService {

  constructor(private routerExtensions: RouterExtensions){
        
  }

  navigateToTweet(){
      this.routerExtensions.navigate(['/tweets/tweet']);
  }
}
