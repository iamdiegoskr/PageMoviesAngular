import { Component, OnInit } from '@angular/core';
import { MoviesService,Movie } from '../../movies.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesList : Movie[] = [];

  constructor(private moviesService:MoviesService,
              private router : Router) { 
      this.moviesList = this.moviesService.getMovies();
  }

  ngOnInit(): void {
  }

  watchMovie(id:number){
    this.router.navigate(['/movie-detail',id]);
  }

}
