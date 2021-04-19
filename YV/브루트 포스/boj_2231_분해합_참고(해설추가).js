const num = parseInt(require("fs").readFileSync('2231.txt').toString());
// 입력값 확인하기
console.log(num)
// 문자열로 변환
console.log(num+"")
// 시작값이 될 수 있는 가장 큰 수를 구한다. (자리수 * 9를 활용)
let start = num - (num+"").length*9;
// console.log(start)
// 정답으로 출력할 answer를 생성한다.
let answer = 0;
// 100의 자리 미만일 경우, 자리수 * 9가 num보다 클 수 있으므로(ex.num이 10일 때) 이때의 시작값은 0으로 설정
if (start < 0) start = 0;
// start부터 하나씩 for문을 돌린다.
for (let i=start; i<num; i++) {
    // i를 문자열로 만들고 하나씩 쪼갠다.
    // console.log(i.toString().split(""))
    // 문자열로 만들고 하나씩 쪼갠 값 n을 정수로 치환한다.
    // console.log(i.toString().split("").map(n => parseInt(n)))
    // 정수로 만든 n의 값(i의 각 자리 수의 합을 더한다.)
    // console.log(i.toString().split("").map(n => parseInt(n)).reduce((acc, n) => acc + n))
    // 각 자리 수의 합 + i의 값이 찾고자 하는 num과 일치하면
    // 정답으로 출력할 answer에 해당 i 값을 담고 break를 통해 for문을 종료한다.
    if (i.toString().split("").map(n => parseInt(n)).reduce((acc, n) => acc + n, 0) + i === num) {
        answer = i;
        break;
    }
}
// console.log(answer);