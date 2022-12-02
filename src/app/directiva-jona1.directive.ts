import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirectivaJona1]'
})
export class DirectivaJona1Directive {

  constructor(
    private elemento : ElementRef,
    private renderer: Renderer2
  ) { 
    renderer.setStyle(elemento.nativeElement, 'color', 'blue');

  }

}
