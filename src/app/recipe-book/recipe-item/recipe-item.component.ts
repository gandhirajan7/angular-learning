import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  @Output() selectRecipeEvent = new EventEmitter<Recipe>();

  constructor() {
    this.recipe = new Recipe();
  }

  selectRecipe() {
    this.selectRecipeEvent.emit(this.recipe);
  }
}
