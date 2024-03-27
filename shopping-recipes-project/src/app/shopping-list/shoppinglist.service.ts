import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient-model";

export class ShoppingListSerivce{

    ingredientChanged=new Subject<Ingredient[]>();
    ingredients:Ingredient[]=[
        new Ingredient("Apples",5),
        new Ingredient("Tomotoes",10)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}