import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  expanded: boolean;

  constructor(private route:ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id')).subscribe(recipe => { this.recipe = recipe;});
  }
  voirComposants() {
    this.expanded = true;
  }
  cacherComposants() {
    this.expanded = false;
  }
}
