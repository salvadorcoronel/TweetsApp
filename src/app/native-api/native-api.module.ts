import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeAPIComponent } from './native-api/native-api.component';
import { NativeAPIRoutingModule } from './native-api.routing';



@NgModule({
  declarations: [NativeAPIComponent],
  imports: [
    NativeScriptCommonModule,
    NativeAPIRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NativeAPIModule { }
