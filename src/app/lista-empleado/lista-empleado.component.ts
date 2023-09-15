import { Component, Input } from '@angular/core';
import { Empleado } from '../modelos/empleado.model';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent {
  @Input() recibirEmpleado = new Empleado;
  listaEmpleados : Empleado[] = [];
  cargarItemsEmpleado(nuevoEmpleado : Empleado){
    console.log("nuevo empleado desde Lista emplead", nuevoEmpleado);
    this.listaEmpleados.push(nuevoEmpleado);
    console.log("lista de empleados",this.listaEmpleados);
  }
}
