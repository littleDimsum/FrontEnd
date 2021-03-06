/*
Instructions:
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']

Starter Code :
function getAllElementsButNth(array, n) {
  // your code here
}
*/

function getAllElementsButNth(array, n) {
	array.forEach(function(element){
		if(array.indexOf(element) === n){
			array.splice(n, 1);
		}
	});
	
	return array;
}