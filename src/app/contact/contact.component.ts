import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from "@angular/forms";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Comment } from './comment.model';

import { CommentService } from './comment.service';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [CommentService]
})

export class ContactComponent implements OnInit {

  private comment: Comment;
  private rating: String;
  private mycheckbox: Boolean;

  constructor(private commentService: CommentService, public http: Http) {}

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    this.comment = new Comment(form.value.fullName, form.value.inputEmail, form.value.textarea, 
    this.rating, this.mycheckbox)

    console.log(this.comment);
    this.commentService.addComment(this.comment);

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/createComments',
    JSON.stringify(this.comment), { headers: headers })
      .subscribe(err => console.log(err));
  }


}
