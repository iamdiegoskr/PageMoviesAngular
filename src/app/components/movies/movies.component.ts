import { Component, OnInit } from '@angular/core';
import { MoviesService,Movie } from '../../movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesList : Movie[] = [];

  constructor(private moviesService:MoviesService) { 
      this.moviesList = this.moviesService.getMovies();
      console.log(this.moviesList);
  }

  ngOnInit(): void {
  }

}
