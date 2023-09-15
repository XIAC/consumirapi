import { Component, ViewChild } from '@angular/core';
import { Empleado } from './modelos/empleado.model';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consumirservicios';
  @ViewChild(ListaEmpleadoComponent)  listaEmpleado = new ListaEmpleadoComponent;
  recibirEmpleado(event : Empleado){
    console.log("REcibiendo el form del comp Hijo",event);
    this.listaEmpleado.cargarItemsEmpleado(event);
  }
}
