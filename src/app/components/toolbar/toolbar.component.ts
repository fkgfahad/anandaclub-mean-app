import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  query; searchbar: boolean;

  constructor() {
    this.searchbar = false;
  }

  ngOnInit() {}

  wSearch() {
    this.searchbar = !this.searchbar;
  }

  clickLogout() {
    console.log('You are logged out');
  }

  onSearch(input: NgForm) {
    console.log(input.value.query);
  }

}
