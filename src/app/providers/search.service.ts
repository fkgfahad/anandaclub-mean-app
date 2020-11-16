import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  onFetchSearch(key: string) {
    const dt = {
      key: key,
      user: 'fahad'
    };
    return this.http.post('/api', dt)
      .pipe(
        map(data => data.json()),
        catchError(error => throwError(error))
      );
  }

}
