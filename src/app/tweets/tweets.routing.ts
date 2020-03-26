import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TweetsComponent } from "./tweets/tweets.component";
import { TweetComponent } from "./tweet/tweet.component";


export const routes: Routes = [
    {
        path: "",
        component: TweetsComponent
    },
    {
        path: "tweet",
        component: TweetComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class TweetsRoutingModule { }