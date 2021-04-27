const fs = require('fs');
// let input = fs.readFileSync('7568.txt').toString().split('\r\n');

const [N, ...arr] = require("fs").readFileSync("11651.txt").toString().trim().split("\r\n");

const input = ['0 4', '1 2', '1 -1', '2 2', '3 3'];

const coordsArr = [];

for (let i = 0; i < N; i++) {
  coordsArr.push(input[i].split(' ').map(strNum => parseInt(strNum)));
}
console.log(coordsArr)

let results = '';
coordsArr
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })
  .forEach(coords => (results += `${coords[0]} ${coords[1]}\n`));

console.log(results);



// const arrList = arr.map(v => ({x: v.split(" ")[0], y: v.split(" ")[1], rank: 1}))

// for (let i=0; i < n; i++) {
//     for (let j=0; j < n; j++) {
//         if (i !== j && arrList[i].y > arrList[j].y) {
//             arrList[i].rank++;
//         }
//     }
// }

// for (let i=0; i < n; i++) {
//     for (let j=0; j < n; j++) {
//         if (i !== j && arrList[i].rank === arrList[j].rank && arrList[i].x > arrList[j].x) {
//             arrList[i].rank++;
//         }
//     }
// }

// console.log(arrList)