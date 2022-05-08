import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../app-interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _user!: IUser;
  @Input() 
  set user(user: IUser) {
    this._user = user;
    this.counter++;
  }
  /////////////////////////////
    // (2)

  // get user() {
  //   return this._user;
  // }

  /////////////////////////////
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this._user);

    ////////////////////////////
    // (2)

    // console.log(this.user);

    ////////////////////////////
  }

}
