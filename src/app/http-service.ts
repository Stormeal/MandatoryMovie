import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';

import { Movie } from './movie';

interface IMovieData {results : Movie[];}

@Injectable()
export class HttpService {

  private movies : any;
  private key : string;

  constructor(private http : Http) { }

  public getMovies(): Observable<Response>{
    return this.http.get("http://api.themoviedb.org/3/search/movie?query=skyfall&api_key=ac02dcff31a43973483cc151a777211c");
  }

  public getMovie(title : string) : Observable<Movie[]> {
    return this.http.get("http://api.themoviedb.org/3/search/movie?query=" + title + "&api_key=ac02dcff31a43973483cc151a777211c")
    .map(response => {
      const data : IMovieData = response.json();
      return data.results.filter(movie => movie.poster_path !== null).map(movie => 
        {return <Movie>{'id' : movie.id,
                        'title' : movie.title,
                        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movie.poster_path, 
                        'adult' : movie.adult,
                        'overview' : movie.overview,
                        'release_date' : movie.release_date,
                        'genres' : movie.genres,
                        'vote_average' : movie.vote_average }})

    })
  }
  public getMostPopularMovies() : Observable<Movie[]> {
    return this.http.get("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ac02dcff31a43973483cc151a777211c")
    .map(response => {
      const data : IMovieData = response.json();
      return data.results.filter(movie => movie.poster_path !== null).map(movie => 
        {return <Movie>{'id' : movie.id,
                        'title' : movie.title,
                        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movie.poster_path, 
                        'adult' : movie.adult,
                        'overview' : movie.overview,
                        'release_date' : movie.release_date,
                        'genres' : movie.genres,
                        'vote_average' : movie.vote_average }})

    })
  }

public getHigestRatedMovies() : Observable<Movie[]> {
    return this.http.get("http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&primary_release_year=2017&sort_by=vote_average.desc&api_key=81c50c197b83129dd4fc387ca6c8c323")
    .map(response => {
      const data : IMovieData = response.json();
      return data.results.filter(movie => movie.poster_path !== null).map(movie => 
        {return <Movie>{'id' : movie.id,
                        'title' : movie.title,
                        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movie.poster_path, 
                        'adult' : movie.adult,
                        'overview' : movie.overview,
                        'release_date' : movie.release_date,
                        'genres' : movie.genres,
                        'vote_average' : movie.vote_average }})

    })
  }
public getUpcommingMovies() : Observable<Movie[]> {
    return this.http.get("http://api.themoviedb.org/3/movie/upcoming?api_key=81c50c197b83129dd4fc387ca6c8c323")
    .map(response => {
      const data : IMovieData = response.json();
      return data.results.filter(movie => movie.poster_path !== null).map(movie => 
        {return <Movie>{'id' : movie.id,
                        'title' : movie.title,
                        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movie.poster_path, 
                        'adult' : movie.adult,
                        'overview' : movie.overview,
                        'release_date' : movie.release_date,
                        'genres' : movie.genres,
                        'vote_average' : movie.vote_average }})

    })
  }

 
 
}