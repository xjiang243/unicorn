import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag = false; //show Search Box
	isIn = false; //toggle thing
  
	showSearch(){
		this.flag = !this.flag;
	};

    toggleState() {
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
        this.flag = true;
    }

    tabClick(){
    	this.isIn = false; 
    }
}
