import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {

  genreslist: any;
  loader = true;

  constructor(
    private _movie: MoviesService
  ) { }

  ngOnInit() {
    this.MovieGenre();
  }

  MovieGenre() {
    this._movie.getGenres().pipe(delay(2000)).subscribe((res: any) => {
      this.genreslist = res.genres;
      this.loader = false;
    });
  }

}
