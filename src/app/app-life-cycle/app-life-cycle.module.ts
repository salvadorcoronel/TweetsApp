import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { AppLifeCycleRoutingModule } from './app-life-cycle.routing';
import { LoggerService } from '../shared/libs/logger.service';
import { ChildComponentLifecycleComponent } from './child-component-lifecycle/child-component-lifecycle.component';



@NgModule({
  declarations: [ComponentLifecycleComponent, ChildComponentLifecycleComponent],
  imports: [
    NativeScriptCommonModule,
    AppLifeCycleRoutingModule
  ],
  providers: [
    LoggerService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppLifeCycleModule { }
