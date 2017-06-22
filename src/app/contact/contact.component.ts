import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from "@angular/forms";

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
  private rating: Number;
  private mycheckbox: Boolean;
  private comments: Comment[];
  private time: String;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    console.log(this.commentService.getComments());
    this.commentService.getComments().subscribe(comments => this.comments = comments);
  }

  onSubmit(form: NgForm){

    var _date=new Date().getDate();
    var _month=new Date().getMonth();
    var _year=new Date().getFullYear();

    this.time = (_month+1) + "/" + _date + "/" + _year;
    this.comment = new Comment(form.value.fullName, form.value.inputEmail, form.value.textarea, 
    Number(this.rating), this.mycheckbox, this.time);
    console.log(this.comment);
    this.commentService.addComment(this.comment);
    form.reset();
    this.mycheckbox = false;
    location.reload();
  }

  delete(id: string){
    this.commentService.deleteComment(id)
    .subscribe(
                result => console.log(result),
                error => console.log(error)
                );
    location.reload();
  }


}
