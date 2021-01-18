# Chapter 1: Values, Types, And Operators

## Values

To be able to work with such quantities of bits without getting lost, we must separate them into chinks that represent pieces of information. 
> In a JS environment, those chunks are called Values.
Every value has to be stored somewhere, and if you want to use a gigantic amount of them at the same time, you might run out of memory.
As soon as you no longer use a value, it will dissipate, leaving behind its bits to be recycled as building material for the next generation of values.

# Primitive values & Objects
There are 6 primitive values:

1. Boolean
2. numbers
3. String
4. Null
5. Undefined
6. symbol (ES 2015)

# function expressions && function declarations

**function declarations**
```bash
function greeting () {
    console.log('Hello world')
}
```

**function expressions**

```bash
const greeting = function () {
    console.log('Hello world')
}

const greeting = () => {
    console.log('Hello world')
}
```

## Arithmetic operations

* Plus: +
* Multiplication: *
* Subtract: -
* division: /
* parentheses: ()
* exclamation points: !
* Braces punctuation / brackets : {}
* Percent: %; it is used to represent the **Remainder** operation; X % Y is ther remainder of dividing X by Y. Example: 314 % 100 produces 14 >> Module
* Single quotes, double quotes, or backticks ' " `
* Backslash: \

### Basic type 1: Numbers - numeric values

Values of the number type are numeric values. 

**Factional Numbers** are written by using a dot: 9.81

### Basic type 2: Special Numbers

* Infinity and - Infinity
* Infinity - 1 is still Infinity
* NaN: Not a number (0 / 0) - this value is not equal to itself.

### Basic type 3: Strings

They are written by enclosing their content in quotes.

```
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
```

### Basic type 4: Boolean values 

True / false values.

Uppercase letters are always 'less' than lowercase ones.

#### Logical operators
```bash
true && false > false
true && true > true
console.log(false || true) => true
!true === false
# Logical operator: ternary
console.log(true ? 1: 2);
```
### Empty values
```bash
null & undefined
```

### Automatic type conversion
```bash
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```

# Functions and side effects

The function keyword, when used as an expression, can create a function value. When used as a statement, it can be used to declare a binding and give it a function as its value. Arrow functions are yet another way to create functions.

A key aspect in understanding functions is understanding scopes. Each block creates a new scope. 

# 