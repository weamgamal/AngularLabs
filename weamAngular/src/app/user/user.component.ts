import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../SharedClassesAndTypes/IUser';
UserService

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  arrayUsers: IUser[] = [];
  errMsg: string = "";
  constructor(private _UserService: UserService) {
  }


  ngOnInit(): void {
    // this.getUsers();
    this._UserService.getUsers().subscribe(
      {
        next: data => this.arrayUsers = data,
        error: err => this.errMsg = err
      }
    )
  }
}
