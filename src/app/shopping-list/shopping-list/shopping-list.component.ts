import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getAllIngredients();
    this.shoppingListService.addNewIngredientEvent.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
