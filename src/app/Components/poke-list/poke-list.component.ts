import { Component } from '@angular/core';
import { IPokemon } from 'src/app/Models/IPokemon';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {

    pokedex : any

  constructor(private _ps : PokemonService) {}

  ngOnInit() {
    
  }
}
