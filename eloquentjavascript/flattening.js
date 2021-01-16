const arrays = [[1, 2, 3], [4, 5], [6]];

const flat = arrays.reduce((a,b)=> {
  return a.concat(b)
})
console.log(flat)
console.log("🚀 ~ file: flattening.js ~ line 2 ~ arrays", arrays)
