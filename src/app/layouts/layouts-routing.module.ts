import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { FlexboxComponent } from "./flexbox/flexbox.component";


export const routes: Routes = [
    {
        path: "",
        component: FlexboxComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class LayoutsRoutingModule { }