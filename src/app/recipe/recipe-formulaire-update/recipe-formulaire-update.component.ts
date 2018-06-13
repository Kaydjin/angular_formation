import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../ingredient.model';
import { RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-formulaire-update',
  templateUrl: './recipe-formulaire-update.component.html',
  styleUrls: ['./recipe-formulaire-update.component.scss']
})
export class RecipeFormulaireUpdateComponent implements OnInit {

  updateForm: FormGroup;
  @Input() recipeInitial: Recipe;
  nbrIngredients: number;

  constructor(private route:ActivatedRoute, private recipeService: RecipeService, private fb: FormBuilder) {
    this.createForm();
    this.nbrIngredients = 1;
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required ], 
      picture: '',
      description: ''
    });
  }

  ngOnInit() {
    this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id')).subscribe(recipe => { this.recipeInitial = recipe;});
  }

  update() {
    let recipe: Recipe = this.updateForm.value;
    recipe.id = this.recipeInitial.id;
    if(recipe.name == ""){
        recipe.name = this.recipeInitial.name;
    }
    if(recipe.picture == ""){
      recipe.picture = this.recipeInitial.picture;
    }
    if(recipe.description == ""){
      recipe.description = this.recipeInitial.description;
    }
    this.recipeService.updateRecipe(recipe).subscribe();
  }

  addFieldIngredient(){
    this.nbrIngredients++;
  }

  removeFieldIngredient(){
    this.nbrIngredients--;
  }

}
