import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/layouts", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "tweets", loadChildren: () => import("./tweets/tweets.module").then(m => m.TweetsModule) }, // lazy loaded module
    { path: "native-api", loadChildren: () => import("./native-api/native-api.module").then(m => m.NativeAPIModule) }, // lazy loaded module
    { path: "app-life-cycle", loadChildren: () => import("./app-life-cycle/app-life-cycle.module").then(m => m.AppLifeCycleModule) }, // lazy loaded module
    { path: "layouts", loadChildren: () => import("./layouts/layouts.module").then(m => m.LayoutsModule) }, // lazy loaded module
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
