"use strict";

(function() {

	class Person{
		constructor(firstname,lastname){
			this.firstname = firstname;
			this.lastname = lastname;
		}
		greet(){
			console.log(this.firstname+ '  '+ this.lastname);
		}
	}

	var john = new Person('john','doe');
	john.greet();

	console.log(john.__proto__);



})()