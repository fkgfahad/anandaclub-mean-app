import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-options',
  templateUrl: './msg-options.component.html',
  styleUrls: ['./msg-options.component.css']
})
export class MsgOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.gettingHeight();
  }

  gettingHeight() {
    document.getElementById('options').style.height = (window.innerHeight - 50).toString() + 'px';
    window.addEventListener('resize', () => {
      document.getElementById('options').style.height = (window.innerHeight - 50).toString() + 'px';
    });
  }

}
