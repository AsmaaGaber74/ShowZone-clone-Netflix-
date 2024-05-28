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
  //searched movies
  getSearchMovie(movieName: string): Observable<any> 
  {
   
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${movieName}`);
  }
    // moviedatails
    getMovieDetails(data: any): Observable<any>
     {
      return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
     }
     // getMovieVideo
    getMovieVideo(data: any): Observable<any> 
    {
      return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
    }
  // getMovieCast
    getMovieCast(data: any): Observable<any> 
    {
      return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
    }
}
