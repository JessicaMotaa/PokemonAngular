import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = []

  constructor(public httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const requisicao = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .toPromise();
    this.pokemons = requisicao.results;
    String(this.pokemons[1]['name']).toUpperCase
  }


}