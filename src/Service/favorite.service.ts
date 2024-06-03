import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private storageKeyPrefix = 'favorites_';

  constructor() {}

  saveFavorite(movie: any): void {
    const loginUser = JSON.parse(sessionStorage.getItem("loginuser")!);
    if (loginUser) {
      const favoritesKey = this.storageKeyPrefix + loginUser.username;
      let favorites = this.loadFavorites();
      favorites.push(movie);
      localStorage.setItem(favoritesKey, JSON.stringify(favorites));
    }
  }
  
  loadFavorites(): any[] {
    const loginUser = JSON.parse(sessionStorage.getItem("loginuser")!);
    if (loginUser) {
      const favoritesKey = this.storageKeyPrefix + loginUser.username;
      return JSON.parse(localStorage.getItem(favoritesKey)!) || [];
    }
    return [];
  }
  
  addFavorite(movie: any): void {
    if (!this.isFavorite(movie.id)) {
      this.saveFavorite(movie);
    }
  }

  removeFavorite(movieId: number): void {
    const loginUser = JSON.parse(sessionStorage.getItem("loginuser")!);
    if (loginUser) {
      const favoritesKey = this.storageKeyPrefix + loginUser.username;
      let favorites = this.loadFavorites().filter((movie: any) => movie.id !== movieId);
      localStorage.setItem(favoritesKey, JSON.stringify(favorites));
    }
  }

  clearFavorites(): void {
    const loginUser = JSON.parse(sessionStorage.getItem("loginuser")!);
    if (loginUser) {
      const favoritesKey = this.storageKeyPrefix + loginUser.username;
      localStorage.removeItem(favoritesKey);
    }
  }

  getFavorites(): any[] {
    return this.loadFavorites();
  }

  isFavorite(movieId: number): boolean {
    return this.loadFavorites().some((movie: any) => movie.id === movieId);
  }
}
