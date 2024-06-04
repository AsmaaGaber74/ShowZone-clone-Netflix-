import { MoviesService } from '../../../Service/movies.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { BackgroundService } from '../../../Service/background.service';
import { Subscription } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule,ReactiveFormsModule,NavbarComponent,FooterComponent],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit ,OnDestroy 
{
    searchQuery: string = "";
    resultdata: any[] = [];
    pagedResultdata: any[] = [];
    trinding:any[]=[];
    currentPage: number = 1;
    itemsPerPage: number = 8;
    backgroundColor: string = 'white';
    backgroundColorSubscription: Subscription | undefined;

    isExpanded: boolean = false;
    toggleExpand(movie: any) {
      movie.isExpanded = !movie.isExpanded;
    }
    constructor(private _moviesService: MoviesService,private backgroundService: BackgroundService) { }

    ngOnInit(): void 
    {
      //  this.backgroundColor = this.backgroundService.getBackgroundColor();
         // this.backgroundColorSubscription ="asmaa"
          this.backgroundColorSubscription = this.backgroundService.backgroundColorChanged.subscribe(color => {
          this.backgroundColor = color;
          console.log('Background color:', this.backgroundColor);  
        });
        this.Trindingmovies() ;
      }
    
      ngOnDestroy(): void {
        // if (this.backgroundColorSubscription) {
        //   this.backgroundColorSubscription.unsubscribe();
        // }
      }
      
    searchMovies()
     {
        if (this.searchQuery.trim() !== '') 
          {
            this._moviesService.getSearchMovie(this.searchQuery).subscribe(
                (data: any) => 
                  {
                    this.resultdata = data.results;
                    console.log("dataaaaa",this.resultdata )
                    this.currentPage = 1; 
                    this.paginate();
                 },
                (error: any) => 
                  {
                    console.error(error);
                  }
            );
         }
    }

    paginate()
     {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        this.pagedResultdata = this.resultdata.slice(startIndex, startIndex + this.itemsPerPage);
     }

    nextPage() 
    {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.paginate();
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.paginate();
        }
    }

    goToPage(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.paginate();
        }
    }

    get totalPages(): number {
        return Math.ceil(this.resultdata.length / this.itemsPerPage);
    }

    get totalPagesArray(): number[] {
        return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }
   
    //------treinding
    Trindingmovies() 
    {
     this._moviesService.trendingMovieApiData().subscribe({
         next: (trand) => {
             console.log("traindiiiing", trand);
             this.trinding = trand.results.sort((a: any, b: any) => b.vote_average - a.vote_average).slice(0, 5);
         },
         error: (error) => {
             console.error(error);
         }
     });
   }
}


