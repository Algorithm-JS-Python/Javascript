// const [n, ...arr] = require("fs").readFileSync("9012.txt").toString().trim().split("\r\n");

// const arrList = arr.map(v => v.split(""))

// function pair(list){
//     let check = [];
//     for (let j=0; j < list.length; j++) {
//         if (j === list.length -1 && check.length === 0 && list[j] === ')') {
//             check.push(list[j])
//         } else if (list[j] === '(') {
//             check.push(list[j])
//         } else if (list[j] === ')') {
//             check.pop()
//         } 
//     }
//     if (check.length === 0) {
//         console.log('YES')
//     } else {
//         console.log('NO')
//     }
// }

// for (let i=0; i < n; i++) {
//     pair(arrList[i])
// }


// var arr = new Array(3);
var arr = [];
for (let i = 0; i < 4; i++) {
    arr[i] = i
}
// arr.push(1)
console.log(arr)