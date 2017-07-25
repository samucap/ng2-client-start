import { Injectable, Inject } from '@angular/core';
import { BaseService } from './base.service';
import { Http, Response, Headers }    from '@angular/http';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { AppState } from '../AppState'
import { login } from '../actions'

@Injectable()
export class AuthService extends BaseService {
  currUser
  baseUri

  constructor(@Inject('baseUri') baseUri, public http: Http, public router: Router, public store: Store<AppState>) {
    super(`${baseUri}auth/login`, http, router, store)

    this.store.select('user').subscribe(state => {
      this.currUser = state['authed']
    })
  }

  login(creds) {
    this.request('post', login, creds, () => this.router.navigate(['']))
  }



}
