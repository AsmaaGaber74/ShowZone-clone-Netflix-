import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesService } from '../../../Service/movies.service';
import { BackgroundService } from '../../../Service/background.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,ReactiveFormsModule,NavbarComponent,TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  implements OnInit
 {
  backgroundColorSubscription: Subscription | undefined;
  backgroundColor: string = 'white';
  constructor(private _moviesService: MoviesService,private backgroundService: BackgroundService) { }

  ngOnInit(): void 
  {
    this.backgroundColorSubscription = this.backgroundService.backgroundColorChanged.subscribe(color => {
      this.backgroundColor = color;
      console.log('Background color:', this.backgroundColor);  
    });
  }
 }
