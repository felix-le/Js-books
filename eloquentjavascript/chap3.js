function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
// console.log(twice(5));

let three = multiplier(3);

// → 10

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    console.log("🚀 ~ file: chap3.js ~ line 17 ~ power ~ power(base, exponent - 1)", power(base, exponent - 1))
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8