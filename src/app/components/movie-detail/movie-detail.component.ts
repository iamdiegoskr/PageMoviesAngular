import { Component, OnInit } from '@angular/core';
import { MoviesService,Movie } from '../../movies.service';
import { ActivatedRoute } from '@angular/router';//para recibir parametros

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie:Movie;

  constructor(private activatedRoute : ActivatedRoute,
              private moviesService:MoviesService) { }

  ngOnInit(): void {

      this.activatedRoute.params.subscribe(params => {
          this.movie = this.moviesService.getMovieById(params['id']);
          console.log(this.movie);
      });

  }

}
