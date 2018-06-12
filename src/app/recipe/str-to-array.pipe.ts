import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToArray'
})
export class StrToArrayPipe implements PipeTransform {

  transform(value: String, args?: any): String[] {
    return value.split('\\n');
  }

}
