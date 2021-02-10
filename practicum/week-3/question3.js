/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
    let retVal = [1];  
    // Base cases
    if(n == 1) {
      return [1];
    }
    if(n == 2) {
      return [1,1];
    }
    return buildTriangle(n-2,[1,1],[1,1,1]);
};
// Helper function
function buildTriangle(n,arr,fullTri) {
    // Base cases
    if(n <= 0) {
      return fullTri;
    }
    let retVal = [1];

    // Recursive case
    for(i=1; i<arr.length; i++) {
      retVal.push(arr[i]+arr[i-1]);
    }
    retVal.push(1);
    return buildTriangle(n-1,retVal,fullTri.concat(retVal));
}