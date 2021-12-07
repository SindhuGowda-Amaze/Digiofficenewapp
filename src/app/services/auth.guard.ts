
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";


@Injectable()

export class AuthGuard implements CanActivate {
  session: any
  constructor(

    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    this.session = sessionStorage.getItem('login');
    debugger
    //var isAuthenticated = this.session;
    if (this.session != "1") {
      this.router.navigate(['/Login']);
      return false;
    }
    else {
      return true;
    }
  }
}