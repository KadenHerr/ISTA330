/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {

  let count1 = 0;
  let count2 = 0;
  let i = 0;
  let j = 0;
  let retVal = 0;

  while(j < input.length) {

      if(input[i] == input[j]) {
      count1++;
      j++;
      continue;
    }

    i = j;
    while(count2 < count1) {

      if(j >= input.length) {
        return retVal + 1;
      }

      if(input[i] == input[j]) {
        count2++;
        j++;

        if(count1 == count2) {
          retVal++;
          i = j;
          count1 = 0;
          count2 = 0;
        }

      } else {
        retVal++;
        i = j;
        count1 = 0;
        count2 = 0;
      }
    }
  }

  return retVal;
};