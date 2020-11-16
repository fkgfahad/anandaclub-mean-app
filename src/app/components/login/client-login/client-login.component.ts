import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../../providers/login.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  clientid; clientpassword;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  onClientLogin(input: NgForm) {
    this.loginService.logItIn(input).pipe(
      catchError(error => throwError(error))
    ).subscribe(rej => console.log(rej));
  }

}
