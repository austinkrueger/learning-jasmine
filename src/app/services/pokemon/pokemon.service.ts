import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiEndpoint = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  getByName(name: string): Observable<object> {
    return this.http.get(`${this.apiEndpoint}` + name);
  }
}
