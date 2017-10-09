// given testcase
var cc = "4556737586899855";
cc
// -> "4556737586899855"
var ccWithoutLastNumber = cc.slice(0,15);
// what is .slice()?
ccWithoutLastNumber
// -> "455673758689985"
// did slice change cc? ...no
var lastNumber = cc.slice(cc.length - 1);
lastNumber
// -> "5"
// Common interview question is to reverse a string
var reversedccWithoutLastNumber = ccWithoutLastNumber.split("").reverse().join("");
// what are we passing into .split() and .join? Does reverse require arguments?
reversedccWithoutLastNumber
// -> "589986857376554"
// what cc changed? no
// Directions: Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
// break it down to small actions and write functions for them

// Purpose: What is my purpose?  To multiply a number by 2 (start with a verb/action b/c it informs the name of the function)
// Inputs (parameters): one number (Integer/String?)
// Expected Outputs: a single Integer
function multiplyByTwo(value) {
  return value * 2;
}
// test your function
multiplyByTwo(100);
// -> 200
multiplyByTwo("100");
// -> 200
// Directions: Multiply the digits in ODD positions (1, 3, 5, etc.) by 2
// How do you get the first number? .charAt(0)? .charAt(1)  ...stuff starts at zero
reversedccWithoutLastNumber.charAt(0);
// -> "5"

// Now using multiplyByTwo()
multiplyByTwo(reversedccWithoutLastNumber.charAt(0));
// -> 10
reversedccWithoutLastNumber.charAt(1);
// -> "8"
multiplyByTwo(reversedccWithoutLastNumber.charAt(2));
// -> 18
reversedccWithoutLastNumber.charAt(3);
// -> "9"

// What if I wanted to display the string of mutated numbers to show something like "5 10 8 18 9..."?
// Could I do:
multiplyByTwo(reversedccWithoutLastNumber.charAt(0)) + reversedccWithoutLastNumber.charAt(1);
// 10 + "8"  guesses? 18 or or 108 or "108"? This is type coercion!
// -> "108"
// Let's do this for the whole string...
multiplyByTwo(reversedccWithoutLastNumber.charAt(0)) + reversedccWithoutLastNumber.charAt(1) + multiplyByTwo(reversedccWithoutLastNumber.charAt(2)) + reversedccWithoutLastNumber.charAt(3) + multiplyByTwo(reversedccWithoutLastNumber.charAt(4)) + reversedccWithoutLastNumber.charAt(5) + multiplyByTwo(reversedccWithoutLastNumber.charAt(6)) + reversedccWithoutLastNumber.charAt(7) + multiplyByTwo(reversedccWithoutLastNumber.charAt(8)) + reversedccWithoutLastNumber.charAt(9) + multiplyByTwo(reversedccWithoutLastNumber.charAt(10)) + reversedccWithoutLastNumber.charAt(11) + multiplyByTwo(reversedccWithoutLastNumber.charAt(12)) + reversedccWithoutLastNumber.charAt(13) + multiplyByTwo(reversedccWithoutLastNumber.charAt(14));
// -> "1081891661651431461058"
// For better display:
multiplyByTwo(reversedccWithoutLastNumber.charAt(0)) + " " + reversedccWithoutLastNumber.charAt(1) + " " + multiplyByTwo(reversedccWithoutLastNumber.charAt(2)) + " " + reversedccWithoutLastNumber.charAt(3) + " " + multiplyByTwo(reversedccWithoutLastNumber.charAt(4)) + " " + reversedccWithoutLastNumber.charAt(5) + " " + multiplyByTwo(reversedccWithoutLastNumber.charAt(6)) + " " + reversedccWithoutLastNumber.charAt(7) + " " + multiplyByTwo(reversedccWithoutLastNumber.charAt(8)) + " " + reversedccWithoutLastNumber.charAt(9) + " " + multiplyByTwo(reversedccWithoutLastNumber.charAt(10)) + " " + reversedccWithoutLastNumber.charAt(11) + " " + multiplyByTwo(reversedccWithoutLastNumber.charAt(12)) + " " + reversedccWithoutLastNumber.charAt(13) + " " + multiplyByTwo(reversedccWithoutLastNumber.charAt(14));
// -> "10 8 18 9 16 6 16 5 14 3 14 6 10 5 8"

// ...Now Let's think about the problem

// Directions: subtract 9 to all any result higher than 9
// For people who are familiar with if-statements there is a huge temptation to use them but JS does something unique
// Examples from the curriculum
true * 9
// -> 9
false * 9
// -> 0
true == 1
// -> true
true === 1
// -> false
false == 0
// -> true
false === 0
// -> false
// What does that mean? That javascript is lazy or WEAK at comparing types ..it rarely cares about types until you tell it to
// Directions: subtract 9 to all any result higher than 9
// A way to think about this problem is through a little addition and understanding what subtraction really means
// Subtraction is really the addition of a negative number
100 - 9
// -> 91
100 + -9 // 100 + (-9)
// -> 91

// Let's start with the first value the string:
var first_value = multiplyByTwo(reversedccWithoutLastNumber.charAt(0));
first_value
// -> 10
first_value > 9
// -> true
(first_value > 9)*(-9)
// -> -9
(first_value > 9)*(-9) + first_value
// -> 1

var second_value = reversedccWithoutLastNumber.charAt(1);
// -> "8"
(second_value > 9)*(-9)
// -> -0
(second_value > 9)*(-9) + second_value
// -> "08"
(second_value > 9)*(-9) + parseInt(second_value)
// -> 8

