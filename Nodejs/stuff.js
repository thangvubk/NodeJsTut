var counter = function(arr){
	return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
	return `The sum of the two number is ${a + b}`;
};

module.exports ={
	counter : counter,
	adder : adder
}