import { MoviesService } from '../../../Service/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule,ReactiveFormsModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit 
{
    searchQuery: string = "";
    resultdata: any[] = [];
    pagedResultdata: any[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 4;
    isExpanded: boolean = false;

    toggleExpand(movie: any) {
      movie.isExpanded = !movie.isExpanded;
    }
    constructor(private _moviesService: MoviesService) { }

    ngOnInit(): void { }

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
   
  
}
