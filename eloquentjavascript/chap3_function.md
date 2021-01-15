# Functions

functions are the bread and butter of JS programming. 

## Defining a function

A function is created with an expression that starts with the key word *function*
Function have a set of parameters (in this case, only x) and a body, which contains the statements that are to be excuted when the function is called. The
The function body of a function created this way must always be wrapped in braces even when it consists of only a single statement.

Some functions produce a value, and some don't whose only result is a side effect.

## Bindings and scopes

Each binding has a scope, which is the part of the program in which the binding is visible. 

Bindings declared with *let* and *const* are in fact local to the block that they are declard in, so if you create one of those inside a loop, the code before and after the loop cannot "see" it.


```bash
const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
# // → 50
console.log(n);
# // → 10
```
## Nested scope

Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called *lexical scoping*

## Functions as values

it is possible to store a function value in a new binding, pass it as an argument to a function.

## Declaration notation

```bash
function square(x){
  return x * x;
}
```
This is a function declaration.


```bash
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```
The preceding code works, even though the function is defined below the code that uses it. Function declarations are not part of the regular top-to-bottom flow of control.

## Arrow Functions

```bash
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const horn = () => {
  console.log("Toot");
};
```
## The call stack

## Optional arguments

JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined.
```bash
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
# // → 16
console.log(power(2, 6));
# // → 64
```
## Closure
this feature - being able to reference a specific instance of a local binding in an enclosing scope - is called closure. A function that references bindings from local scopes around it is called a closure.

```bash

function multiplier(factor) {
  return number => number* factor;
}
let twice = multiplier(2);
console.log(twice(5));
```

## Recursion

It is perfectly okay for a function to call itself, as long as it doesn't do it so often that it overflows the stack.

A function that calls itself í called *recursive*
``` bash
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
# // → 8
```


## Growing functions

How difficult it is to find a good name for a function is a good indication of how clear a concept it is that you're trying to wrap.
such a function is useful in more situations than just this specific program. 

## Functions and side effects

Functions can be roughly divided into those that are called for their side effects and those that are called for their return values. 

Side effect function: it prints a line.
function creates values: return value.

Functions that create values are easier to combine in new ways than functions that directly perform side effects.

**Pure functions**: Same input, same output.


