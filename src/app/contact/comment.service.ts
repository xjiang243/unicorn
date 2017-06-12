import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Comment } from "./comment.model";

@Injectable()
export class CommentService {
    private comments: Comment[] = [];
    commentIsEdit = new EventEmitter<Comment>();

    constructor(private http: Http) {}

    addComment(comment: Comment) {
        const body = JSON.stringify(comment);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:4200/contact', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const comment = new Comment(result.obj.fullname, result.obj.email, result.obj.content, result.obj.rating, result.obj.myCheckbox);
                this.comments.push(comment);
                return comment;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}