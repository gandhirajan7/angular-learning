import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.css'],
})
export class RecipeHomeComponent {
  selectedRecipeHome: Recipe;

  constructor() {
    this.selectedRecipeHome = new Recipe('dummy');
  }

  ngOnInit() {}

  populateSelectedRecipe(recipe: Recipe) {
    this.selectedRecipeHome = recipe;
  }
}
