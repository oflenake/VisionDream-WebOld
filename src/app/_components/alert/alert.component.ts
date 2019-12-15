import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../../_services';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit, OnDestroy {

  // Properties
  private subscription: Subscription;
  message: any;

  // Constructor
  constructor(private alertService: AlertService) { }

  // Initialize
  ngOnInit() {
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'alert alert-success';
            break;
          case 'error':
            message.cssClass = 'alert alert-danger';
            break;
        }

        this.message = message;
      });
  }

  // Housekeeping
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

console.log('AlertComponent is started!');
