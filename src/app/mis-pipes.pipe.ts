import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'misPIPEs'
})
export class MisPIPEsPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return args[0] === 'Mayus' ?  value.toUpperCase() : value.toLowerCase();
  }

}
