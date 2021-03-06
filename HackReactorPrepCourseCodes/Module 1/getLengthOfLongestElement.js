/*
Instructions:
Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

Starter Code :
function getLengthOfLongestElement(arr) {
  // your code here
}
*/

function getLengthOfLongestElement(arr) {
	let temp = 0;
	
	if(!(arr === undefined || arr.length === 0)){
		for(let i = 0; i < arr.length; i++){
			if(arr[i].length > temp) {
				temp = arr[i].length;
			}
		}
	} 
	
	return temp;
}