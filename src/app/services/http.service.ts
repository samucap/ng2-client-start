import { Inject, Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers, BaseRequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store'
import { AppState } from '../AppState'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthService, RequestOptionsService } from './'


@Injectable()
export class HttpService extends Http {
  url
  baseUri

  constructor (backend: XHRBackend, defaultOptions: RequestOptions, private store: Store<AppState>) {
    super(backend, defaultOptions);
  }

  request(url: string, options?: RequestOptionsArgs, action?: any): Observable<any> {
    options.url = url

    return super.request(url, this.requestOptions(options))
  }

  requestor(url: string, options?: RequestOptionsArgs, action?:any): any {
    this.request(url, options)
      .map(res => res.json())
      .subscribe(res => {
        this.store.dispatch(action(res))
      })
  }

  requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    let opts = new RequestOptions(),
        req = new Request(opts.merge(options))

    return req;
  }

  private catchAuthError (self) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        // if not authenticated
        console.log('errrr', res);
      }
      return Observable.throw(res);
    };
  }

}
