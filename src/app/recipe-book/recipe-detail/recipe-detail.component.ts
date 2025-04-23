import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe = {};

  //@Output() emitIngredients = new EventEmitter<Ingredient[]>();
  constructor(private shoppingListService: ShoppingListService) {}

  sendToShoppingList() {
    console.log(this.selectedRecipe.ingredients);
    if (this.selectedRecipe.ingredients != undefined)
      this.shoppingListService.addIngredientsToList(
        this.selectedRecipe.ingredients
      );
  }
}
