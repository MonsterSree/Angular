import { Component,ViewChild ,ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListSerivce } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild("nameInput",{static:true}) nameInputRef:ElementRef;
  @ViewChild("amountInput",{static:true}) amountInputRef:ElementRef;

  constructor(private shoppingListService:ShoppingListSerivce){

  }

  onAddItem(){
    this.shoppingListService.addIngredient(new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value));
  }
}
