// #
// ##
// ###
// ####
// #####
// ######
// #######

function triangle(n){
  let char = '#';
  if(typeof n !== 'number') return console.log('must be a number');
  if(n < 0 ) return console.log('n<0');
  
  if(n > 0){
    while(char.length <= n){
      console.log(char)
      char = char + '#'
    }
  }

  return char;
}

triangle(7);
triangle('a');
triangle(-10);