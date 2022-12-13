import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-buscardor',
  templateUrl: './buscardor.component.html',
  styleUrls: ['./buscardor.component.css'],
})
export class BuscardorComponent implements OnChanges {
  limit: any = 15;
  @Output() sendLimit = new EventEmitter();

  constructor() {}


  ngOnChanges(changes: SimpleChanges): void {
  }

  increment() {
    this.limit++;
    this.sendLimit.emit(this.limit);
  }
}

