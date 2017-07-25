import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, XHRBackend, RequestOptions, Headers } from '@angular/http';
import { Store } from '@ngrx/store'
import {
  StoreModule,
  combineReducers } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { compose } from '@ngrx/core';
import { localStorageSync } from 'ngrx-store-localstorage';
import {
  MdInputModule,
  MdButtonModule
} from '@angular/material';

// services
import {
  HttpService,
  BaseService,
  AuthService,
  AuthGuardService,
  UserService,
  StatusService,
  RequestOptionsService
} from './services';

import { AppRoutingModule } from './app.routing-module'

import {
  user,
  users,
  status
} from './reducers';

import { AppState } from './AppState'

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component'
import { NavbarComponent } from './navbar/navbar.component'
import { UserListComponent } from './user-list/user-list.component';
import { TableComponent } from './table/table.component';
import { DataParserPipe } from './data-parser.pipe';

const reducers = {
  user,
  users,
  status
}

export const composedReducer = compose(localStorageSync({keys: ['user'], rehydrate: true}), combineReducers)(reducers)

export function comboReducer (state: any, action: any) {
  return composedReducer(state, action)
}

export function customHttpHandler (backend: XHRBackend, options: RequestOptions, store: Store<AppState>) {
  return new HttpService(backend, options, store)
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    UserListComponent,
    TableComponent,
    DataParserPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    StoreModule.provideStore(comboReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AppRoutingModule
  ],
  providers: [
    AuthService,
    BaseService,
    AuthGuardService,
    UserService,
    StatusService,
    {
      provide: HttpService,
      useFactory: customHttpHandler,
      deps: [XHRBackend, RequestOptions, Store]
    },
    {
      provide: RequestOptions,
      useClass: RequestOptionsService
    },
    { provide: 'baseUri', useValue: environment.baseUri },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
