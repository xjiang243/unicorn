import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Comment } from './comment.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  private comment: Comment;
  private fullName: String;
  private email: String;
  private content: String;
  private rating: String;
  private mycheckbox: Boolean = false;

  constructor() {}

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    this.fullName=form.value.fullName;
    this.email=form.value.inputEmail;
    this.content=form.value.textarea;
    this.rating=this.rating;
    this.mycheckbox=this.mycheckbox;

    this.comment = new Comment(this.fullName, this.email, this.content, this.rating, this.mycheckbox)

  	console.log(this.fullName);
  	console.log(this.email);
  	console.log(this.content);
  	console.log(this.rating);
    console.log(this.mycheckbox);

    console.log(this.comment);

    


  }


}
