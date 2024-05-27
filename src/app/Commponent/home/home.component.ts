import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../../Service/movies.service';
import { CommonModule } from '@angular/common';
import { BackgroundService } from '../../../Service/background.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit
{
  sliders :any[]=[];
  trinding:any[]=[];


  isExpanded: boolean = false;

toggleExpand(movie: any) {
  movie.isExpanded = !movie.isExpanded;
}
  constructor(private  _moviesService :MoviesService,private backgroundService: BackgroundService){ }


  ngOnInit(): void 
  {
    this.backgroundService.initializeBackground();
    this.slidarshow();
    this. Trindingmovies();
  }
//--------slider
 slidarshow()
  {
    this._moviesService.bannerApiData().subscribe
    ({
       next:(result)=>
        {
             console.log("dataaaa", result);
             this.sliders=result.results
        }
    })
  }
//------treinding
 Trindingmovies()
 {
     this._moviesService.trendingMovieApiData().subscribe({
     next:(trand)=>
      {
        console.log("traindiiiing",trand);
        this.trinding=trand.results;
      }

     })
 }
}
