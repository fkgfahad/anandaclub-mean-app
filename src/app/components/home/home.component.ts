import { Component, OnInit } from '@angular/core';
import { GlobalFunctions } from '../../globals/functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(public functions: GlobalFunctions) {}

  ngOnInit() {}

}
