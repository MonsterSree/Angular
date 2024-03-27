import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-control-app';

  firedNumbers:number[]=[];

  onIntervalFired(firedNumber:number){
    console.log(firedNumber);
    this.firedNumbers.push(firedNumber);
  }
}
