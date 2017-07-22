/*
Instructions:
Evaluate each line below as though YOU were the interpreter.

//START
var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x;

z[2] = y[0];
z[1] = y[2];
y[1] = z[1];
x[0] = y[0];
x[2] = 1;
//END

What are the final values of x, y, and z?

IMPORTANT: DO NOT just rewrite this code and run it in a terminal.
There is ZERO POINT to that, you'd just be cheating yourself.
Having the computer keep track of the variable assignments for you does not help you learn!!!

Starter Code :
var answer = {
  finalValueOfX: null, // FILL THIS IN
  finalValueOfY: null, // FILL THIS IN
  finalValueOfZ: null, // FILL THIS IN
};
*/

var answer = {
	finalValueOfX: [4, 6, 1], // FILL THIS IN
	finalValueOfY: [4, 6, 6], // FILL THIS IN
	finalValueOfZ: [4, 6, 1], // FILL THIS IN
};