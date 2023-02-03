import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import {
  errorTrendingMovieAction,
  loadingTrendingMovieAction,
  successTrendingMovieAction,
} from './movie.action';
import { initialState } from './movie.reducer';

@Injectable()
export class MovieEffects {
  movieEffects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingTrendingMovieAction),
      mergeMap((action) => {
        // tap(of(console.log(this.apiService.prueba()))); concatMap
        return this.apiService.getMovies(action.url).pipe(
          map((res) => {
            return successTrendingMovieAction({
              movies: {
                movieList: res.results,
                loaded: true,
                isLoading: false,
                errorMessage: '',
              },
            });
          }),
          catchError((err) => {
            return of(
              errorTrendingMovieAction({
                movies: {
                  movieList: initialState.movieList,
                  loaded: false,
                  isLoading: false,
                  errorMessage: err,
                },
              })
            );
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
