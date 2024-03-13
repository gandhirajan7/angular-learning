import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
``;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[];
  @Output() shareRecipeUpwardsEvent = new EventEmitter<Recipe>();
  constructor() {
    this.recipes = [
      new Recipe(
        'Briyani',
        'Thalapakkati Mutton Briayni',
        'https://www.spiceindiaonline.com/wp-content/uploads/2017/09/Thalappakatti-Mutton-Biriyani-3.jpg'
      ),
      new Recipe(
        'Dosai',
        'Spicy tamil masala dosai',
        'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masala-dosa-recipe-1-1024x1536.jpg'
      ),
      new Recipe(
        'Thayir Sadham',
        'South Indian Curd Rice',
        'https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-5.jpg'
      ),
      new Recipe(
        'Dosai',
        'Spicy tamil masala dosai',
        'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masala-dosa-recipe-1-1024x1536.jpg'
      ),
      new Recipe(
        'Briyani',
        'Thalapakkati Mutton Briayni',
        'https://www.spiceindiaonline.com/wp-content/uploads/2017/09/Thalappakatti-Mutton-Biriyani-3.jpg'
      ),
    ];
  }

  shareRecipeUpwards(recipe: Recipe) {
    this.shareRecipeUpwardsEvent.emit(recipe);
  }
}
