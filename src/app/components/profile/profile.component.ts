import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../../providers/profile.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { GlobalFunctions } from '../../globals/functions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile; covfile: File;

  proEditing: boolean; covEditing: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public functions: GlobalFunctions,
    private proService: ProfileService
  ) {
    this.covEditing = false;
    this.proEditing = false;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['userid'] === 'me') {
        this.router.navigate(['/profile', 'fahad']);
      } else {
        this.router.navigate(['/profile', params['userid']]);
      }
    });
  }

  onProSeleted(event) {
    this.profile = event.target.files[0];
    this.profile = new FormData();
    this.profile.append('image', event.target.files[0], event.target.files[0].name);
  }

  proUpload() {
    this.proService.sendImage(this.profile)
      .pipe(catchError(error => throwError(error)))
      .subscribe(rej => {
        console.log(rej);
        this.functions.showSnack(rej.status, rej.message);
        document.getElementById('pRo').setAttribute('src', rej.image.secure_url);
      });
  }

  proToggle() {
    this.proEditing = !this.proEditing;
  }
  covToggle() {
    this.covEditing = !this.covEditing;
  }

}
