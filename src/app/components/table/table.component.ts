 import { Component } from '@angular/core';
 import { MoviesService } from '../../service/movies.service';
 import { MoviesResp } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
 movies: MoviesResp[] = [];
 columnsTable: string[] = ['title', 'year', 'cast', 'genres'];
 page: number = 0;

  constructor( private moviesService: MoviesService  )  {
      this.moviesService.callMovies().subscribe(res => {
        this.movies = res
      });
   }

   prevPage() {
     if( this.page >0 )
      this.page -= 100;
   }

   nextPage() {
    this.page += 100;
 }
}
