import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Oranges', 3),
    new Ingredient('Apples', 3),
  ];

  constructor() {}
  ngOnInit(): void {}

  addIngredientToList(newIngredient: Ingredient) {
    console.log(newIngredient);
    this.ingredients.push(newIngredient);
  }
}