// If adding -9 or 0 is something we're going to have to do repeatedly... write a function for it
// Purpose: Add -9 or 0 to a value when the value is greater than 9
// Signature: Receives a number (Integer or String); Returns a positive Integer
// Examples: subtractNine("8") -> 8; subtractNine("10") -> 1;

function subtractNine(value) {
  return (value > 9)*(-9) + parseInt(value);
}

subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(0)));
// -> 1

subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(0))) + subtractNine(reversedccWithoutLastNumber.charAt(1)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(2))) + subtractNine(reversedccWithoutLastNumber.charAt(3)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(4))) + subtractNine(reversedccWithoutLastNumber.charAt(5)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(6))) + subtractNine(reversedccWithoutLastNumber.charAt(7)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(8))) + subtractNine(reversedccWithoutLastNumber.charAt(9)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(10))) + subtractNine(reversedccWithoutLastNumber.charAt(11)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(12))) + subtractNine(reversedccWithoutLastNumber.charAt(13)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(14)));
// -> 85

var sumOfAllNumbers = subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(0))) + subtractNine(reversedccWithoutLastNumber.charAt(1)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(2))) + subtractNine(reversedccWithoutLastNumber.charAt(3)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(4))) + subtractNine(reversedccWithoutLastNumber.charAt(5)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(6))) + subtractNine(reversedccWithoutLastNumber.charAt(7)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(8))) + subtractNine(reversedccWithoutLastNumber.charAt(9)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(10))) + subtractNine(reversedccWithoutLastNumber.charAt(11)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(12))) + subtractNine(reversedccWithoutLastNumber.charAt(13)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(14)));

var modulo = sumOfAllNumbers % 10;
// -> 5
// short circuiting with booleans
modulo == lastNumber && alert("VALID CREDIT CARD NUMBER");
modulo != lastNumber && alert("NOT A VALID CREDIT CARD NUMBER");

// ==============================================
// At this point, we have written a script.
// Let's try to package in a single function
// Best Practice: Do not declare new functions within functions. You can execute functions within functions.

function multiplyByTwo(value) {
  return value * 2;
}

function subtractNine(value) {
  return (value > 9)*(-9) + parseInt(value);
}

// Purpose: To validate a cc number using the Luhn formula
// Signature: Receives a string of numbers; Returns a boolean
// Examples: isCCValid("4929305158969660") -> true
function isCCValid(stringOfNumbers) {
  var cc = stringOfNumbers;
  var ccWithoutLastNumber = cc.slice(0,15);
  var lastNumber = cc.slice(cc.length - 1);
  var reversedccWithoutLastNumber = ccWithoutLastNumber.split("").reverse().join("");
  var sumOfAllNumbers = subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(0))) + subtractNine(reversedccWithoutLastNumber.charAt(1)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(2))) + subtractNine(reversedccWithoutLastNumber.charAt(3)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(4))) + subtractNine(reversedccWithoutLastNumber.charAt(5)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(6))) + subtractNine(reversedccWithoutLastNumber.charAt(7)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(8))) + subtractNine(reversedccWithoutLastNumber.charAt(9)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(10))) + subtractNine(reversedccWithoutLastNumber.charAt(11)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(12))) + subtractNine(reversedccWithoutLastNumber.charAt(13)) + subtractNine(multiplyByTwo(reversedccWithoutLastNumber.charAt(14)));
  var modulo = sumOfAllNumbers % 10;
  // side effects
  modulo == lastNumber && alert("VALID CREDIT CARD NUMBER");
  modulo != lastNumber && alert("NOT A VALID CREDIT CARD NUMBER");
  return modulo == lastNumber;
}

//refactored
function isCCValid(stringOfNumbers) {
  var cc = stringOfNumbers;
  var ccWithoutLastNumber = cc.slice(0,15);
  var lastNumber = cc.slice(cc.length - 1);
  var reversedccWithoutLastNumber = ccWithoutLastNumber.split("").reverse().join("");
  var sumOfOddPositionNumbers = subtractNine(reversedccWithoutLastNumber.charAt(0)) + subtractNine(reversedccWithoutLastNumber.charAt(2)) + subtractNine(reversedccWithoutLastNumber.charAt(4)) + subtractNine(reversedccWithoutLastNumber.charAt(6)) + subtractNine(reversedccWithoutLastNumber.charAt(8)) + subtractNine(reversedccWithoutLastNumber.charAt(10)) + subtractNine(reversedccWithoutLastNumber.charAt(12)) + subtractNine(reversedccWithoutLastNumber.charAt(14));
  var sumofEvenPositionNumbers = subtractNine(reversedccWithoutLastNumber.charAt(1)) + subtractNine(reversedccWithoutLastNumber.charAt(3)) + subtractNine(reversedccWithoutLastNumber.charAt(5)) + subtractNine(reversedccWithoutLastNumber.charAt(7)) + subtractNine(reversedccWithoutLastNumber.charAt(9)) + subtractNine(reversedccWithoutLastNumber.charAt(11)) + subtractNine(reversedccWithoutLastNumber.charAt(13));
  var sumOfOddPositionNumbersDoubled = multiplyByTwo(sumOfOddPositionNumbers);
  var sumOfAllNumbers = sumOfOddPositionNumbers + sumofEvenPositionNumbers;
  var modulo = sumOfAllNumbers % 10;
  modulo == lastNumber && alert("VALID CREDIT CARD NUMBER");
  modulo != lastNumber && alert("NOT A VALID CREDIT CARD NUMBER");
  return modulo == lastNumber;
}
