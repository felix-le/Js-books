# Higher-order functions

functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

```bash
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
# // → true

```

```bash

function unless(test, then){
  if(!test) then();
}
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, n => {
  unless( n % 2 === 1, () =>{
    console.log(n, 'is even')
  })
})
```
```bash
function filter(arr, test){
  let passed = [];
  for (let ele of arr){
    if(test(ele)){
      passed.push(ele)
    }
  }
  return passed;
}
```
## Summarizing with reduce

```bash
function reduce(array, combine, start){
  let current = start;
  for(let ele of array){
    current = combine(current, ele);
  }
  return current
};
```
```
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
```