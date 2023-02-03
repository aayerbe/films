import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';
import { MovieState } from 'src/app/state/trending/movie.state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() movie: Card = {
    title: '',
    overview: '',
    voteAverage: 0,
    backdrop_path: '',
  };

  ngOnInit(): void {
    console.log(this.movie);
  }
}
