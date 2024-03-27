import { Ingredient } from "../shared/ingredient-model";
import { ShoppingListSerivce } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./recipe.model";
import {EventEmitter,Injectable} from '@angular/core';

@Injectable()
export class RecipeService{


    recipes:Recipe[] =[
        new Recipe("A Test Recipe",
        "This is simply test",
        "https://th.bing.com/th/id/OIP.Q5GhG4BOkWg-krysgtrZJAHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        [
            new Ingredient("meat",1),
            new Ingredient("Freach Fries",20)
        ]),
        new Recipe("Another Test Recipe",
        "This is simply test",
        "https://th.bing.com/th/id/OIP.Q5GhG4BOkWg-krysgtrZJAHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        [
            new Ingredient("meat",1),
            new Ingredient("Buns",20)
        ])
    
      ];

      constructor(private shoppingListService:ShoppingListSerivce){

      }
      


      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}