-"use strict";

(function() {

	// prototypes
	function Greet(){
		this.greeting = "helo world";
		this.firstname ="jose"
	}

	var newgreet = new Greet();
	console.log(newgreet);
	Greet.prototype.greet = function(){
		console.log(this.greeting);
	}
	console.log(newgreet);
	newgreet.greet();


})()