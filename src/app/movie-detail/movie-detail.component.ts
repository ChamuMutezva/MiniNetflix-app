import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/shared/mymovies.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IMovies } from 'src/shared/moviesList';
import { NgForOf } from '@angular/common';

@Component({

  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
 // movies: IMovies;
 title: string;
 rating: number;
 releaseYear: number;
 image: string[];
  movieId = this.route.snapshot.paramMap.get('objectId');
  descr: string;
genre: string[];

  constructor(private movieService: MoviesService,
    private route: ActivatedRoute, private router: Router) { };

  ngOnInit() {

    this.movieService.getMovie(this.movieId, (resultMovie)=>{
     // console.log('received movie detials', resultMovie);
      this.title = resultMovie.title;
      this.image = resultMovie.image.url;
      this.releaseYear = resultMovie.releaseYear;
      this.descr = resultMovie.description;
      this.genre = resultMovie.genre;
      console.log(this.image);
      
      //do something with resultMovie
    }); 
    

  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
