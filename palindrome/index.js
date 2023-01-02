// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   debugger;
//   return str === reversed;
// }

// palindrome("abba");
// palindrome("abcdefg");

//NOT and ideal solution
//.every returns a boolean
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
function palindrome(str) {
   return str.split("").every((char, i ) => {
    return char === str[str.length -1 -i];
   });
  };

module.exports = palindrome;
