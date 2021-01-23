function arrayToList(arr) {
  return arr.reverse().reduce((rest, value) => {
    return {
      value: value,
      rest: rest
    };
  }, null);
}
console.log(arrayToList([10, 20]));
console.log(arrayToList([10, 20, 30]));
// { value: 10, rest: { value: 20, rest: null } }
// { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }