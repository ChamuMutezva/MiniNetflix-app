import { Component, OnInit } from '@angular/core';
import { IMovies } from 'src/shared/moviesList';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
this._listFilter = value;
this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.moviesCompilation;
    }

    filteredMovies: IMovies[];
  moviesCompilation: IMovies[] = [
    {
        "objectId": "n4mV28e42t",
        "image": {
            "__type": "File",
            "name": "c6b7a11f-d1cb-427f-b784-4475f033fc48_1.jpg",
            "url": "https://peruzal-parse-media.s3.amazonaws.com/c6b7a11f-d1cb-427f-b784-4475f033fc48_1.jpg"
        },
        "createdAt": "2016-10-10T13:26:10.427Z",
        "updatedAt": "2016-12-14T12:00:50.408Z",
        "title": "Dawn of the Planet of the Apes",
        "releaseYear": "2014",
        "genre": [
            "Action",
            "Drama",
            "Sci-Fi"
        ],
        "rating": 8.3,
        "description": "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes"
    },
    {
        "objectId": "kULDFy4qlt",
        "title": "X-Men: Days of Future Past",
        "createdAt": "2016-10-10T13:42:01.686Z",
        "updatedAt": "2016-12-14T12:02:24.981Z",
        "genre": [
            "Action",
            "Sci-Fi",
            "Thriller"
        ],
        "releaseYear": "2014",
        "rating": 8,
        "image": {
            "__type": "File",
            "name": "652565bb-02ad-487f-929e-78308085ca1e_4.jpg",
            "url": "https://peruzal-parse-media.s3.amazonaws.com/652565bb-02ad-487f-929e-78308085ca1e_4.jpg"
        },
        "description": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future."
    },
    {
        "objectId": "4ZsUqwmNT1",
        "title": "Despicable Me 2",
        "createdAt": "2016-10-10T13:53:34.666Z",
        "updatedAt": "2016-12-14T12:10:55.693Z",
        "releaseYear": "2013",
        "genre": [
            "Animation",
            "Comedy",
            "Family"
        ],
        "rating": 7.3,
        "image": {
            "__type": "File",
            "name": "43b8cf94-8074-4e72-b58f-de6a3d067464_11.jpg",
            "url": "https://peruzal-parse-media.s3.amazonaws.com/43b8cf94-8074-4e72-b58f-de6a3d067464_11.jpg"
        },
        "description": "Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.\n"
    }
  ]
  constructor() {
      this.filteredMovies = this.moviesCompilation;
      this.listFilter = "Despicable Me 2";
   }

  ngOnInit() {
      console.log("OnInit perfomance ok")
  }

  performFilter(filterBy: string): IMovies[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.moviesCompilation.filter((movie: IMovies) =>
    movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1 )

    
}

}
