import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: any[] = [];

  constructor() { }

  addFavorite(movie: any): void {
    if (!this.isFavorite(movie.id)) {
      this.favorites.push(movie);
    }
  }

  removeFavorite(movieId: number): void {
    this.favorites = this.favorites.filter(movie => movie.id !== movieId);
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  isFavorite(movieId: number): boolean {
    return this.favorites.some(movie => movie.id === movieId);
  }
}
