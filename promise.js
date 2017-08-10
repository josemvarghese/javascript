(function(){



let promiseToCleanTheRoom = new Promise(function(resolve,reject){
		let isClean = true;
		if(isClean){
			resolve('Cleaned');
		}
		else{
			reject('Not Cleaned');
		}

});

promiseToCleanTheRoom.then(function(fromResolve){
	console.log('The room is ' + fromResolve);
}).catch(function(fromReject){
	console.log('The room is ' + fromReject);
});



// example 2

let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' remove Garbage');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + ' won Icecream');
  });
};

cleanRoom().then(function(result){
	return removeGarbage(result);
}).then(function(result){
	return winIcecream(result);
}).then(function(result){
	console.log('finished ' + result);
})


	
})();