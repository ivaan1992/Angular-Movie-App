import { Component } from '@angular/core';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor( private movies: MoviesService  ) { }

  call() {
    this.movies.callMovies()
  }


}
