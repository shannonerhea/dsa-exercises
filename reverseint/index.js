// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
//console.log("node index.js runs my code!");
// .toString()
const myNum = 200
//let res = myNum.toString().split(''); // make int a an arr of str ["2", "0", "0"]
let res = parseInt(myNum.toString());
//parseInt turns the str back into a integer
console.log(res);



// Math.sign(); https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
// eg. Math.sign(500)= 1 Math.sign(-500)= -1
function reverseInt(n) {}

module.exports = reverseInt;
