import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [CommentService, Http]
})

export class ContactComponent implements OnInit {

  private comment: Comment;
  private rating: String;
  private mycheckbox: Boolean;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    this.comment = new Comment(form.value.fullName, form.value.inputEmail, form.value.textarea, 
    this.rating, this.mycheckbox)

    console.log(this.comment);
    this.commentService.addComment(this.comment);


  }


}
