import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MoviesService } from '../../../Service/movies.service';
import { BackgroundService } from '../../../Service/background.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movidetails',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,ReactiveFormsModule,NavbarComponent],
  templateUrl: './movidetails.component.html',
  styleUrl: './movidetails.component.css'
})
export class MovidetailsComponent implements OnInit 
{
  details:any;
  videoDetails: any;
  cast:any[]=[];
  moviID:any;
  constructor(private activatedrouter: ActivatedRoute,private  _moviesService :MoviesService,private backgroundService: BackgroundService,private router:Router){ }
  ngOnInit(): void 
  {
    
    this.activatedrouter.paramMap.subscribe((paramMap) => 
      {
        this.moviID = Number(paramMap.get('id'));
        this.moviesdetails(this.moviID);
        this.movieVideo(this.moviID);
        this.moviecast(this.moviID);
        this.backgroundService.initializeBackground();
    })
  }
  moviesdetails(id:any)
    {
      this._moviesService.getMovieDetails(id).subscribe({
        next:(result)=>
          {
            console.log("detaiils",result);
            this.details=result;
          }
      })
    }

   movieVideo(id:any)
    {
      this._moviesService.getMovieVideo(id).subscribe((result)=>{
          result.results.forEach((element:any) => {
              if(element.type=="Trailer")
              {
                this.videoDetails = element.key;
                console.log("video",  this.videoDetails);
              }
          });
  
      });
    }

    moviecast(id:any)
    {
      this._moviesService.getMovieCast(id).subscribe((result)=>
          {
            console.log("cast",result);
            this.cast=result.cast.slice(0, 12);;
          }
      )
    }

}

  
  
