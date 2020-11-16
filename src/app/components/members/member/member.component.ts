import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  userid;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.userid = 'fahad';
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      console.log(params.userid);
      // if (params['userid'] === 'whoami') {
      //   this.router.navigate(['/members', 'fahad']);
      // } else {
      //   this.userid = params['userid'];
      //   console.log(this.userid);
      // }
    });
    this.setHight();
  }

  setHight() {
    document.getElementById('content').style.height = (window.innerHeight - 50).toString() + 'px';
    window.addEventListener('resize', () => {
      document.getElementById('content').style.height = (window.innerHeight - 50).toString() + 'px';
    });
  }

}
