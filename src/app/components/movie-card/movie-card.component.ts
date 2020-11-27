import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService,Movie } from '../../movies.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie:Movie;//input, para decirle que la informacion la puede recibir del padre
  @Input() idMovie:number;


  @Output() movieSelected: EventEmitter<number>;

  constructor(private route:Router) { 
    this.movieSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  watchMovie(){
    this.route.navigate(['/movie-detail',this.idMovie])
    // this.movieSelected.emit(this.idMovie);
  }


}
