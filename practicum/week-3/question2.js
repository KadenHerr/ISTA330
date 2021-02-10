
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
        let total = 0;
        let max = input[0];
     
        for(let i = 0; i < input.length; i++) {
             for(let j=i; j < input.length; j++) {
                     total += input[j];
                     if(total > max) {
                             max = total;
                     }
             }
             total = 0;
     }
     return max;
 };
