import { Component, ViewEncapsulation } from '@angular/core';
import { IUser } from './app-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  user1: IUser = {
    name: 'Hadi',
    age: 30 
  }

  // value!: IUser;

  users: IUser[] = [
    {
      name: 'Hadi',
      age: 30         
    },
    {
      name: 'Arash',
      age: 20         
    },
    {
      name: 'Sina',
      age: 25         
    },
    {
      name: 'Hoda',
      age: 35         
    },
  ]

  public onSelectChanges(user: IUser) {
    console.log(user);
  }
}
