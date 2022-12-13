import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
})
export class GatosComponent implements OnChanges {
  @Input() cats: any = [];

  constructor() {
    console.log('la data de gatos 1', this.cats);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambio limite', changes);
  }

  

 
}
