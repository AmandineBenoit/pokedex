import { Component } from '@angular/core';
import { IPokemon } from 'src/app/Models/IPokemon';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent {
  pokemon! : IPokemon

  constructor(private _ps : PokemonService) {}
}
