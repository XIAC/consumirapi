import { Component } from '@angular/core';
import { ApiservicioService } from '../servicios/apiservicio.service';

@Component({
  selector: 'app-caterpie-pokemon',
  templateUrl: './caterpie-pokemon.component.html',
  styleUrls: ['./caterpie-pokemon.component.css']
})
export class CaterpiePokemonComponent {
  caterpiePokemon : any;
  constructor(private caterpiService: ApiservicioService){
    this.getCaterpies();
  }
  getCaterpies(){
    this.caterpiService.getCaterpiePokemon()
      .subscribe(
        (response) => {
            this.caterpiePokemon = response;
            console.log(response)},
        (error) => console.log(error)
      )
  }
}
