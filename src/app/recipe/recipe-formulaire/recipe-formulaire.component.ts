import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-recipe-formulaire',
  templateUrl: './recipe-formulaire.component.html',
  styleUrls: ['./recipe-formulaire.component.scss']
})
export class RecipeFormulaireComponent implements OnInit {

  recipe: Recipe;
  nbrIngredients: number;

  constructor(private recipeService: RecipeService) {
    this.nbrIngredients = 1;
    this.recipe = new Recipe();
    let ingredient = new Ingredient();
    ingredient.ingredientId = 1;
    ingredient.name = "Saucisse";
    ingredient.quantity = 0;
    ingredient.unit = "Portion";
    ingredient.recipeId = 0;
    this.recipe.ingredients = [ingredient];
    this.recipe.instructions = '';
  }

  ngOnInit() {
  }

  ajouter() {
    this.recipeService.addRecipe(this.recipe).subscribe();
  }

  addFieldIngredient(){
    this.nbrIngredients++;
  }

  removeFieldIngredient(){
    this.nbrIngredients--;
  }

}
