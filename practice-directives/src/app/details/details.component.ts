import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  content="Secret Password = tuna";
  toogle=false;
  buttonClicks=[];
  count=0;

  onClicked(){
    this.toogle=!this.toogle;
    this.buttonClicks.push(++this.count);
  }

  getColor(){
    return this.buttonClicks.length>=5? "blue":"transparent";
  }
}
