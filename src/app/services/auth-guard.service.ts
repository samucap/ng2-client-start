import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service'


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return true
    //if (this.authService.currUser) {
    //  return true;
    //} else {
    //  this.router.navigate(['/login'])
    //  return false
    //}
  }

}
