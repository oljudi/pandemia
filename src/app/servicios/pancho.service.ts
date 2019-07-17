import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Testimonio } from '../models/testimonio';


@Injectable({
  providedIn: 'root'
})
export class PanchoService {

  public url = 'https://pancho940208.firebaseio.com';

  constructor( private http: HttpClient ) { }

  getTestimonial() {
    return this.http.get( `${this.url}/pandemia.json` )
    .pipe(
      map( this.crearArreglo )
    );
  }

  private crearArreglo( testimoniosObj: object ) {

    const testimonios: Testimonio[] = [];

    if ( testimoniosObj === null ) { return []; }

    Object.keys( testimoniosObj ).forEach( key => {
      const testimonio: Testimonio = testimoniosObj[key];
      testimonio.id = key;
      testimonios.push( testimonio );
    });
    return testimonios;
  }

}
