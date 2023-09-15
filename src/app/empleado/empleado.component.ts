import { Component, EventEmitter, Output } from '@angular/core';
import { Empleado } from '../modelos/empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
    empleadoEntidad : Empleado;
    @Output() enviarEmpleado = new EventEmitter<Empleado>;
    constructor() {
      this.empleadoEntidad = new Empleado();

    }
    agregarEmpleado(){
      console.log(this.empleadoEntidad);
      this.enviarEmpleado.emit(this.empleadoEntidad);
      this.empleadoEntidad = new Empleado;
    }
}
