import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';
import {RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root' //Avoid putting it in the config file.
})
export class RecipeService {
  private _baseUrl = "http://10.0.1.55:8080/api/v1/recipes";

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this._baseUrl);
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${ this._baseUrl }/${ id }`);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this._baseUrl, recipe);
  }

  deleteRecipe(id: number): Observable<Object>  {
    return this.http.delete(`${ this._baseUrl }/${ id }`);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe>  {
    console.log(recipe);
    return this.http.patch<Recipe>(this._baseUrl, recipe);
  }
}
