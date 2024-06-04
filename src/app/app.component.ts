// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './Commponent/navbar/navbar.component';
// import { BackgroundService } from '../Service/background.service';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'ShowTime';

//   constructor(private backgroundService: BackgroundService) {}

//   ngOnInit() {
//     this.backgroundService.initializeBackground();
//   }
// }


import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BackgroundService } from '../Service/background.service';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslateService] 
})
export class AppComponent {
  title = 'showzone';
  
  constructor(private translate: TranslateService,private backgroundService: BackgroundService) {
    this.translate.setDefaultLang('en');
    this.translate.use(localStorage.getItem('lang') || 'en');
   
   }

     ngOnInit() {
       this.backgroundService.initializeBackground();
     }
}

