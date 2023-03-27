import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../Models/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _client : HttpClient) { }


  get() : Observable<IPokemon> {
    return this._client.get<IPokemon>("https://pokeapi.co/api/v2/pokemon")
  }



}
