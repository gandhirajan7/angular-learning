import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css'],
})
export class EditShoppingListComponent implements OnInit {
  @ViewChild('nameInput') nameRef!: ElementRef;
  @ViewChild('amountInput') amountRef!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {}

  addIngredientToList() {
    var newIngredient = new Ingredient(
      this.nameRef.nativeElement.value,
      this.amountRef.nativeElement.value
    );
    this.shoppingListService.addIngredientToList(newIngredient);
    //this.shoppingListService.addNewIngredientEvent.emit(newIngredient);
  }
  // @Output() addNewIngredientEvent = new EventEmitter<Ingredient>();

  // addNewIngredient() {
  //   this.addNewIngredientEvent.emit(
  //     new Ingredient(
  //       this.nameRef.nativeElement.value,
  //       this.amountRef.nativeElement.value
  //     )
  //   );
  // }
}
