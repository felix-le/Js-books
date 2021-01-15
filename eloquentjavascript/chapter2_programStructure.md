# Expressions and statements

A fragment of code that produces a value is called an expression.

If an expression corresponds to a sentence fragment, a JS statement corresponds to a full sentence. A program is a list of statements.

A statement could display something on the screen or it could change the internal state of the machine in a way that will affect the statements that come after it.

>> Side effects;

## Bindings

To catch and hold values, JS provides a thing called a binding, or variable:
```bash
let caught = 5 * 5;

# let (keyword) indicates that this sentence is going to define a binding.
# After a binding has been defined, its name can be used as an expression.
let ten = 10;
console.log(ten * ten);
# // → 100

```

When a binding points at a value, that does not mean it is tied to that value forever. the = operator can be used at anytime on existing bindings to disconnect them from their current value and them point to a new one.
```bash
let mood = "light";
console.log(mood);
# // → light
mood = "dark";
console.log(mood);
# // → dark
```
>> Bindings do not contain values; they grasp them - tow bindings can refer to the same value.

### Bindings names can be any word (except for keywords)

### The environment
The collection of bindings and their values that exist at a given time is called the environment.

### Functions

A lot of values provided in the default environment have the type function. A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program.

## Return Values

- Showing a dialog box or writing text to the screen is a side effect. 
- Functions may also produce values, in which case they don't need to have a side effect to be useful. it is said **return that value**

### Control flow

When your program contains more than one statement, the statements are executed as if they are a story, from top to bottom. 

### Conditional execution

In the simple case, we want some code to be executed if, and only if, a certain condition holds.

{a block}

### while and do loops
```bash 
let result = 1;
let counter = 0;

while(counter <10){
  result = result * 2;
  counter += 1;
}

console.log(result);
# 1024
```

### Indenting code
The role of this indentation inside blocks is to make the structure of the code stand out.

## For loops

## Dispatching on a value with switch

```bash
  switch(prompt('Hello, what is the weather like')){
    case 'rainy':
      console.log('rain')
      break;
    case 'sunny':
      console.log('rain')
      break;
    default:
      console.log('unknown weather type!')
      break;
  }
```

# SUMMARY
You now know that a program is built out of statements, which themselves sometimes contain more statements. Statements tend to contain expressions, which themselves can be built out of smaller expressions.

Putting statements after one another gives you a program that is executed from top to bottom. You can introduce disturbances in the flow of control by using conditional (if, else, and switch) and looping (while, do, and for) statements.

Bindings can be used to file pieces of data under a name, and they are useful for tracking state in your program. The environment is the set of bindings that are defined. JavaScript systems always put a number of useful standard bindings into your environment.

Functions are special values that encapsulate a piece of program. You can invoke them by writing functionName(argument1, argument2). Such a function call is an expression and may produce a value.
