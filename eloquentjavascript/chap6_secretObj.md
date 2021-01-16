# The secret life of objects

Object-oriented programming languages.

## Encapsulation:
Separating interface from implementation is a great idea. It is usually called **encapsulation**.

> The core idea in object-oriented programming is divide programs into smaller pieces and make each piece responsible for managing its own state. This way, some knowledge about the way a piece of the program works can be kept local to that piece.

Such program pieces are modeled using objects. Their interface consists of a specific set of methods and properties.

Different pieces of such a program interact with each other through *interfaces*, limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.

> Such program pieces are modeled using objects. Their interface consists of a specific set of methods and properties. Properties that are part of the interface are called *public*. The others, which outside code should not be touching, are called *private*.

>> It is also common to put an underscore (_) character at the start of property names to indicate that those properties are private.

# Methods
> Methods are nothing more than properties that hold function values. 
```bash
let rabbit = {};
rabbit.speak = function(line){
  console.log(`The rabbit says '${line}'`)
}
rabbit.speak('I\'m alive.');
#  The rabbit says 'I'm alive'
```
```bash
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how late it\'s getting!'
hungryRabbit.speak("I could use a carrot right now.");
# // → The hungry rabbit says 'I could use a carrot right now.'

speak.call(hungryRabbit, "Burp!");
# // → The hungry rabbit says 'Burp!'
```

# Arrow functions
they are different - they do not use this.

# Prototypes 
```bash
let empty = {};
console.log(empty.toString);
# // → function toString(){…}
console.log(empty.toString());
# // → [object Object]
```

A prototype is another object that used as a fallback source of properties. When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype's prototype, and so on.
> As you guess, Object.getPrototypeOf returns the prototype of an object.
```bash
console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
# // → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
# // → true
```

# Classes
JavaScript's prototype system can be interpreted as a somewhat informal take on an object-oriented concept called classes. A class defines the shape of a type of object- what methods and properties it has. Such an object is called an *instance* of the class. 
So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you also have to make sure it, itself, has the properties that instances of this class are supposed to have. This is what a constructor function does.

```bash
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
```
> By convention, the names of constructors are capitalized so that they can easily be distinguished from other functions.
# Class notation

```bash
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

```
The *class* keyword starts a class declaration, which allows us to define a constructor and a set of methods all in a single place. Any number of methods may be written inside the declaration's braces. 

Class declarations currently allow only *methods* - properties that hold functions - to be added to the prototype. 


```bash
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
# // → hello
```
## Overriding derived properties
When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself. If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object’s own property.

```bash
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
# // → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
# // → long, sharp, and bloody
console.log(blackRabbit.teeth);
# // → small
console.log(Rabbit.prototype.teeth);
# // → small
```

# MAPS
A map (noun) is a data structure that associates values (the keys) with other values.

```bash
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
# // → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
# // → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
# // → Is toString's age known? true
```
# polymorphism

```bash
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
// → a black rabbit
```