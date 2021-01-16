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