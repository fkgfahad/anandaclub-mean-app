import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.settingHeight();
  }

  settingHeight() {
    document.getElementById('mlg').style.height = (window.innerHeight - 90).toString() + 'px';
    window.addEventListener('resize', () => {
      document.getElementById('mlg').style.height = (window.innerHeight - 90).toString() + 'px';
    });
  }

}
