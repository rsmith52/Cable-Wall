import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'

@Injectable()

export class CableGuardService implements CanActivate {

  constructor(private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let itemNumber = +route.url[1].path;
    if (isNaN(itemNumber) || itemNumber < 0) {
      alert("Invalid Item Number");
      this._router.navigate(['cables']);
      return false;
    };
    return true;
  }
}
