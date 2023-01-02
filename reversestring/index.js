// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// used 3 str methods .split on each char .reverse and .join on characters
// function reverse(str) {
//     return str
//        .split('')
//        .reverse() // reverse all ele in given arr
//        .join('');
// };

// used for of loop
// function reverse(str) {
// let reversed = "";
// for (let character of str ) {
//     reversed = character + reversed;
// };
// return reversed;
// };

// when ever reduce run its take the starting arg which is an empty str
// its passes the empty str into the arrow function and whatever gets returned from the inner function will be
// will be used for the starting arg for every run of the function
// function runs one tim for every ele in arr
function reverse(str) {
    debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
};
reverse("asdf");

module.exports = reverse;
