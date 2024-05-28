
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private readonly STORAGE_KEY = 'background_color';
  backgroundColorChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  setDarkMode(isDark: boolean) 
    {
      const color = isDark ? 'black' : 'white';
      localStorage.setItem(this.STORAGE_KEY, isDark ? 'black' : 'white');
      this.backgroundColorChanged.emit(color);
    }

  getDarkMode(): boolean 
    {
      const storedColor = localStorage.getItem(this.STORAGE_KEY);
      return storedColor === 'black';
    }
    

  initializeBackground()
   {
      const storedColor = localStorage.getItem(this.STORAGE_KEY);
      if (storedColor) 
        {
          document.body.style.backgroundColor = storedColor;
          this.backgroundColorChanged.emit(storedColor);
        }
      
    }
    // getBackgroundColor(): string 
    // {
    //   return localStorage.getItem(this.STORAGE_KEY) || 'black';
    // }
  
}
