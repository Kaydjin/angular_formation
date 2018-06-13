import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../recipe.model';

@Pipe({ 
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(param : Recipe[]): Recipe[] {
      return param.sort(this.compare);
  }

  compare(a: Recipe, b: Recipe) {
    if(a.name == null) return -1;
    if(b.name == null) return 1;
    return a.name.localeCompare(b.name);
  }

}