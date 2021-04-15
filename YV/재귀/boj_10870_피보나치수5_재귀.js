const fs = require('fs');

// 공백으로 구분된 input값을 불러온다.
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('10870.txt').toString();

var sum = 0

function fibonacci(input) {
  if (parseInt(input) === 0 || parseInt(input) === 1) {
    return parseInt(input)
  } else {
    return fibonacci(parseInt(input)-1) + fibonacci(parseInt(input)-2)
  }
}

console.log(fibonacci(input))