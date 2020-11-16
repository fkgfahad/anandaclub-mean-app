import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params['roomid']) {
      this.route.params.subscribe((params: Params) => {
        console.log(params['roomid']);
        if (params['roomid']) {
          this.router.navigate(['/messages', params['roomid']]);
        }
      });
    } else {
      this.router.navigate(['/messages', 'room1']);
    }
  }

}
