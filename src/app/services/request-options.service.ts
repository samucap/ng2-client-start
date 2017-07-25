import { Injectable, Inject } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs, Headers, Request } from '@angular/http';
import { Store } from '@ngrx/store'
import { AppState } from '../AppState'
import { AuthService } from './auth.service'

@Injectable()
export class RequestOptionsService extends BaseRequestOptions {
  currUser
  headers
  baseUri
  url

  constructor(private store: Store<AppState>, @Inject('baseUri') baseUri) {
    super();

    this.store.select('user').subscribe(state => this.currUser = state['authed'])
    this.baseUri = baseUri

    this.makeHeaders()
  }

  makeHeaders () {
    if (!this.headers) {
      this.headers = new Headers()

    }
  }

  merge(options?:RequestOptionsArgs):RequestOptions {
    options.url = `${this.baseUri}${options.url}`

    if (!options.headers) options.headers = new Headers()

    options.headers.set('Authorization', `${this.currUser['id']}`);

    return super.merge(options)
  }

}
