import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {

  constructor(private http: Http) {}

  logItIn(body) {
    return this.http.post('/b/login', body)
      .pipe(
        map(res => res.json()),
        catchError(error => throwError(error))
      );
  }

}
