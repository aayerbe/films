import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  title = '';
  overview = '';
  voteAverage = 0;
  backdrop_path = '';
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      this.apiService.getSearchedMovie(res['film']).subscribe((respuesta) => {
        console.log(respuesta.results[0]);
        this.title = respuesta.results[0].title;
        this.overview = respuesta.results[0].overview;
        this.voteAverage = respuesta.results[0].voteAverage;
        this.backdrop_path = respuesta.results[0].backdrop_path;
      });
    });
  }
}
