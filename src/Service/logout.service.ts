declare var google:any;
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  router=inject(Router)
  constructor() { }

  signout()
    {
      google.accounts.id.disableAutoSelect();
      this.router.navigate(['/login'])
    }
}
