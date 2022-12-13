import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
})
export class GatosComponent implements OnChanges {
  @Input() cats: any = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
