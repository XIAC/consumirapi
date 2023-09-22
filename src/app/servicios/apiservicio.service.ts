import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from '../modelos/resultado.model';

@Injectable({
  providedIn: 'root'
})
export class ApiservicioService {
  URL_global = 'https://pokeapi.co/api/v2/';
  constructor(private http : HttpClient) { }

  getPokemones(){
    return this.http.get<Resultado>(this.URL_global+'pokemon');
  }
  getCaterpiePokemon(){
    return this.http.get(this.URL_global+'pokemon/caterpie');
  }
}
