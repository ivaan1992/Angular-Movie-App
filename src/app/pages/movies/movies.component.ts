import { Component } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { MoviesResp } from '../../interface/movies.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: MoviesResp[] = [];

  constructor(private moviesService: MoviesService) {
    this.moviesService.callMovies().subscribe(res => {
      this.movies = res
    })
  }
}
