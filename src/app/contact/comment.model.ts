export class Comment{
	fullName: String;
	email: String;
	content: String;
	rating: Number;
	myCheckbox: Boolean;
	time: String;

	constructor(fullName: String, email: String, content: String, rating: Number, myCheckbox: Boolean, time: String){

		this.fullName=fullName;
		this.email=email;
		this.content=content;
		this.rating=rating;
		this.myCheckbox=myCheckbox;
		this.time=time;
	}
}
