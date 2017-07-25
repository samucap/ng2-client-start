import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers }    from '@angular/http';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { AppState } from '../AppState'
import {
  login,
  loadedUsers
} from '../actions'
import { Observable } from 'rxjs'

import { AuthService } from './auth.service'
import { HttpService } from './http.service';

@Injectable()
export class UserService {
  url
  userList: Observable<any>;


  constructor(private http: HttpService, public router: Router, private store: Store<AppState>, private authService: AuthService) {
    this.url = `users`

    console.log('@userservice', this)
    this.userList = this.store.select('users')
  }

  getUsers () {
    this.http.requestor(this.url, {method: 'get'}, loadedUsers)
  }

}
