import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: Ingredient[] = [];
  addNewIngredientEvent = new EventEmitter<Ingredient[]>();
  constructor() {
    this.ingredients = [
      new Ingredient('Oranges', 3),
      new Ingredient('Apples', 3),
    ];
  }

  addIngredientToList(newIngredient: Ingredient) {
    console.log(newIngredient);
    this.ingredients.push(newIngredient);
    this.addNewIngredientEvent.emit(this.ingredients.slice());
  }

  addIngredientsToList(newIngredientList: Ingredient[]) {
    this.ingredients.push(...newIngredientList);
    this.addNewIngredientEvent.emit(this.ingredients.slice());
  }

  getAllIngredients() {
    return this.ingredients.slice();
  }
}
