import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) {}
  
  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  //slider
  bannerApiData(): Observable<any> 
  {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  // trendin
  trendingMovieApiData(): Observable<any>
   {
     return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
   }
  // search
  // getSearchMovie(data: any): Observable<any> 
  // {
  //   console.log(data, 'movieeeee#');
  //   return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  // }
  getSearchMovie(movieName: string): Observable<any> 
  {
    //console.log(data, 'movieeeee#');
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${movieName}`);
  }
}
