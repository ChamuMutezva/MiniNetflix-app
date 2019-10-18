import { Injectable } from '@angular/core';
import { IMovies } from './moviesList';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
}
)
export class MoviesService {

    private moviesUrl = '/api/movies/movies.json';

    constructor(private http: HttpClient) {
        console.log(this.moviesUrl);
    }

    getMovies(): Observable<IMovies[]> {
        return this.http.get<IMovies[]>(this.moviesUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );

    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}