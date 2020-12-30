import { Component } from '@angular/core';
import { User, UserService } from 'openapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly userService: UserService) { }

  public getUser(): void {
    this.userService
      .getUser('get-test-id')
      .subscribe((user) => {
        console.log('Get user: ' + JSON.stringify(user));
      });
  }

  public createUser(): void {
    let createUser: User = {
      id : 'create-test-id',
      nickname: 'dummy-nickname' 
    };

    this.userService
      .createUser(createUser)
      .subscribe((user) => {
        console.log('Create user: ' + JSON.stringify(user));
      });
  }

  public updateUser(): void {
    let createUser: User = {
      id : 'update-test-id',
      nickname: 'dummy-nickname' 
    };

    this.userService
      .updateUser(createUser)
      .subscribe((user) => {
        console.log('Update user: ' + JSON.stringify(user));
      });
  }

  public deleteUser(): void {
    this.userService
      .deleteUser('delete-test-id')
      .subscribe((user) => {
        console.log('Delete user: ' + JSON.stringify(user));
      });
  }
  
}
