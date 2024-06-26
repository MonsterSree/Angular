import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {

  id:number;
  editMode:boolean=false;

  constructor(private route:ActivatedRoute){

  }
  ngOnInit(){
    this.route.params.subscribe(
      (params)=>{
        this.id=+params['id'];
        this.editMode=params['id'] != null;
      }
    )
  }
}
