import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { VDBuildVersionModel, UserModel } from '../../_models';
import { UserService, AuthenticationService } from '../../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  // Properties
  VisionDreamBuild: VDBuildVersionModel;
  currentUser: UserModel;
  users = [];

  // Constructor
  constructor(private authenticationService: AuthenticationService, private userService: UserService) {
    this.VisionDreamBuild = new VDBuildVersionModel();
    this.currentUser = this.authenticationService.currentUserValue;
  }

  // Initialize
  ngOnInit() {
    this.loadAllUsers();
  }

  // Public Functions: deleteUser function
  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  // Private Functions: loadAllUsers function
  private loadAllUsers() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

}
