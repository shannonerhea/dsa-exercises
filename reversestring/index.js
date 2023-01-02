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

// used for loop
function reverse(str) {
let reversed = "";
for (let character of str ) {
    reversed = character + reversed;
};
return reversed;
};




module.exports = reverse;
