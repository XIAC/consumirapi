import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'pokemon', component: PokemonComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
