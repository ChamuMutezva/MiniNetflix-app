import { Injectable } from '@angular/core';
import { IMovies } from './moviesList';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
}
)
export class MoviesService {
   // movieId = this.route.snapshot.paramMap.get('objectId');
    //private moviesUrl = '/api/movies/movies.json';
    private moviesUrl = '/assets/api.json';
    constructor(private http: HttpClient) {
        console.log(this.moviesUrl);
    }

    getMovies(): Observable<IMovies[]> {
        return this.http.get<IMovies[]>(this.moviesUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );

    }

    getMovie(movieID, callback: (data) => void) { 
        return this.getMovies().subscribe(result => {
            
          // check the api.json for the movieID 
          
          console.log('---------');
          let returnObj = {};
          const matchedResult = result.map(movie=>{
            if(movie.objectId == movieID){
                console.log('returning movie details ', movie);
                returnObj = movie;
            }
          });
          
          console.log('---------');

          callback(returnObj);  // execute the callback function to act on the matched result;
        },
          error => {
            console.log(error);
          }
        );
      }

   /* getMovie(objectId: string): Observable<IMovies> {
        return this.http.get<IMovies>('/assets/' + objectId)
            .pipe(catchError(this.handleError<IMovies>('getMovies')))
    }
*/
    private handleError<T>(operation = 'operation', result?: T) {
       return (error: any): Observable<T> => {
           console.log(error);
           return of(result as T)
       }
    } 
}