import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ayuda-a-errores',
  templateUrl: './ayuda-a-errores.component.html',
  styleUrls: ['./ayuda-a-errores.component.css']
})
export class AyudaAErroresComponent {
@Input()
control: FormControl | undefined;
}
