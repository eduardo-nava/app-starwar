import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WarsService {
  // tslint:disable-next-line:ban-types
  results: string;
  constructor(private http: HttpClient) {
  }

  getQuery( url: string ) {
    return this.http.get(`https://swapi.co/api/${url}/`);
  }

  getPersonas() {
    return this.getQuery('people').pipe( map((data: any) => {
      return data.results;
    }));
  }

  getDetallesPersona( id: string ) {
    return this.getQuery(`people/${id}`);
  }

  ordenPlanetas( url: string ) {
    return this.http.get(url).pipe(map((data: any) => {
      return data.name;
    }));
  }


}
