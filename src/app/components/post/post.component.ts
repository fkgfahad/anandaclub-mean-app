import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalFunctions } from '../../globals/functions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  comment: string;

  constructor(
    public functions: GlobalFunctions
  ) {}

  ngOnInit() {
    document.querySelector('.mat-card-header-text').setAttribute('id', 'hide');
    document.getElementById('hide').style.display = 'none';
  }

  sendComment(input: NgForm, postid) {
    console.log('comment: ' + input + ' for: ' + postid);
  }

  likePost(postid) {
    console.log('Like post: ' + postid);
  }

}
