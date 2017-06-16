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
  private rating: String;
  private mycheckbox: Boolean;
  private comments: Comment[];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    console.log(this.commentService.getComments());
    this.commentService.getComments().subscribe(comments => this.comments = comments);
  }

  onSubmit(form: NgForm){

    this.comment = new Comment(form.value.fullName, form.value.inputEmail, form.value.textarea, 
    this.rating, this.mycheckbox)

    console.log(this.comment);
    this.commentService.addComment(this.comment);
    this.comments.push(this.comment);
    form.reset();
    this.mycheckbox = false;
  }

  delete(id: string){
    this.commentService.deleteComment(id).subscribe( result => console.log(result));
    location.reload();
  }


}
