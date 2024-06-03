declare var google:any;
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from './favorite.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  router=inject(Router)
  constructor( private favoriteService: FavoriteService) { }

  signout()
    {
         
      this.favoriteService.clearFavorites;
      google.accounts.id.disableAutoSelect();
      this.router.navigate(['/login']);
      
    }
}
