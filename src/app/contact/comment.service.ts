
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Comment } from "./comment.model";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CommentService {

    private comments: Comment[];

    constructor(private http: Http) {}

    addComment(comment: Comment) {

       console.log("Content in Service: " + comment.content);
       var headers = new Headers();
       headers.append("Content-Type", "application/json");
       this.http.post("http://localhost:3000/",
       JSON.stringify(comment), {headers: headers}).subscribe(err => console.log(err));
    };

    getComments():Observable<Comment[]> {

        return this.http.get("http://localhost:3000/")
                         .map(res => res.json())
                         .do(data => console.log("get Comments from json: " + JSON.stringify(data)))
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

    deleteComment(id: string): Observable<Comment>{
        
        console.log(id);
        return this.http.delete("http://localhost:3000/" + id)
        .map(this.extractData)
        .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}