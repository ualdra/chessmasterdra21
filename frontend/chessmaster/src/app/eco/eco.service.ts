import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*
interface Eco(){
  this.name = name;
  this.eco = eco;
  this.fen = fen;
  this.moves = moves;
}
*/

export class EcoService {


  private REST_API_SERVER = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest() {
    return this.http.get(this.REST_API_SERVER).pipe(retry(3),catchError(this.handleError));
  }

  public getEcos() {
    return this.http.get(this.REST_API_SERVER+`/api/ecos`);
  }

  public getEco(id) {
    return this.http.get(this.REST_API_SERVER+`/api/ecos/${id}`);
  }

}
