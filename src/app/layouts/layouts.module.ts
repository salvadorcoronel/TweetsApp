import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { LayoutsRoutingModule } from './layouts-routing.module';



@NgModule({
  declarations: [FlexboxComponent],
  imports: [
    NativeScriptCommonModule,
    LayoutsRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutsModule { }
