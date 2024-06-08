import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicsApiService {

  constructor(private httpRequestClass: HttpRequestService) { }
  private cache: any[] | null = null;

  public getJsonPlaceHolderPhotos(url: string): Observable<any> {
    if (this.cache) {
      return of(this.cache);
    } else {
      return this.httpRequestClass.get(url)
        .pipe(
          tap(data => this.cache = data),
          catchError(error => {
            console.error('Error fetching data', error);
            return throwError(error);
          })
        );
    }
  }
}
