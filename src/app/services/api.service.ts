import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  api_key = '63f03ef693af4239c34b9b4f7a965d98';

  // getTrendingMovies() {
  //   const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.api_key}`;
  //   const urlPrueba = `
  //   https://api.themoviedb.org/3/movie/top_rated?api_key=${this.api_key}&language=en-US&page=1`;
  //   return this.http.get<any>(urlPrueba);
  // }
  getSearchedMovie(movie: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=en-US&page=1&include_adult=false&query=${movie}`;
    return this.http.get<any>(url);
  }
  getMovies(url: string) {
    const urlRepalce = url.replace('<<api_key>>', this.api_key);
    return this.http.get<any>(urlRepalce);
  }
}
