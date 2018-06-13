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
    return a.name.localeCompare(b.name);
  }

}