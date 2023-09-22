import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CaterpiePokemonComponent } from './caterpie-pokemon/caterpie-pokemon.component';

const routes: Routes = [
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'caterpie', component: CaterpiePokemonComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
