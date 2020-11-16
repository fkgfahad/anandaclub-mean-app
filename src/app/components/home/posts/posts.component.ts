import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalFunctions } from '../../../globals/functions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  comment;

  constructor(public functions: GlobalFunctions) {}

  ngOnInit() {}

  sendComment(input: NgForm) {
    console.log(input.value.comment);
  }

  likePost(postid) {
    console.log('Like this post: ' + postid);
  }

}
