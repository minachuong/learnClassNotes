//LIVE DEMO on creating a credit card validator using Luhn formula

var cc = "4556737586899855";
var lastDigit = cc.charAt(cc.length - 1);
// var newCC = (cc - lastDigit) / 10;
var newCC = cc.slice(0, 15);
var reversedCC = newCC.split("").reverse().join("");
// reversedCC -> "589986857376554"
reversedCC.charAt(0);

//Purpose: multiply a number by 2
//Signature: receives a number, returns a number
//Example: multiplyByTwo(2) -> 4
function multiplyByTwo(factor) {
  return factor * 2;
}

var multipliedString = multiplyByTwo(reversedCC.charAt(0)) + reversedCC.charAt(1) + multiplyByTwo(reversedCC.charAt(2)) + reversedCC.charAt(3) + multiplyByTwo(reversedCC.charAt(4)) + reversedCC.charAt(5) + multiplyByTwo(reversedCC.charAt(6)) + reversedCC.charAt(7) + multiplyByTwo(reversedCC.charAt(8)) + reversedCC.charAt(9) + multiplyByTwo(reversedCC.charAt(10)) + reversedCC.charAt(11) + multiplyByTwo(reversedCC.charAt(12)) + reversedCC.charAt(13) + multiplyByTwo(reversedCC.charAt(14));
// multipliedString -> "1081891661651431461058"

//Purpose: Add -9 to a number that is greater than 9
//Signature: receives a number, returns a number
//Example: addNegativeNine(10) -> 1; addNegativeNine(8) -> 8
function addNegativeNine(number) {
  return parseInt(number) + (number > 9)*(-9);
}
var sum = addNegativeNine(multiplyByTwo(reversedCC.charAt(0))) + addNegativeNine(reversedCC.charAt(1)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(2))) + addNegativeNine(reversedCC.charAt(3)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(4))) + addNegativeNine(reversedCC.charAt(5)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(6))) + addNegativeNine(reversedCC.charAt(7)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(8))) + addNegativeNine(reversedCC.charAt(9)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(10))) + addNegativeNine(reversedCC.charAt(11)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(12))) + addNegativeNine(reversedCC.charAt(13)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(14)));
// sum -> 85
sum % 10 == lastDigit && alert("CARD IS VALID");
sum % 10 != lastDigit && alert("CARD IS VALID");

//Purpose: check if a credit card number is a valid Luhn number
//Signature: receives a string of numbers, returns a boolean
//Example: isCCValid("4556737586899855") -> true; addNegativeNine("123412341234") -> false
function isCCValid(string) {
  var cc = string;
  var lastDigit = cc.charAt(cc.length - 1);
  var newCC = cc.slice(0, 15);
  var reversedCC = newCC.split("").reverse().join("");
  var multipliedString = multiplyByTwo(reversedCC.charAt(0)) + reversedCC.charAt(1) + multiplyByTwo(reversedCC.charAt(2)) + reversedCC.charAt(3) + multiplyByTwo(reversedCC.charAt(4)) + reversedCC.charAt(5) + multiplyByTwo(reversedCC.charAt(6)) + reversedCC.charAt(7) + multiplyByTwo(reversedCC.charAt(8)) + reversedCC.charAt(9) + multiplyByTwo(reversedCC.charAt(10)) + reversedCC.charAt(11) + multiplyByTwo(reversedCC.charAt(12)) + reversedCC.charAt(13) + multiplyByTwo(reversedCC.charAt(14))
  var sum = addNegativeNine(multiplyByTwo(reversedCC.charAt(0))) + addNegativeNine(reversedCC.charAt(1)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(2))) + addNegativeNine(reversedCC.charAt(3)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(4))) + addNegativeNine(reversedCC.charAt(5)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(6))) + addNegativeNine(reversedCC.charAt(7)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(8))) + addNegativeNine(reversedCC.charAt(9)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(10))) + addNegativeNine(reversedCC.charAt(11)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(12))) + addNegativeNine(reversedCC.charAt(13)) + addNegativeNine(multiplyByTwo(reversedCC.charAt(14)))
  sum % 10 == lastDigit && alert("CARD IS VALID");
  sum % 10 != lastDigit && alert("CARD IS NOT VALID");
  return sum % 10 == lastDigit;
}
