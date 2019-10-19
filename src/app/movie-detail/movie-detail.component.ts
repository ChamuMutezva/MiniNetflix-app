import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/shared/mymovies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
movie:any;
  constructor(private movieService: MoviesService, 
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.movie = this.movieService.getMovie
    (this.route.snapshot.params['id']);
  }

}
