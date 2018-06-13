import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe} from './recipe.model';
import { RecipeService } from './recipe.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output('delete') deleteDone: EventEmitter<Recipe> = new EventEmitter();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  delete(){
     this.recipeService.deleteRecipe(this.recipe.id).subscribe(() => this.deleteDone.emit(this.recipe));
  }

}
