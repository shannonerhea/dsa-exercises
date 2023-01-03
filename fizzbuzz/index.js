// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    // question starts at 1 not 0
    for (let i = 1; i <= n; i++) {
        //is n multple of 3 && 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0 ) {
            // is n multp of 3
            console.log("fizz");
        } else if (i % 5 === 0) {
            // is n multp of 5
            console.log("buzz");
        } else {
            console.log(i);
        }
    };
}

module.exports = fizzBuzz;
