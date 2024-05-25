import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BackgroundService } from '../../../Service/background.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,CommonModule ,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(public backgroundService: BackgroundService) {}

  ngOnInit() {
    this.backgroundService.initializeBackground();
  }

  Background() {
    const isDarkMode = this.backgroundService.getDarkMode();
    this.backgroundService.setDarkMode(!isDarkMode);
    document.body.style.backgroundColor = !isDarkMode ? 'black' : 'white';
  }
}
  // isDarkMode = true;
  
  // Background() {
  //   const body = document.body;
  //   this.isDarkMode = !this.isDarkMode;
  //   body.style.backgroundColor = this.isDarkMode ? 'black' : 'white';
  //   if( body.style.backgroundColor =='black')
  //       {
  //         body.style.color='white'
  //       }
  //     else
  //       {
  //         body.style.color='black'
  //       }
  // }
//}
