import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListSerivce } from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:Ingredient[];
  private igChangeSub:Subscription;

  constructor(private shoppingListSerivce:ShoppingListSerivce){
  }

  ngOnInit(){
    this.ingredients=this.shoppingListSerivce.getIngredients();
    this.igChangeSub=this.shoppingListSerivce.ingredientChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
    })
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

}
