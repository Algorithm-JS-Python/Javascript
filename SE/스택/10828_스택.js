const fs = require('fs');
const [n, ...arr] = require("fs").readFileSync("10828.txt").toString().trim().split("\r\n");

stack = []

pushLen = arr[0].length - 1

for (let i=0; i < n; i++) {
    if (arr[i].split(' ')[0] === 'push') {
        stack.push(Number(arr[i].split(' ')[1]))
    } else if (arr[i] === 'pop') {
        if (stack.length > 0) {
            console.log(stack.pop())
        } else {
            console.log(-1)
        }
    } else if (arr[i] === 'size') {
        console.log(stack.length)
    } else if (arr[i] === 'empty') {
        if (stack.length === 0) {
            console.log(1)
        } else {
            console.log(0)
        }
    } else if (arr[i] === 'top'){
        if (stack.length > 0) {
            let a = stack.length - 1
            console.log(stack[a])
        } else {
            console.log(-1)
        }
    }
}

