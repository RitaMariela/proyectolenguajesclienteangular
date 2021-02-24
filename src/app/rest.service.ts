import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from  'rxjs/operators';
const endpoint = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {

   }

   private extractData(res: Response){
    let body = res;
    return body || {};

  }

  getIssues(): Observable<any> {
    return this.http.get(endpoint + 'issue/issues').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getIssues'))
      );
  }
  
  addUser (user): Observable<any> {
    console.log(user);
    return this.http.post<any>(endpoint + 'client/add/', JSON.stringify(user), httpOptions).pipe(
      tap((student) => console.log('added student')),
      catchError(this.handleError<any>('addStudent'))
    );
  }
  getDetails(issueCode): Observable<any> {
    return this.http.get(endpoint + 'issue/get/' + issueCode).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getClientById'))
      );
  }
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{

      //TODO: send the error to remote logging infrastructure
      console.error(error); //log to console instead

      //TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      //Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
