import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Movie } from '../movie-model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  movies: Movie;

  constructor(private loggingService: LoggingService) {}   

  ngOnInit() {
    this.getMovies();
  }
  
  getMovies() {
      this.loggingService.getMovie().subscribe(movie => {
        this.movies = movie
    })
  }


}
