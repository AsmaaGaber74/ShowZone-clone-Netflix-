import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../../Service/favorite.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { BackgroundService } from '../../../Service/background.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-favoritmovie',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent],
  templateUrl: './favoritmovie.component.html',
  styleUrls: ['./favoritmovie.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites: any[] = [];
  isExpanded: boolean = false;
  backgroundColor: string = 'white';
  backgroundColorSubscription: Subscription | undefined;

    toggleExpand(movie: any) {
      movie.isExpanded = !movie.isExpanded;
    }
  constructor(private _favoriteService: FavoriteService,private backgroundService: BackgroundService) { }

  ngOnInit(): void {
    this.favorites = this._favoriteService.getFavorites();
    this.backgroundColorSubscription = this.backgroundService.backgroundColorChanged.subscribe(color => {
      this.backgroundColor = color;
      console.log('Background color:', this.backgroundColor);  
    });
  }

  removeFavorite(movieId: number): void {
    this._favoriteService.removeFavorite(movieId);
    this.favorites = this._favoriteService.getFavorites();
  }
}

