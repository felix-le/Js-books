function countBs(str) {
  if(!str) return;

  let counter = 0;
  if(str.length > 0){
    for(let char of str){
      if(char === 'B'){
         counter = counter + 1;
      } else{
        continue;
      }
    }
  }
  return counter;
}
let count = countBs('BBC');
console.log(count);