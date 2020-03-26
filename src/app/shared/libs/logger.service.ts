import * as trace from 'tns-core-modules/trace';
import { Injectable } from '@angular/core';
import { CustomTraceWriter } from './custom-trace-writter';

@Injectable()
export class LoggerService {
    ComponentLyfeCycleCategoryName = 'ComponentLyfeCycle';
    constructor() {
        trace.disable();
        trace.setCategories(trace.categories.concat(
            trace.categories.NativeLifecycle,
            this.ComponentLyfeCycleCategoryName
        ));
        //trace.addCategories(trace.categories.NativeLifecycle);
        trace.enable();
        trace.clearWriters(); // delete all writers by default and customs
        trace.addWriter(new CustomTraceWriter()); // add new writer
    }

    write(logMessage: string, category: string, type?: number): void {
        trace.write(logMessage, category, type);
    }

    disableTrace() {
        trace.disable();
    }
}