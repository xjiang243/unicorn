export class Comment{
	fullName: String;
	email: String;
	content: String;
	rating: Number;
	myCheckbox: Boolean;

	constructor(fullName: String, email: String, content: String, rating: Number, myCheckbox: Boolean){

		this.fullName=fullName;
		this.email=email;
		this.content=content;
		this.rating=rating;
		this.myCheckbox=myCheckbox;
	}
}
