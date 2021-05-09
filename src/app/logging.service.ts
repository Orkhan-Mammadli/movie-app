import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from './movie-model';
@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private http: HttpClient) { }


  getMovie(){
    return this.http.get<Movie>(environment.URL);
  }

  getMovieId(id:number) {
    return this.http.get<Movie>(environment.URL + id)
  }



}

