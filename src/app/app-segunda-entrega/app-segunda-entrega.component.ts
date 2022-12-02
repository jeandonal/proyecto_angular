import { Component } from '@angular/core';

@Component({
  selector: 'app-app-segunda-entrega',
  templateUrl: './app-segunda-entrega.component.html',
  styleUrls: ['./app-segunda-entrega.component.css']
})
export class AppSegundaEntregaComponent {
  
  //aplicando  PIPES
   public hoy  = new Date();

  //Arreglo para usar NG FOR 
  public nombreAlumno: string;
  public alumnos:{nombre: string, edad: number}[] =  [

  {nombre:"Jona Mano", edad: 30},
  {nombre:"Natalia Benitez", edad: 35},
  {nombre:"Jaun Guzman", edad: 40},
  {nombre:"Leidy Camargo", edad: 45},
  {nombre:"Miguel Duran", edad: 50},
  {nombre:"Natalia Palacio", edad: 55},
  {nombre:"Critian torres", edad: 60},
  {nombre:"Laura Pinzon", edad: 365}
  
];
       
  // Aplicando Template Estatement
  conteoArrayAlumnos() {
    let cantidadAlum = this.alumnos.length
    return cantidadAlum
  }

  conteoArrayAlumnos1() {
    let cantidadAlum = this.alumnos.length
    console.log(cantidadAlum)
  }

  buscarAlumnos() {
    let arrayAlumnos = this.alumnos.find(elemento => elemento.nombre = 'Juan Guzmans');
    console.log(arrayAlumnos)
  }
  
  //aplicando PROPERTY BINDING
  cargarAlumno() {
    this. nombreAlumno =  'Juan Guzmans'
  }

}


