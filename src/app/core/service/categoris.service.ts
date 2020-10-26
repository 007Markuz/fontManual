import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Category} from '../module/category';
import { retry, catchError } from 'rxjs/operators';
import {SessionStoreService} from '../store/session-store.service';
 @Injectable({
  providedIn: 'root'
})
export class CategorisService {


  HttpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient,private sessionStore:SessionStoreService) { }

  resolveItems(id): any {
    console.log('Request is sent!');

    return this.http.get<Category>(this.sessionStore.urlService + id, this.HttpHeaders).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
