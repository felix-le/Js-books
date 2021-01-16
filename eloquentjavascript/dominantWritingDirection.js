

//THIS IS A FUNCTION GIVEN IN CHAPTER 5 OF ELOQUENT JAVASCRIPT 
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;   //Javascripts some() function iterates over the "ranges" property (which iteself is an array) in object script of array SCRIPTS. If the characterScript() input, which should be a character code produced by .codePointAt() is >= the first number and less than the second number it immediately exits and returns the script object.
    })) {
      return script;
    }
  } 
  return null;
}

//var x = "Hello".codePointAt(0);
//console.log(characterScript(x));
//console.log(x);
//
//var y = "漢字".codePointAt(0);
//console.log(characterScript(y));
//console.log(y);
//
//var emoji = "👌".codePointAt(0);
//console.log(characterScript(emoji));
//console.log(emoji);


// THIS IS THE SECOND FUNCTION GIVEN IN THE CHAPTER

function countBy(items, groupName) {
  let counts = [];
  for (let i of items) { 
    let name = groupName(i); // this becomes groupName(i){return i>4}
    let known = counts.findIndex(c => c.name == name); //findIndex iterates over array "counts" using function(c){return c.name == name} which looks for object's "name" property and asks if it equals result of groupName function (true or false). If it doesn't match or the array's length is 0 it returns -1. If it matches it returns the index number of that object.
    if (known == -1) {
      counts.push({name, count: 1}); //adds new object to counts array with name equal to result of groupName function
    } else {
      counts[known].count++; //adds 1 to count property in object matching the index stored in known which resulted from findIndex
    } 
  }
   
  return counts; 
}

//console.log(countBy([1,2,4,6,8,9,10], n => n > 4));

//console.log(countBy("Hello", char => {
//    let script = characterScript(char.codePointAt(0));
//    //console.log(script);
//    return script ? script.direction : "none";
//    }));
 
//THIS IS THE SOLUTION TO THE DOMINANT WRITING DIRECTION EXERCISE

function dominantDirection(text) {
  let counted = countBy(text, i => { //iterates through each letter of the text and creates an array with the name "ltr", "rtl", or "ttb" or adds to the counter of said array.
    let script = characterScript(i.codePointAt(0)); //characterScript input is Unicode of letter "i" which gets iterated over by this being inside the countBy function. It then stores the Object in script variable or returns false if there is no Object containing the input.
    //console.log(script);
    return script ? script.direction : "none"; //Uses ternary to either return "none" which is then filtered out, or it returns the script direction (lts, rtl, or ttb) which is then output to the countBy function.
    })
  .filter(({name}) => name != "none"); //filters out objects whose name property is "none"
  
  console.log(counted);
  if (counted.length == 0) return "ltr"; //this would mean that characterScript output false or null for all characters, which means only things like !&%^%$#/.,]';   ~|?' were typed.
  
  return counted.reduce((a, b) => a.count > b.count ? a : b).name; //reduce iterates over the counted variable which contains arrays. It initializes with a(accumulator) as the first array. Then compares the "count" properties of that array and the next  array, and returns the greater one. Then repeats. When finished we return the array.name
  
}

console.log(dominantDirection("Hey, مساء الخير, ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ")); 
//console.log(dominantDirection("Hello!")); 
//console.log(dominantDirection("ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ")); //this appears vertical if page is formatted with certain CSS

