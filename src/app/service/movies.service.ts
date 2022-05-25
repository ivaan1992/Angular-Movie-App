import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {


  constructor( private http: HttpClient ) { }

  callMovies() {
    this.http.get(`https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json`)
    .subscribe( response  => {
      console.log( response );
    });
  }
}
