import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  memberid; memberpassword;

  constructor() { }

  ngOnInit() {
  }

  onMemberLogin(input: NgForm) {
    console.log(input.value);
  }

}
