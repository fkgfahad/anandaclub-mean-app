import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ProfileService {

  constructor(private http: Http) {}

  sendImage(image) {
    return this.http.post('/profile/pro', image)
      .pipe(
        map(res => res.json()),
        catchError(error => throwError(error))
      );
  }

}
