import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkcasing'
})
export class CheckcasingPipe implements PipeTransform {

  transform(value:string, args?: any): any {
    value=value.toUpperCase();

    return value+args;
    
  }

}
