import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.css']
})
export class PageWrapperComponent {

  // Se crean los controles que se van a comuicar con el formulario HTML
  //y son parte del Form Group
  // el validador de ejemplo no se llama la funcion solo se coloca la referencia 
  controlNombre = new FormControl('',[Validators.required, Validators.minLength(3), this.validadorPersonalizadoEjemplo])
  controlApellido = new FormControl('',[Validators.required, Validators.minLength(3)])
  controlEmail = new FormControl('',[Validators.required, Validators.email])
  //Validators.pattern(/^\d+$/) valida solo numeros con la expresion regular /^\d+$/
  controlTelefono = new FormControl('',[Validators.required, Validators.minLength(7), Validators.pattern(/^\d+$/)])
  controlContrasena = new FormControl('',[Validators.required, Validators.minLength(8)])
  controlConfirmContrasena = new FormControl('',[Validators.required, Validators.minLength(8)])
  controlTerminosCondiciones = new FormControl(false, [Validators.requiredTrue])

  //Se crea el formulario como tal que es FormGroup
  // va a contener los controles
  formularioTerceraEntrega = new FormGroup({
nombre: this.controlNombre,
apellido: this.controlApellido,
telefono: this.controlTelefono,
contrasena: this.controlContrasena,
confirmContrasena: this.controlConfirmContrasena,
terminosCondiciones: this.controlTerminosCondiciones
  },{
    //Validador para qeu dos campos Coincidan
    // Este Validador se aplica al FormGroup en general
    validators:[
      this.matchsValidadorContrasena
    ]
  }
  )

//Crear validador Personalizado
//(Control: FormControl) hace referencia al validador  al que se apunta en este caso controlName
validadorPersonalizadoEjemplo(control: FormControl){
 if(control.value?.toLowerCase() === 'jona'){
  // retornar objeto de error para el ejemplo
  return{
    isJona: true
  }
 }
 return null
}

//Funcion para el validador de campos que coincidan
//Para el ejemplo  se hacen Match con las contraseñas
matchsValidadorContrasena(){
// se debe retornar una funcion validadora
    return() => {
        if (this.controlContrasena.value !== this.controlConfirmContrasena.value){
            contrasnasCoinciden: true
        }
    return null
    }
  }
  
  enviarFormulario(){
    console.log(this.formularioTerceraEntrega)
  }

}
