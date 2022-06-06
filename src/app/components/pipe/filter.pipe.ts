import { Pipe, PipeTransform } from '@angular/core';
import { MoviesResp } from '../../interfaces/movies.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( movieInfo: MoviesResp[], page: number = 0): MoviesResp[] {
    return movieInfo.slice(page, page + 100);
  }

}
