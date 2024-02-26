import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if (localStorage.getItem('token')) {

  } else {
    router.navigate(['auth']);
  }
  return true;
};
