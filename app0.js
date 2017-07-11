// // // // var greet = function (){
// // // // 	console.log("hi");
// // // // }

// // // //  greet.person="jose";
// // // //  // console.log(greet.person);
// // // //  // console.log(greet);
// // // // greet();
// // // // function testparam(a){
// // // // 	console.log(a);
// // // // 		// greet();

// // // // }

// // // // testparam("test string");
// // // // testparam(2421);
// // // // testparam(function testinginside(){
// // // // 	console.log("inside");
// // // // });

// // // // closure js

// // // function closu(para){
// // // 	return function(name){
// // // 		console.log(para+' '+name);
// // // 	}

// // // }

// // // closu('i am')('jose');
// // // var saytojose = closu('Hi');
// // // saytojose('josemv');
// // // //  closure
// // // call() , apply(), bind()


// // var person = {
// // 	firstname:'jose',
// // 	lastname:'varghese',
// // 	getFullName:function(){
// // 		var fullname = this.firstname+" "+this.lastname;
// // 		return fullname;
// // 	}
// // }

// // var logName = function (lang1,lang2){
// // 	console.log("Logged in"+this.getFullName());
// // 	console.log(lang1+"  "+lang2);
// // 	console.log('----------------');
// // }
// // // bind 
// // var logPersonName = logName.bind(person);
// // logPersonName('en','es');
// // logName.call(person,'es','en');
// // logName.apply(person,['es','en']);

// // // function borrowing
// // var person2 ={
// // 	firstname:'john',
// // 	lastname:'varghese',

// // }
// // console.log(person.getFullName());
// // console.log(person.getFullName.apply(person2));
// // console.log(person.getFullName.call(person2));
// // class Person {

// // 	constructor(fname,lname){
// // 		this.fname = fname;
// // 		this.lname = lname;
// // 	}
// // 	greeet(){
// // 		return 'Hi '+this.fname;
// // 	}	
// // }

// // var jose = new Person('Jose','Varghese');

// // console.log(jose);
// // console.log(jose.greeet());

// // console.log("xxxxxxxxxxxxxxxtending classsssssssssssss");
// //  class InformalPerson extends Person{
// //  	constructor(fname,lname){
// //  		super(fname,lname);
// //  	}
// //  	greeet(){
// //  		return 'Yo'+this.fname;
// //  	}
// //  }

// //  var john = new InformalPerson('John','Varghese');
// // console.log(john.greeet());

// console.log("typeof");
// var a =4;
// console.log(typeof a);

// var b ={};
// console.log(typeof b);
// var c ="jose";
// console.log(typeof c);
// var d =[1,2,3,2];
// console.log(typeof d);

// var x= (function text(){
// 	console.log("WErwerwer");
// });
// x();

var x= function(){
	console.log("Adsfasfdasfa")
};
x();