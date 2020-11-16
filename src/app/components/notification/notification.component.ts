import { Component, OnInit } from '@angular/core';
import { GlobalFunctions } from '../../globals/functions';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(public functions: GlobalFunctions) {}

  ngOnInit() {
    console.log(this.functions.myFunc(1534676804615));
  }

}
