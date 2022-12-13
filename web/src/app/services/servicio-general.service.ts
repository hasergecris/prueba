import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicioGeneralService {
  constructor(private http: HttpClient) {
    console.log('servicio listo para usar');
  }

  getAll(limit: number) {
    return this.http.get(`https://api.thecatapi.com/v1/breeds?limit=${limit}`);
  }

  getCat(id: any) {
    return this.http.get(`https://api.thecatapi.com/v1/images/${id}`);
  }


}
    
