import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioGeneralService } from 'src/app/services/servicio-general.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  character: any = {};
  cat: any;
  constructor(
    private activatedRouted: ActivatedRoute,
    private _ServicioGeneral: ServicioGeneralService
  ) {
    this.activatedRouted.params.subscribe((params) =>{
      console.log(params['id']);
      this.character = this._ServicioGeneral
        .getCat(params['id'])
        .subscribe((data: any) => {
          console.log('caracter',data);
          
        });
    });

  }

  ngOnInit(): void {}
}
