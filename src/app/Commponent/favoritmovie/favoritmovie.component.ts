import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../../Service/favorite.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-favoritmovie',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './favoritmovie.component.html',
  styleUrls: ['./favoritmovie.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites: any[] = [];

  constructor(private _favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.favorites = this._favoriteService.getFavorites();
  }

  removeFavorite(movieId: number): void {
    this._favoriteService.removeFavorite(movieId);
    this.favorites = this._favoriteService.getFavorites();
  }
}

