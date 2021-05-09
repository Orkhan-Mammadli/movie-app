import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { Movie } from '../movie-model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  selectedMovie: Movie;
  id:number
  constructor(private activatedRoute: ActivatedRoute,private loggingService: LoggingService) {}


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params["id"]
      this.loggingService.getMovieId((this.id)).subscribe(res => {
          this.selectedMovie = res
      })
    })
  }

}
