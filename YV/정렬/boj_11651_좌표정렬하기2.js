const fs = require('fs');

// 공백으로 구분된 input값을 불러온다.
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// 전개연산자를 사용하여 T와 괄호를 구분한다.
const [T, ...arr] = fs.readFileSync('11651.txt').toString().split('\r\n');
// console.log(T)
// console.log(arr)


const lists = []
for (i = 0; i < T; i++) {
  const list = arr[i].split(' ')
  // console.log(list)
  lists.push(list)
}
// console.log(lists)

lists.sort(function(a,b){
  if (parseInt(a[1]) !== parseInt(b[1])) {
    return parseInt(a[1]) - parseInt(b[1])
  } else if (parseInt(a[1]) === parseInt(b[1])) {
    return parseInt(a[0]) - parseInt(b[0])
  }
})
// console.log(lists)

for (j = 0; j < lists.length; j++) {
  console.log(parseInt(lists[j][0]), parseInt(lists[j][1]))
}