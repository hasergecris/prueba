import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ServicioGeneralService } from 'src/app/services/servicio-general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cats: any;
  limit: number = 15;

  constructor(private _ServicioGeneral: ServicioGeneralService) {}

  ngOnInit(): void {
    console.log('limite', this.limit);

    this._ServicioGeneral.getAll(this.limit).subscribe((data) => {
      console.log('data fetch', data);
      this.cats = data;
      console.log('data cats', this.cats);
    });
  }



  captureLimit(event: any) {
    console.log('enevtos limites', event);
    this.limit = event;
  }
}
    

