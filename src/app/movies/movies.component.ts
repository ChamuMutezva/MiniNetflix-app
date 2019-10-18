import { Component, OnInit } from '@angular/core';
import { IMovies } from 'src/shared/moviesList';
import { MoviesService } from 'src/shared/mymovies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  errorMsg: string;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
this._listFilter = value;
this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.moviesCompilation;
    }

    filteredMovies: IMovies[];
  moviesCompilation: IMovies[] = []
  constructor(private moviesService: MoviesService) {
      
     // this.listFilter = "Despicable Me 2";
   }

  ngOnInit() {
     this.moviesService.getMovies().subscribe(
         moviesCompilation => {
             this.moviesCompilation = moviesCompilation;
             this.filteredMovies = this.moviesCompilation;
        
         },
         error => this.errorMsg = <any>error
     );
     
    }

  performFilter(filterBy: string): IMovies[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.moviesCompilation.filter((movie: IMovies) =>
    movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1 )

    
}

}
