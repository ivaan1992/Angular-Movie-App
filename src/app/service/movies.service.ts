import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesResp } from '../interface/movies.interface';
//import { MoviesResp } from '../interface/movies.interface';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private api: string = 'https://raw.githubusercontent.com';
  private rest: string = 'prust/wikipedia-movie-data/master/movies.json';


  constructor( private http: HttpClient ) {

  }

  callMovies( ): Observable<MoviesResp[]> {
    const url = `${ this.api }/${ this.rest } `;
    return this.http.get ( url ) as Observable<MoviesResp[]>;
  }
}

