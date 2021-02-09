/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
   let maxVal = Math.max(...input);

   let index = input.indexOf(maxVal);
   let otherVars = [];

   // Store all of the values that are not the one max value in an array.
   for(var i=0;i<input.length - 1;i++) {
        if(i != index) {
                otherVars[i] = input[i];
        }
   }

   // Find half of the max value.
   maxVal = maxVal / 2;

   for(var i = 0; i<otherVars.length;i++) {
        if(otherVars[i] > maxVal) {
                return false;
        }
   }
   // if the code reaches this point then all of the values are half or less.
   return true;
};