import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: boolean;

  constructor() {
    this.rooms = true;
  }

  ngOnInit() {
    this.gettingHeight();
  }

  showRooms() {
    this.rooms = !this.rooms;
  }

  gettingHeight() {
    document.getElementById('rooms').style.height = (window.innerHeight - 50).toString() + 'px';
    window.addEventListener('resize', () => {
      document.getElementById('rooms').style.height = (window.innerHeight - 50).toString() + 'px';
    });
  }

}
