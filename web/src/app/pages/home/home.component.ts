import { Component, OnInit} from '@angular/core';
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

    this._ServicioGeneral.getAll(this.limit).subscribe((data) => {
      this.cats = data;
    });
  }

  captureLimit(event: any) {
    this.limit = event;
  }


}
      

    

