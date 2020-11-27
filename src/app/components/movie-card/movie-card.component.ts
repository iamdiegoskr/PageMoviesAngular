import { Component, OnInit, Input } from '@angular/core';
import { MoviesService,Movie } from '../../movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie:Movie;//input, para decirle que la informacion la puede recibir del padre

  constructor() { }

  ngOnInit(): void {
  }

}
