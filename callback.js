"use strict";
(function(){

	let x = function(){
		console.log("i am a callback function ");
	};
	let y = function(callback){
		console.log('i am the real function');
		callback();
	};
	y(x);

	let a = function(a,b){
		console.log("i am a callback function ");
		console.log(a+b);
	};
	let b = function(a,b,callback){
		console.log('i am the real function');
		callback(a,b);
	};
	b(5,45,a);
	// let c = function(f,g,function(f,g){
	// 	console.log((f+g));
	// }){
	// 	console.log(f);
	// };
	// c(9,6);

	// before callback implemenation
	console.log("before callback implemetaion");
	let calc = function(num1,num2,calcType){
		if(calcType==='add'){
			return num1+num2;
		}
		else if(calcType==='multiply'){
			return num1*num2;
		}
	}
	console.log("calc(5,7,'add')");
	console.log(calc(5,7,'add'));
	console.log("calc(5,7,'multiply')");
	console.log(calc(5,7,'multiply'));

	// after callback implemetaion
	console.log("after callback implemetaion");
	let add  = function(a,b){
		return a+b;
	}
	let multiply = function(a,b){
		return a*b;
	}
	let callBcalc = function(num1,num2,callback){
		if(typeof callback==='function'){
			return callback(num1,num2);
		}
	}
	console.log("callBcalc(5,7,add)");
	console.log(callBcalc(5,7,add));
	console.log("callBcalc(5,7,multiply)");
	console.log(callBcalc(5,7,multiply));

	console.log(callBcalc(55,7,function(a,b){return a/b;}))	

})();
