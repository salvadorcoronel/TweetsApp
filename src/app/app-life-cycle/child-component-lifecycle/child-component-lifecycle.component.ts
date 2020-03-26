import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { LoggerService } from '~/app/shared/libs/logger.service';

@Component({
  selector: 'ns-child-component-lifecycle',
  templateUrl: './child-component-lifecycle.component.html',
  styleUrls: ['./child-component-lifecycle.component.css']
})
export class ChildComponentLifecycleComponent implements OnInit, OnChanges {
  @Input() value: number;
  previousValue: number;
  logs: string[] = [];
  constructor(private _logger: LoggerService) { }

  ngOnInit(): void {
    this._logger.write('ngOnInit Child Component', this._logger.ComponentLyfeCycleCategoryName, 2);
    this.logs.push("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._logger.write(`ngOnChanges Child Component ${changes.value.previousValue}, ${changes.value.currentValue}`, 'ComponentLyfeCycle', 2);
    this.logs.push(`ngOnChanges ${changes.value.previousValue}, ${changes.value.currentValue}`);
  }
}