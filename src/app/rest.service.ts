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
      tap((student) => console.log('added user')),
      catchError(this.handleError<any>('adduser'))
    );
  }
  getIssueCode(id): Observable<any> {
    return this.http.get(endpoint + 'issue/get/'+id).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getissueCode'))
      );
  }
  getDetails(id): Observable<any> {
    return this.http.get(endpoint + 'issue/get/'+id).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getClientById'))
      );
  }
  insertNewComment(comment):Observable<any> {
    console.log(comment);
    return this.http.post<any>(endpoint + 'comment/add/', JSON.stringify(comment), httpOptions).pipe(
      tap((comment) => console.log('added comment')),
      catchError(this.handleError<any>('addcomment'))
    );
  }
  getClients(): Observable<any> {
    return this.http.get(endpoint + 'client/clients').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getClients'))
      );
  }
 
  addIssue(issue):Observable<any> {
    console.log(issue);
    return this.http.post<any>(endpoint + 'issue/add/', JSON.stringify(issue), httpOptions).pipe(
      tap((comment) => console.log('added issue')),
      catchError(this.handleError<any>('addissue'))
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
