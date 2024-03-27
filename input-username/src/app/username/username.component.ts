import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  userName="Srikanth";
  onUserNameClick(){
    this.userName="";
  }
}
