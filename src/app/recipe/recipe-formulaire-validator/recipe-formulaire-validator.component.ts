import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../ingredient.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-formulaire-validator',
  templateUrl: './recipe-formulaire-validator.component.html',
  styleUrls: ['./recipe-formulaire-validator.component.scss']
})
export class RecipeFormulaireValidatorComponent implements OnInit {
  addForm: FormGroup;
  recipe: Recipe;
  nbrIngredients: number;

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {
    this.createForm();
    this.nbrIngredients = 1;
  }

  createForm() {
    this.addForm = this.fb.group({
      name: ['', Validators.required ], 
      picture: '',
      description: ''
    });
  }

  ngOnInit() {
  }

  ajouter() {
    this.recipe = this.addForm.value;
    let ingredient = new Ingredient();
    ingredient.ingredientId = 1;
    ingredient.name = "Saucisse";
    ingredient.quantity = 0;
    ingredient.unit = "Portion";
    ingredient.recipeId = 0;
    this.recipe.ingredients = [ingredient];
    this.recipe.instructions = '';
    this.recipeService.addRecipe(this.recipe).subscribe();
  }

  addFieldIngredient(){
    this.nbrIngredients++;
  }

  removeFieldIngredient(){
    this.nbrIngredients--;
  }
}
