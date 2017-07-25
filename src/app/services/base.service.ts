import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Response, Headers }    from '@angular/http';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import 'rxjs/add/operator/map';

import { AppState } from '../AppState'

@Injectable()
export class BaseService {
  protected headers;

  constructor(public baseUri: string, public http: Http, public router: Router, public store: Store<AppState>) {
    this.headers = this.makeHeaders();
  }

  makeHeaders () {
    let headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    return headers;
  }

  request (method: string, action: Function, body = {}, callback?: Function) {
    return this.http[method](this.baseUri, body, {headers: this.headers})
      .map((res: Response) => res.json())
      .subscribe(
        res => {
          this.store.dispatch(action(res))

          if (callback) callback()
        },
        err => console.log('err', err))
  }

}
