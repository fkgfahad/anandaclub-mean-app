import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css']
})
export class HelpsComponent implements OnInit {
  conHei;

  constructor() {}

  ngOnInit() {
    this.gettingHeight();
  }

  gettingHeight() {
    window.addEventListener('resize', () => {
      document.getElementById('navs').style.height = (window.innerHeight - 50).toString() + 'px';
      document.getElementById('content').style.height = (window.innerHeight - 50).toString() + 'px';
    });
    document.getElementById('navs').style.height = (window.innerHeight - 50).toString() + 'px';
    document.getElementById('content').style.height = (window.innerHeight - 50).toString() + 'px';
  }

}
