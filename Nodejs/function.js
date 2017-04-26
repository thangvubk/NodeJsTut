//normal function statement

function sayHi(){
	console.log("hi");
}

sayHi();

//function expression
var sayBye = function(){
	console.log("Bye");
}

sayBye();

function callFunction(func){
	func();
}

callFunction(sayBye);