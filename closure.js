"use strict";

(function() {

console.log('closure');
var passed=3;
var passed1=3;

var addTo = function () {
	var inner=2
	return inner+passed+passed1;
};

console.log(addTo());
console.dir(addTo);


})()