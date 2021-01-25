
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

var canGetEqualCookies = function(cookies, extraCookies) {
     cookies.reverse();
     let numToRemove = 0;

     // If there is only 1 kid or less, return true.
     if(cookies.length <= 1) {
        return true;
     }

     // Distribute the cookies.
     for(var i = 1; i < cookies.length; i++) {
        numToRemove = cookies[0] - cookies[i];
        extraCookies -= numToRemove;
     }

     // If the extra cookies is a negative value, then there was not enough
     // extra cookies for everyone to get an equal share, thus return false.
     if(extraCookies < 0) {
        return false;
     }

     // If the remaining cookies equals 0 or can be devided equally between
     // the kids, return true.
     if((extraCookies % cookies.length) == 0) {
        return true;
     }

     return false;
   
 };
