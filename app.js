function b(){
	var myVar;
	console.log(myVar);
}
function a(){
	var myVar =2;
	console.log(myVar);
	b();
}
var myVar =1;
console.log(myVar);
a();




//anonymous function   ,expression
var greet = function (){
	console.log("hi");
}

 greet.person="jose";
 console.log(greet.person);
 console.log(greet);
greet();

function testparam(a){
	console.log(a);
		greet();

}

testparam("test string");
testparam(2421);
testparam(function testinginside(){
	console.log("inside");
});
var a=2;
var b;
b=a;
a=3;
console.log(b);
console.log(a);
// above pass by value , below pass by reference
var c = {greeting:'hi'};
var d;
d = c;
c.greeting = "hello";// mutate - it can change values
// bot are pointing to same mmy location
console.log(d.greeting);
console.log(c.greeting);

c.greeting = "good morning";
console.log(c.greeting);
console.log(this);

var arra= [
	1,
	false,
	{
		name:'jose',
		age:'12',		
	},
	function(name){
		console.log("hello"+name);
	},
	"hello",
];
// arra[3]("jose");
console.log(arra);
arra[3]("jose");
console.log((2+3));
// IIFE immediatly invoked  functions expressions
(function(name){
	console.log("my name is "+name);
})("jose");//IIFE

// closure js

function closu(para){
	return function(name){
		console.log(para+' '+name);
	}

}

closu('i am')('jose');
var saytojose = closu('Hi');
saytojose('josemv');
//  closure


function buildfunctions(){
	var arr=[];
	for (var i = 0; i <3; i++) 
	{

		arr.push(
			function(){
				console.log(i);
			}

			);
	}
	return arr;
}

var fs = buildfunctions();
fs[0]();
fs[1]();
fs[2]();	

// closure example
function makeGreeting(language){

	return function(firstname,lastname){

		if(language==='en'){
			console.log('hello  '+firstname+' '+lastname);
		}
		else if(language==='es'){
			console.log('hola  '+firstname+' '+lastname);
		}

	}

}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('jose','varghese');
greetSpanish('john','varghese');
// closure example


// call() , apply(), bind()


var person = {
	firstname:'jose',
	lastname:'varghese',
	getFullName:function(){
		var fullname = this.firstname+" "+this.lastname;
		return fullname;
	}
}

var logName = function (lang1,lang2){
	console.log("Logged in"+this.getFullName());
	console.log(lang1+"  "+lang2);
	console.log('----------------');
}
// bind 
var logPersonName = logName.bind(person);
logPersonName('en','es');
logName.call(person,'es','en');
logName.apply(person,['es','en']);

// function borrowing
var person2 ={
	firstname:'john',
	lastname:'varghese',

}
console.log(person.getFullName());
console.log(person.getFullName.apply(person2));
console.log(person.getFullName.call(person2));

// function currying
function multiply(a,b){
	return a*b;
}
var multiplyByTwo = multiply.bind(this,2);
console.log(multiplyByTwo(4));
var multiplyBy = multiply.bind(this);
console.log(multiplyBy(4,3));
var multiplyB = multiply.bind(this,3,5);
console.log(multiplyB());
console.log("classsssssssssssss");


class Person {

	constructor(fname,lname){
		this.fname = fname;
		this.lname = lname;
	}
	greeet(){
		return 'Hi'+fname;
	}	
}

var jose = new Person('Jose','Varghese');

console.log(jose);

console.log("xxxxxxxxxxxxxxxtending classsssssssssssss");
 class InformalPerson extends Person{
 	constructor(fname,lname){
 		super(fname,lname);
 	}
 	greeet(){
 		return 'Yo'+fname;
 	}
 }

 var john = new InformalPerson('John','Varghese');
console.log(john);

console.log("typeof");
	
var a =4;
console.log(typeof a);

var b ={};
console.log(typeof b);
var c ="jose";
console.log(typeof c);
var d =[];
console.log(typeof d);
