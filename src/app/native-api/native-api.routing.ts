import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeAPIComponent } from "./native-api/native-api.component";


export const routes: Routes = [
    {
        path: "",
        component: NativeAPIComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class NativeAPIRoutingModule { }