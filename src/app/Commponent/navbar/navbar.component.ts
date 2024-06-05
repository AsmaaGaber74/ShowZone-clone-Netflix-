// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BackgroundService } from '../../../Service/background.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RouterModule } from '@angular/router';
// import { LogoutService } from '../../../Service/logout.service';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [FormsModule,CommonModule ,RouterModule],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.css'
// })
// export class NavbarComponent implements OnInit 
// {
//    name=JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
//   constructor(public backgroundService: BackgroundService, private sinoughtservise:LogoutService) {}

//   ngOnInit() {
//     this.backgroundService.initializeBackground();
    
//   }
  
//   Background() {
//     const isDarkMode = this.backgroundService.getDarkMode();
//     this.backgroundService.setDarkMode(!isDarkMode);
//     document.body.style.backgroundColor = !isDarkMode ? 'black' : 'white';
//   }

//   signoutt()
//     {
//       sessionStorage.removeItem("loggedInUser");
//       this.sinoughtservise.signout();
//     }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BackgroundService } from '../../../Service/background.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LogoutService } from '../../../Service/logout.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FavoriteService } from '../../../Service/favorite.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule,TranslateModule ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lang = '';
  favcount:number=0;
  selectedLanguage: string = 'en';
  isDropdownOpen = false;
  name = JSON.parse(sessionStorage.getItem("loginuser")!).name;
  
  pic = JSON.parse(sessionStorage.getItem("loginuser")!).picture;
  constructor(
    public backgroundService: BackgroundService,
    private signoutService: LogoutService,
    private router: Router,
    private translate: TranslateService,
    private favoriteService: FavoriteService,
   
  ) {}

  ngOnInit() {
    
    this.backgroundService.initializeBackground();
    this.loadUserInfo();
   this. getfavcount();
    const storedLang = localStorage.getItem('lang');
    if (storedLang) 
    {
      this.lang = storedLang;
    }
    this.translate.use(this.lang); 

      this.translate.onLangChange.subscribe(langChangeEvent =>
     {
      this.lang = langChangeEvent.lang;
    });

    this.lang=localStorage.getItem('lang')||'en';
   
  }
  loadUserInfo() {
    const loginUser = JSON.parse(sessionStorage.getItem("loginuser")!);
    if (loginUser) {
      this.name = loginUser.name;
      this.pic = loginUser.picture || 'default_picture_url'; 
    }
  }

  Background() {
    const isDarkMode = this.backgroundService.getDarkMode();
    this.backgroundService.setDarkMode(!isDarkMode);
    document.body.style.backgroundColor = !isDarkMode ? 'black' : 'white';
  }

  signoutt() {
    sessionStorage.removeItem("loginuser");
    this.signoutService.signout();
  }
  changelanguage(lang: string) {
  
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    console.log("lang",lang)
  }
  
  selectlanguages(event: any) {
    this.translate.use(event.target.value);
  }
 

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  getfavcount()
  {
     this.favcount= this.favoriteService.getFavoritescount();
     console.log("fafcount",this.favoriteService.getFavoritescount());
  }

  
  
}
