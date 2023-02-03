import { createReducer, on } from '@ngrx/store';
import {
  errorTrendingMovieAction,
  loadingTrendingMovieAction,
  successTrendingMovieAction,
} from './movie.action';
import { MovieState } from './movie.state';

export const initialState: MovieState = {
  movieList: [
    {
      title: '',
      overview: '',
      voteAverage: 0,
      backdrop_path: '',
    },
  ],
  loaded: false,
  isLoading: false,
  errorMessage: '',
};

export const movieReducer = createReducer(
  initialState,
  on(loadingTrendingMovieAction, (state) => ({
    movieList: state.movieList,
    loaded: state.loaded,
    isLoading: true,
    errorMessage: state.errorMessage,
  })),
  on(successTrendingMovieAction, (state, { movies }) => ({
    movieList: movies.movieList,
    loaded: movies.loaded,
    isLoading: movies.isLoading,
    errorMessage: movies.errorMessage,
  })),
  on(errorTrendingMovieAction, (state, { movies }) => ({
    movieList: movies.movieList,
    loaded: movies.loaded,
    isLoading: movies.isLoading,
    errorMessage: movies.errorMessage,
  }))
);
