import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})

export class HelpComponent implements OnInit {
  helpid; wlp: boolean; spinner: boolean;

  constructor(
    private actRoute: ActivatedRoute
  ) {
    this.spinner = false;
    this.actRoute.params.subscribe((params: Params) => {
      if (params['helpid'] === 'welcome') {
        this.wlp = true;
        this.helpid = params['helpid'];
      } else {
        this.wlp = false;
        this.helpid = params['helpid'];
      }
    });
  }

  ngOnInit() {}

}
