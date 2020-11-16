import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()

export class GlobalFunctions {
  audio;
  constructor(
    private snack: MatSnackBar
  ) {}










  myFunc(then: number) {
    return setInterval(() => {

      console.log('started');

      const dif = Date.now() - then;
      if (dif < 0) {
        return 'invalid date';
      } else if (dif >= 0 && dif < 60000) {
        return 'Just now';
      } else if (dif >= 60000 && dif < 3600000) {
        const m = dif / 60000, min = m.toFixed(0);
        if (min === '1') {
          return min + ' min';
        } else {
          return min + ' mins';
        }
      } else if (dif >= 3600000 && dif < 86400000) {
        const h = dif / 3600000, hr = h.toFixed(0);
        if (hr === '1') {
          return hr + ' hr';
        } else {
          return hr + ' hrs';
        }
      } else if (dif >= 86400000 && dif < 604800000) {
        const dateObj = new Date(then),
          date = dateObj.getDate(),
          dateStr = dateObj.toDateString(),
          day = dateStr.substr(0, 3),
          mon = dateStr.substr(4, 3);
        return day + ', ' + mon + ' ' + date;
      } else if (dif < 31536000000) {
        const dateObj = new Date(then),
          dateStr = dateObj.toDateString(),
          date = dateStr.substr(0, 10);
        return date;
      } else {
        const dateObj = new Date(then),
          dateStr = dateObj.toDateString(),
          date = dateStr.substr(4);
        return date;
      }

    }, 10000, true);
  }






















  dateTooltip(miliseconds) {
    const dt = new Date(miliseconds);
    return dt.toLocaleString();
  }

  showSnack(status, message) {
    if (status === 'ko') {
      this.audio = new Audio('assets/audio/error.ogg');
    } else {
      this.audio = new Audio('assets/audio/notification.ogg');
    }
    this.audio.volume = 0.2;
    this.audio.play();
    this.snack.open(message, '&#10008;', {
      duration: 5000,
      direction: 'ltr',
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }

  timingWorld(then: number) {
    const dif = Date.now() - then;
    if (dif < 0) {
      return 'invalid date';
    } else if (dif >= 0 && dif < 60000) {
      return 'Just now';
    } else if (dif >= 60000 && dif < 3600000) {
      const m = dif / 60000, min = m.toFixed(0);
      if (min === '1') {
        return min + ' min';
      } else {
        return min + ' mins';
      }
    } else if (dif >= 3600000 && dif < 86400000) {
      const h = dif / 3600000, hr = h.toFixed(0);
      if (hr === '1') {
        return hr + ' hr';
      } else {
        return hr + ' hrs';
      }
    } else if (dif >= 86400000 && dif < 604800000) {
      const dateObj = new Date(then),
        date = dateObj.getDate(),
        dateStr = dateObj.toDateString(),
        day = dateStr.substr(0, 3),
        mon = dateStr.substr(4, 3);
      return day + ', ' + mon + ' ' + date;
    } else if (dif < 31536000000) {
      const dateObj = new Date(then),
        dateStr = dateObj.toDateString(),
        date = dateStr.substr(0, 10);
      return date;
    } else {
      const dateObj = new Date(then),
        dateStr = dateObj.toDateString(),
        date = dateStr.substr(4);
      return date;
    }
  }

  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const val = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return val.test(String(email).toLowerCase());
  }


}
