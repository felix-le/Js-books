# Data structures: Objects and arrays

Numbers, Boolean, and strings are the atoms that data structures are built from. 
*Objects* allow us to group values - including other objects - to build more complex structures.

## Data sets

value[2] or value["John Doe"]

The two ways to access properties in JavaScript are with a dot and with square brackets. Bot value.x and value[x] access a property on value - but not necessarily the same property.
- When using a dot, the word after the dot is the literal name of the property.
- When using square brackets, the expression between the brackets is **evaluated** to get the property name.

## Methods
```bash
let doh = "Doh";
console.log(typeof doh.toUpperCase);
# // → function
console.log(doh.toUpperCase());
# // → DOH
```

> Properties that contain functions are generally called methods of the value they belong to, as in "toUpperCase is a method of a string"

# Objects
Value of the type object are arbitrary collections of properties. One way to create an object is by using braces as an expression.

```bash
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
# // → false
console.log(day1.wolf);
# // → undefined
day1.wolf = false;
console.log(day1.wolf);
# // → false
```
**Delete**
```bash
let anObject = {left: 1, right: 2};
console.log(anObject.left)
# 1
delete anObject.left;

console.log(anObject.left)
# undefined

console.log('left' in anObject);
# false
console.log('right' in anObject)
# true
```
**assign**
```bash
let objectA = {a:1, b:2}
Object.assign(ObjectA, {b:3, c:4})
console.log(objectA);
# {a:1, b:3, c:4}
```

## Mutability

when we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to the same physical bits. With objects, there is a difference between having references to the same object and having two different objects that contain the same properties.
```bash
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
# // → true
console.log(object1 == object3);
# // → false
```

> *The Object1 and object2 bindings grasp the same object, which is why changing object also changes the values of object2.*
The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life.

## The lycanthrope's log

Correlation is a measure of dependence between statistical variables. 

Correlation between variables is usually expressed as a value that ranges from -1 to 1. Zero correlation means the variables are not related. (-1) is false and 1 is true.

## Array loops
## Strings and their Properties
```bash
let kim = "Kim";
kim.age = 88;
console.log(kim.age);
# // → undefined
```

Values of type string, and boolean are not objects, and though the language doesn't complain if you try to set new properties on them, it doesn't actually store those properties.

```bash

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
# // → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
# // → Secretarybirds. specialize. in. stomping
```

# JSON

What we can do is serialize the data. that means it is converted into a flat description. 
It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript.

> JSON looks similar to JS's way of writing arrays and objects, with a few restrictions. All property names have to be surrounded by double quotes, and only simple data expressions are allowed - no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.

```bash
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}

let string = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
```

