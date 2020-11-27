import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // para recibir parametros
import { MoviesService,Movie  } from '../../movies.service';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {

  moviesFound : Movie[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private moviesService:MoviesService) { }

  ngOnInit(): void {

      this.activatedRoute.params.subscribe(params => {
        // console.log(params['term']);
        this.moviesFound = this.moviesService.filterMovies(params['term']);
        console.log(this.moviesFound);
      });

  }

}
