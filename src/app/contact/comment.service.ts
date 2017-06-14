
import { Comment } from "./comment.model";
import { Injectable } from "@angular/core";

@Injectable()
export class CommentService {

    private comments: Comment[] = [];

    constructor() {}

    addComment(comment: Comment) {
       console.log("I am in the service" + "  " +comment.content);

    }
}