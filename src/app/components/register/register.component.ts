import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name; username; password; cpassword; useremail; gender; birthdate;
  startDate = new Date(1995, 0, 1);

  constructor() {}

  ngOnInit() {}

  regUser(user: NgForm) {
    console.log(user);
    user.reset();
  }

}
