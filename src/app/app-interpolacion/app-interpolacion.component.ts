import { Component } from '@angular/core';

@Component({
  selector: 'app-app-interpolacion',
  templateUrl: './app-interpolacion.component.html',
  styleUrls: ['./app-interpolacion.component.css']
})
export class AppInterpolacionComponent {

public nombre: string;
public apellido: string;

//Arreglo para probar NG For
public personas = ['jona', 'mano', 'mora'];

public bandera = false;

public valorSwitch : string;

//Ejemplo Para PIPES
public hoy  = new Date();

constructor(){

}

ngOnInit(): void {
  this.nombre = "Interpolacion"
}

// Ejemplo Template Estatement
decirHola(): void {
  alert('Hollla')
}

//Ejemplo Enlase de doble via o PROPERTY BINDING
verDatos() {
  console.log('Nombre: ', this.nombre);
  console.log('Apellido: ', this.apellido)
}
cargarDatos() {
  this.nombre = "Jona"
  this.apellido = "Mano"
}


}
