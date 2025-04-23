import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from 'src/app/recipe-book/recipe.model';
import { Ingredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
    this.recipes = [
      new Recipe(
        'Briyani',
        'Thalapakkati Mutton Briayni',
        'https://www.spiceindiaonline.com/wp-content/uploads/2017/09/Thalappakatti-Mutton-Biriyani-3.jpg',
        [new Ingredient('Rice', 2), new Ingredient('Mutton', 1)]
      ),
      new Recipe(
        'Dosai',
        'Spicy tamil masala dosai',
        'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masala-dosa-recipe-1-1024x1536.jpg',
        []
      ),
      new Recipe(
        'Thayir Sadham',
        'South Indian Curd Rice',
        'https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-5.jpg',
        []
      ),
    ];
  }

  public getRecipeList() {
    return this.recipes.slice();
  }
}
