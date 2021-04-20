const fs = require('fs');
// let input = fs.readFileSync('7568.txt').toString().split('\r\n');

const [n, ...arr] = require("fs").readFileSync("7568.txt").toString().trim().split("\r\n");
const men = arr.map(v => ({weight: v.split(" ")[0], height: v.split(" ")[1], rank: 1}));

// console.log(n)  // 5
// console.log(arr)
console.log(men)

for (let i=0; i < men.length; i++) {
    for (let j=0; j < men.length; j++) {
        if (i !== j && men[i].weight < men[j].weight && men[i].height < men[j].height) men[i].rank++;
    }
}
// console.log(men)
// men.map(i => console.log(i.rank));
console.log(men.map(i => i.rank).join(" "));




// const N = input.shift()
// const input2 = input.slice()
// input2.sort()
// input2.reverse()

// rank = [1]

// let num = 1
// for (let i=1; i < N; i++) {
//     if (Number(input2[i-1].split(' ')[1]) > Number(input2[i].split(' ')[1])) {
//         num += 1
//         rank.push(num)
//     } else {
//         rank.push(num)
//     }
// }

// answer = []
// addNum = 0
// numCheck = 0
// for (let i=1; i < N; i++) {
//     if (rank[i] === rank[i-1] && rank[i] === rank[i+1]) {
//         addNum += 1
//         numCheck = rank[i]
//     } else if (rank[i] === rank[i-1] && rank[i] !== rank[i+1]) {
//         addNum += 1
//         numCheck = rank[i]
//     } else {
//         rank[i] += addNum
//         addNum = 0
//     }
// }
// console.log(rank)

// let result = 0
// for (let i=1; i < N; i++) {
//     result = rank[input.indexOf(input2[i])]
//     console.log(result)
// }
