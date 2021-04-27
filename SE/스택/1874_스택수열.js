const fs = require('fs');
const [n, ...arr] = require("fs").readFileSync("1874.txt").toString().trim().split("\r\n")
console.log(arr)
console.log(n)

let count = 0
for (let i=0; i < n; i++) {
    count += 1
    // if (count )
}

