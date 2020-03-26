import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, Input, AfterViewChecked, AfterContentChecked, DoCheck } from '@angular/core';
import { LoggerService } from '~/app/shared/libs/logger.service';

@Component({
  selector: 'ns-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck {
  ngOnChangesComponentLifeCycleNumber: number = 1;
  logs: string[] = [];
  constructor(private _logger: LoggerService) { }

  ngOnInit(): void {
    this._logger.write('ngOnInit', this._logger.ComponentLyfeCycleCategoryName);
    this.logs.push('ngOnInit');
  }

  ngDoCheck(): void {
    this._logger.write('ngDoCheck', this._logger.ComponentLyfeCycleCategoryName);
    this.logs.push('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this._logger.write('ngAfterContentInit', this._logger.ComponentLyfeCycleCategoryName);
    this.logs.push('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this._logger.write('ngAfterContentChecked', this._logger.ComponentLyfeCycleCategoryName);
    this.logs.push('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this._logger.write('ngAfterViewInit', this._logger.ComponentLyfeCycleCategoryName);
    this.logs.push('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this._logger.write('ngAfterViewChecked', this._logger.ComponentLyfeCycleCategoryName);
    this.logs.push('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this._logger.write('ngOnDestroy', this._logger.ComponentLyfeCycleCategoryName);
    this.logs.push('ngOnDestroy');
  }

  updateValue(): void {
    this.ngOnChangesComponentLifeCycleNumber++;
  }

}
