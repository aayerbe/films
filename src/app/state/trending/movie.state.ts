import { Card } from '../../interfaces/card.interface';

export interface MovieState {
  movieList: Array<Card>;
  loaded: boolean;
  isLoading: boolean;
  errorMessage: string;
}
