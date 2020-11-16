import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalFunctions } from '../../../globals/functions';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  message: string; spinner: boolean;

  constructor(public functions: GlobalFunctions) {
    this.spinner = false;
  }

  ngOnInit() {
    this.gettingHeight();
    this.scrollToBottom();
    this.scrollEvent();
  }

  sendMessage(input: NgForm) {
    const audio = new Audio('assets/audio/message-sent.oga');
    // const audio = new Audio('assets/audio/new-message.ogg');
    audio.volume = 0.2;
    audio.play();
    const newMessage = {
      user: {
        id: 'xxasadadadawsdad'
      },
      message: input.value.message
    };
    console.log(newMessage);
    this.message = '';
    this.scrollToBottom();
  }

  scrollEvent() {
    const msgBox = document.getElementById('messageBox');
    msgBox.addEventListener('scroll', () => {
      if (msgBox.scrollTop <= 0) {
        console.log('new data');
      }
    });
  }

  scrollToBottom() {
    const msgBox = document.getElementById('messageBox');
    msgBox.scroll(0, msgBox.scrollHeight);
  }

  gettingHeight() {
    document.getElementById('inbox').style.height = (window.innerHeight - 50).toString() + 'px';
    window.addEventListener('resize', () => {
      document.getElementById('inbox').style.height = (window.innerHeight - 50).toString() + 'px';
    });
  }

}
