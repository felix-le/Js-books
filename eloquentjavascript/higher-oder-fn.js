function greaterThan(n){
  return m => m> n;
}

let greaterThan10 = greaterThan(10)
// console.log(greaterThan10(11))
function noisy(fn){
  return (...args) => {
    console.log('calling with', args)
    let result = fn(...args);
    console.log('calling with',args, 'returned', result)
    return result;
  }
}

// noisy(Math.min)(3,2,1)

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
// 
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}


function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c=>c.name === name);
    if(known === -1){
      counts.push({name, count: 1})
    } else{
      counts[known].count++
    }
  }
  return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], n => n > 1));
// → [{name: false, count: 2}, {name: true, count: 3}]
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

// function textScripts(text){
//   let scripts = countBy(text, char =>{
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.name : 'none';
//   }).filter(({name}) => name !== 'none');

//   let total = scripts.reduce((n, {count})=> n + count, 0);
//   if(total === 0) return 'No script found';

//   return scripts.map(({name, count})=>{
//     return `${Math.round(count*100 / total)}% ${name}`
//   }).join(', ')

// }

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic
