// constructors

"use strict";

(function() {

	let Car  = function (color) {
		this.color=color;
	}

	let redCar = new Car('red');
	console.log(redCar.color)


})()