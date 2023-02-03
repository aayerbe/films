import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadingTrendingMovieAction } from 'src/app/state/trending/movie.action';
import { MovieState } from 'src/app/state/trending/movie.state';
import { List } from '../side-bar/side-bar.list';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  movies$: Observable<MovieState>;

  constructor(private store: Store<{ moviesState: MovieState }>) {
    this.movies$ = store.select('moviesState');
  }
  ngOnInit(): void {
    this.store.dispatch(
      loadingTrendingMovieAction({ url: List.trendingMovies })
    );
    this.movies$.subscribe((res) => {
      console.log(res);
    });
  }
}
