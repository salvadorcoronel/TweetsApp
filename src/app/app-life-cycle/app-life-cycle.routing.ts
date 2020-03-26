import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ComponentLifecycleComponent } from "./component-lifecycle/component-lifecycle.component";


export const routes: Routes = [
    {
        path: "",
        component: ComponentLifecycleComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class AppLifeCycleRoutingModule { }