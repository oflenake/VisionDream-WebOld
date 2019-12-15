import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { VDBuildVersionModel, UserModel } from './_models';
import { VERSION } from '../environments';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../environments';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  // Properties
  VisionDreamBuild: VDBuildVersionModel;
  currentUser: UserModel;
  version = VERSION;

  public appTitle = environment.appName;
  private serverToken = environment.tokenLc;
  private apiUrl = environment.apiUrlLc;

  // Constructor
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private logger: NGXLogger
  ) {
    //this.currentUser = new UserModel();
    this.VisionDreamBuild = new VDBuildVersionModel();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.logger.log(`[DEFAULT] - Application name is: ${this.appTitle}`);
    this.logger.log(`[DEFAULT] - Server token is: ${this.serverToken}`);
    this.logger.log(`[DEFAULT] - Server apiUrl is: ${this.apiUrl}`);
    this.logger.debug('DEBUG message...');
    this.logger.info('INFO message');
    this.logger.log(`DEFAULT log message. App name: ${environment.appName}`);
    this.logger.warn('WARNING message');
    this.logger.error('ERROR message');
    this.logger.fatal('FATAL message');
    this.logger.trace('TRACE message');
  }

  // Initialize
  ngOnInit() {
  }

  // Public Functions: logout function
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}

console.log('AppComponent is started!');
