import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
})
export class GatosComponent implements OnInit  {
  @Input() cats: any = [];

  constructor() {
    console.log('la data de gatos 1', this.cats);
  }

  ngOnInit(): void {
    console.log('la data de gatos 2', this.cats);
  }

 
}
