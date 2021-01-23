// it is a type of Object.
// it can be either constructed with the RegExp constructor or written as a literal value by enclosing a pattern in forward slash (/) characters.

let re1 = new RegExp('abc');
let re2 = /abc/;

// both of those regular expression objects represent the same pattern: an a character followed by a b followed by a c. 
// First, since a forward slash ends the pattern, we need to put a backslash before any forward slash that we want to be part of the pattern. In addition, backslashes that aren’t part of special character codes (like \n) will be preserved, rather than ignored as they are in strings, and change the meaning of the pattern. Some characters, such as question marks and plus signs, have special meanings in regular expressions and must be preceded by a backslash if they are meant to represent the character itself.

let eighteenPlus = /eighteen\+/;

console.log("  word".search(/\S/));
// → 2
console.log("    ".search(/\S/));
// → -1

let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
// → 4
console.log(pattern.lastIndex);
// → 5



// testing for matches:

console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false

// sets of characters

console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true



// \d	Any digit character
// \w	An alphanumeric character (“word character”)
// \s	Any whitespace character (space, tab, newline, and similar)
// \D	A character that is not a digit
// \W	A nonalphanumeric character
// \S	A nonwhitespace character
// .	Any character except for newline

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false


console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

// The star (*) has a similar meaning but also allows the pattern to match zero times. Something with a star after it never prevents a pattern from matching—it’ll just match zero instances if it can’t find any suitable text to match.

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true

console.log("one two 100".match(/\d+/));
// → ["100"]

console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123"));
// → ["123", "3"]
console.log(/cat/.test("concatenate"));
// → true
console.log(/\bcat\b/.test("concatenate"));
// → false

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false

console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar


console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "$2 $1"));
// → Barbara Liskov
//   John McCarthy
//   Philip Wadler

// The $1 and $2 in the replacement string refer to the parenthesized groups in the pattern. $1 is replaced by the text that matched against the first group, $2 by the second, and so on, up to $9. The whole match can be referred to with $&.

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) { // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs
