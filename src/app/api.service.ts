import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Movie } from "./movie";

@Injectable()
export class ApiService {

  private _postsURL = "https://ghibliapi.herokuapp.com/films";

  constructor(private http: Http) { }

  getFilms(): Observable<Movie[]>{
    return this.http
      .get(this._postsURL)
      .map((response : Response) => {
        return <Movie[]>response.json();
    })
    .catch(this.handleError);
  }

  private handleError(error : Response){
    return Observable.throw(error.statusText);
  }

}
