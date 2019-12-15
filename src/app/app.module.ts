import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { CoreModule } from './_core';
import { SharedModule } from './_shared';
import { appRoutingModule } from './routing';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments';

import { AppComponent } from './app.component';
import {
  HomeComponent, ServicesComponent, ContactComponent,
  LoginComponent, RegisterComponent, AboutComponent
} from './pages';

import { AlertComponent } from './_components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    appRoutingModule,
    LoggerModule.forRoot({
      serverLoggingUrl: `${environment.apiUrlLc}/api/v1/logs`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: false
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // Provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

console.log('AppModule is started!');
