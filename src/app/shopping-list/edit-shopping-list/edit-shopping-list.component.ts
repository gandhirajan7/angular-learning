import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css'],
})
export class EditShoppingListComponent {
  @ViewChild('nameInput') nameRef!: ElementRef;
  @ViewChild('amountInput') amountRef!: ElementRef;

  @Output() addNewIngredientEvent = new EventEmitter<Ingredient>();

  addNewIngredient() {
    this.addNewIngredientEvent.emit(
      new Ingredient(
        this.nameRef.nativeElement.value,
        this.amountRef.nativeElement.value
      )
    );
  }
}
