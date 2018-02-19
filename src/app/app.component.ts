import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";
import { Movie } from "./movie"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ApiService]
})
export class AppComponent  implements OnInit {
  title = 'app';
  _postArray : Movie[];

  constructor(private apiService : ApiService){
  }

  getFilms(): void {
    this.apiService.getFilms().subscribe(
        resultArray => this._postArray = resultArray,
        error => console.log("Error :: " + error)
    )
  }

  ngOnInit(): void{
    this.getFilms();
  }
}
