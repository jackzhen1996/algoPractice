// check whether or not it is palindrome
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length-1-i]) {
      return false;
    }
  }
  return true;
}

function PalindromicSubstring(str) { 

  // time complexity: O(n^3), space complexity: O(n)

  // edge case: if palindrome or str is length 2 return none

  // palindrome: a word that reads same back word as forward
  // example: racecar => flip => racecar

  // looking for the longest palindrome at least longer than length 2
  // sliding window:
  // iterate the array with a window. For every iteration, check all possible
  // combinations of substring for a palindrome.
  // check if the window is a palindrome (helper function)
  // keep track of the longest palindrome each time I find one
  // 'hellosannasmith'

  let longest = '';
  for (let i = 0; i < str.length-3; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (isPalindrome(str.substring(i,j))) {
        if (str.substring(i,j).length > longest.length) {
          longest = str.substring(i,j);
        }
      }
    }
  }

  // code goes here  
  return longest.length > 2? longest: 'none';

}
   
// keep this function call here 
console.log(PalindromicSubstring(readline()));
