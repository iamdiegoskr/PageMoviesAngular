import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';//navegar a otro componente

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  findMovie(texto:string){
    this._router.navigate(['/movies-filter',texto]);
  }

}
