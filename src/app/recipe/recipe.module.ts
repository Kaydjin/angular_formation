import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe.component';
import { StrToArrayPipe } from './str-to-array.pipe';
import { RecipesComponent } from './recipes/recipes.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';
import { RecipeFormulaireComponent } from './recipe-formulaire/recipe-formulaire.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './recipes/order-by.pipe';

@NgModule({
  declarations: [
    RecipeComponent,
    StrToArrayPipe,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeFormulaireComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
})
export class RecipeModule { }
