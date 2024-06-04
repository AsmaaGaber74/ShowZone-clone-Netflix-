import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MoviesService } from '../../../Service/movies.service';
import { CommonModule } from '@angular/common';
import { BackgroundService } from '../../../Service/background.service';
import { Subscription } from 'rxjs';
import { FavoriteService } from '../../../Service/favorite.service';
import { LoginComponent } from '../login/login.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule,LoginComponent,TranslateModule,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit
{
  sliders :any[]=[];
  trinding:any[]=[];
  actions:any[]=[];
  animations:any[]=[];
  adventures:any[]=[];
  comedy:any[]=[];
  backgroundColor: string = 'white';
  backgroundColorSubscription: Subscription | undefined;
  isExpanded: boolean = false;
  movies: any[] = [];

toggleExpand(movie: any)
{
  movie.isExpanded = !movie.isExpanded;
}
  constructor(
    private favoriteService: FavoriteService,
    private  _moviesService :MoviesService,
    private backgroundService: BackgroundService,
    private router:Router){ }


  ngOnInit(): void 
  {
    this.backgroundColorSubscription = this.backgroundService.backgroundColorChanged.subscribe(color => {
      this.backgroundColor = color;
      console.log('Background color:', this.backgroundColor);  
      });
      this.backgroundService.initializeBackground();
      this.slidarshow();
      this. Trindingmovies();
      this.actionsmovies();
      this.animationsmovies();
      this.advanturesmovies();
      this.comidysmovies();
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


//------actions
actionsmovies()
{
    this._moviesService.fetchActionMovies().subscribe({
    next:(action)=>
     {
       console.log("actiiions",action);
       this.actions=action.results;
     }

    })
}
//  animations
animationsmovies()
{
    this._moviesService.fetchAnimationMovies().subscribe({
    next:(animation)=>
     {
       console.log("animation",animation);
       this.animations=animation.results;
     }

    })
}
// advantures
advanturesmovies()
{
    this._moviesService.fetchAdventureMovies().subscribe({
    next:(adv)=>
     {
       console.log("animation",adv);
       this.adventures=adv.results;
     }

    })
}
comidysmovies()
{
  this._moviesService.fetchComedyMovies().subscribe({
    next:(com)=>
     {
       console.log("animation",com);
       this.comedy=com.results;
     }

    })
}
//fav
 Favorite(movie: any): void 
 {
  if (this.favoriteService.isFavorite(movie.id)) {
    this.favoriteService.removeFavorite(movie.id);
  } else {
    this.favoriteService.addFavorite(movie);
  }
}

isFavorite(movieId: number): boolean 
{
  return this.favoriteService.isFavorite(movieId);
}

}
