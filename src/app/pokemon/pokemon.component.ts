import { Component } from '@angular/core';
import { ApiservicioService } from '../servicios/apiservicio.service';
import { Resultado } from '../modelos/resultado.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  /**
   *
   */
  // listaPokemones : Resultado = new Resultado;
  pokemones : any;
  constructor(private apiservicioService: ApiservicioService) {
    this.obtenerPokemones();

  }
  obtenerPokemones(){
    this.apiservicioService.getPokemones().subscribe(
      (resultado) => {this.pokemones = resultado.results;
        console.log(resultado.results)},
      (error) => console.log(error)
    );
  }
}
