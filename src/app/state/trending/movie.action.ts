import { createAction, props } from '@ngrx/store';
import { Card } from '../../interfaces/card.interface';
import { MovieState } from './movie.state';

export const loadingTrendingMovieAction = createAction(
  '[Hero Component] Loading',
  props<{ url: string }>()
);

export const successTrendingMovieAction = createAction(
  '[Hero Component] Movies list loaded',
  props<{ movies: MovieState }>()
);
export const errorTrendingMovieAction = createAction(
  '[Hero Component] Error',
  props<{ movies: MovieState }>()
);
