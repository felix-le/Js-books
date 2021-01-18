class Temperature{
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);

console.log("🚀 ~ file: temperature.js ~ line 22 ~ temp.fahrenheit", temp.fahrenheit)
temp.fahrenheit = 86;

console.log("🚀 ~ file: temperature.js ~ line 23 ~ temp.celsius", temp.celsius)

console.log("🚀 ~ file: temperature.js ~ line 25 ~ Temperature.fromFahrenheit(100)", Temperature.fromFahrenheit(100))