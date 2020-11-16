import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Privacy } from '../../../../models/models';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {
  image; privacy; post: object; selectedImg: boolean;
  imgdata: string;
  prcs: Privacy[] = [
    {name: 'public', value: 1},
    {name: 'member', value: 0}
  ];

  constructor() {
    this.image = null;
  }

  ngOnInit() {}

  imgSelected(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imgdata = e.target.result;
    };
    reader.readAsDataURL(file);

    this.selectedImg = true;
    console.log(this.imgdata);

    const data = new FormData();
    data.append('image', file, file.name);
    this.image = data;
  }

  imgDisSecected() {
    this.image = null;
    this.imgdata = '';
    this.selectedImg = false;
  }

  sendPost(input: NgForm) {
    if (this.image === null) {
      this.post = {
        image: null,
        post: input.value.post,
        privacy: input.value.privacy
      };
    } else {
      this.post = {
        image: this.image,
        post: input.value.post,
        privacy: input.value.privacy
      };
    }
    console.log(this.post);
    input.form.reset();
  }

}
