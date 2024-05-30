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

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  name = JSON.parse(sessionStorage.getItem("loginuser")!).name;
  
  pic = JSON.parse(sessionStorage.getItem("loginuser")!).picture;
  constructor(
    public backgroundService: BackgroundService,
    private signoutService: LogoutService,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.backgroundService.initializeBackground();
    this.loadUserInfo();
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
}
