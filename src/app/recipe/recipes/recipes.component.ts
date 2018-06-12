import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  title = 'app';
  recipes: Recipe[]; 

  constructor(private recipeService: RecipeService) {}

  ngOnInit(){
    this.recipeService.getRecipes().subscribe(recipes => { this.recipes = recipes;});
  }
}
