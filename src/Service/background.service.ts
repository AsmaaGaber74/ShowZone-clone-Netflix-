// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BackgroundService {

//   constructor() { }
//   private isDarkMode = true;

//   setDarkMode(isDark: boolean) {
//     this.isDarkMode = isDark;
//     document.body.style.backgroundColor = isDark ? 'black' : 'white';
//   }

//   getDarkMode(): boolean {
//     return this.isDarkMode;
//   }

// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private readonly STORAGE_KEY = 'background_color';

  constructor() {}

  setDarkMode(isDark: boolean) 
    {
      localStorage.setItem(this.STORAGE_KEY, isDark ? 'black' : 'white');
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
        }
      // if(storedColor=='black')
      //   {
      //     document.body.style.color = 'white';
      //   }
        
    }
}
