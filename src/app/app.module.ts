import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { CaterpiePokemonComponent } from './caterpie-pokemon/caterpie-pokemon.component';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ListaEmpleadoComponent,
    PokemonComponent,
    CaterpiePokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChipModule,
    ButtonModule,
    BrowserAnimationsModule,
    FieldsetModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
