function range(start, end, step) {
  startToEnd = [];
  step = (arguments[2] || 1); // If the step argument wasn't passed, set it equal to 1
  if (start <= end) {
      for (i = start; i <= end; i += step) {
      startToEnd.push(i);
    }
  }
  else {
    for (i = start; i >= end; i += step) {
      startToEnd.push(i);
    }
  }

  return startToEnd;
}
function sum(numbers) {
  total = 0;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(range(5, 2, -1));