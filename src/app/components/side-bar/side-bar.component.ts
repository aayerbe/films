import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadingTrendingMovieAction } from 'src/app/state/trending/movie.action';
import { MovieState } from 'src/app/state/trending/movie.state';
import { List } from './side-bar.list';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  constructor(private store: Store<{ moviesState: MovieState }>) {}
  search(event: any) {
    const evento = event.currentTarget.id;
    const url = List[evento as keyof Object];
    this.store.dispatch(loadingTrendingMovieAction({ url: url.toString() }));
  }
}
