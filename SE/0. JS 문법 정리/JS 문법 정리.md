## slice

```javascript
// slice 문법
array.slice(start, end)
배열의 start에 해당하는 요소부터, end 바로 전까지 요소를 선택하여 새로운 배열을 만든다.

값이 음수면 마지막 요소를 기준으로 선택
```



ex)

```javascript
test = [1, 2, 3, 4, 5, 6]

test.slice(1, 4)
// 결과: 2, 3, 4

test.slice(2)
// 결과: 3, 4, 5, 6

test.slice(-4, -1)
// 결과: 3, 4, 5
```

<br>



## 결과 가로 출력

방법 1

```javascript
// 결과 가로출력
let space = " "
for (let i = 0; i < result.length; i++) {
    space += result[i] + " ";
}
console.log(space)
```



방법 2

```javascript
const men = [
  { weight: '55', height: '185', rank: 2 },
  { weight: '58', height: '183', rank: 2 },
  { weight: '88', height: '186', rank: 1 },
  { weight: '60', height: '175', rank: 2 },
  { weight: '46', height: '155', rank: 5 }
]

men.map(i => console.log(i.rank));
// 결과 (숫자)
2
2
1
2
5

console.log(men.map(i => i.rank).join(" "));
// 결과 (문자)
// 2 2 1 2 5
```





<br>



## 배열의 깊은 복사

Array.prototype.slice() 를 사용하면 새로운 배열을 반환함

```javascript
var arr1 = [1, 2, 3, 4]; 
var arr2 = arr1.slice(); 

console.log("arr1: ", arr1); 
console.log("arr2: ", arr2); 

arr2[0] = 0; 

console.log("arr1: ", arr1); 
console.log("arr2: ", arr2); 

console.log(arr1 === arr2);
```

```javascript
// 결과
arr1: [ 1, 2, 3, 4 ]
arr2: [ 1, 2, 3, 4 ] 

arr1: [ 1, 2, 3, 4 ] 
arr2: [ 0, 2, 3, 4 ] 

false
```

<br>



## 화살표 함수

> 함수 선언 시 function 키워드와 중괄호를 생략하기 위해 고안된 단축 문법

![image-20210415222700752](C:/Users/sieun/Desktop/p-Javascript/SE/README.assets/image-20210415222700752.png)

<br>



## trim

```javascript
var a = " 가 나 다 라 마 "

a.trim()
console.log(a)
//"가 나 다 라 마"
```

앞과 뒤 쪽의 공백을 제거함

<br>



## 비구조화 할당 (Destructuring-Assignment)

> ECMAScript6(2015)에서 새로 추가된 비구조화 할당(Destructuring Assignment)이란 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식(expression)이다.



### Array

**기존의 배열의 경우**

```javascript
const animalList = ["CAT", "DOG", "TIGER"];
const cat = animalList[0];
const dog = animalList[1];
const tiger = animalList[2];

console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER
```

animalList는 "CAT", "DOG", "TIGER" 값을 가지고 있는 배열이다. 이 배열의 값을 각각 변수에 할당 하려면 위처럼 각각 하나씩 지정해 줘야 한다. 번거로운 작업이며, 코드도 복잡해보이는 단점이 있다.



**비구조화 할당**

```javascript
const [cat, dog, tiger] = ["CAT", "DOG", "TIGER"];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER
```



**전개 연산자(`...`) 사용**

```javascript
const [cat, ...rest] = ["CAT", "DOG", "TIGER"];
console.log(cat); // CAT
console.log(rest); // ["DOG", "TIGER"]
```



### Object

기존 객체의 경우

```javascript
const animals = {
  cat: "CAT",
  dog: "DOG",
  tiger: "TIGER"
};
const cat = animals.cat;
const dog = animals.dog;
const tiger = animals.tiger;

console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER
```



**비구조화 할당**

```javascript
// 변수 이름이랑 키 값을 동일하게 맞출 것

const { cat, dog, tiger } = {
  cat: "CAT",
  dog: "DOG",
  tiger: "TIGER"
};
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER
```



**전개 연산자(`...`) 사용**

```javascript
const { cat, ...rest } = {
  cat: "CAT",
  dog: "DOG",
  tiger: "TIGER"
}
console.log(cat); // CAT
console.log(rest); // {dog: "DOG", tiger: "TIGER"}
```

<br>



## Map

> 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

**기본 형태**

```javascript
배열.map((요소, 인덱스, 배열) => { return 요소 });
```



```javascript
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);
console.log(map1);

// expected output: Array [2, 8, 18, 32]
```



```javascript
const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.map((v) => {
  console.log(v);
  return v;
});
// 콘솔에는 1, 2, 3이 찍힘

oneTwoThree; // [1, 2, 3]
result; // [1, 2, 3]
oneTwoThree === result; // false
```

map을 실행하는 배열과 결과로 나오는 배열이 다른 객체임. 기존 배열을 수정하지 않고 새로운 배열을 만들어냄. 단, 배열 안에 객체가 들어있는 경우, 객체는 공유됨



```javascript
result = oneTwoThree.map((v) => {
  return v + 1;
});
result; // [2, 3, 4]
```



```javascript
result = oneTwoThree.map((v) => {
  if (v % 2) {
    return '홀수';
  }
  return '짝수';
});
result; // ['홀수', '짝수', '홀수']
```

<br>



## reduce

**기본 형태**

```javascript
배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
```



## sort

> js는 compareFunction이 제공되지 않으면 유니코드 포인터 순서로 **문자열**을 비교해서 정렬한다.

```javascript
var arr = [1, 111, 4, 222, 10, 3];
arr.sort();

// 결과: [1, 10, 111, 222, 3, 4]
```

sort 함수의 함정

문자 정렬과 동일하게 정렬할 경우, 아스키 코드 순서로 정렬되기 때문에 실제 숫자의 크기대로 정렬되지 않음.

때문에 sort함수에 정렬 순서를 정의해줘야 함



- 오름차순

```javascript
var arr = [1, 111, 4, 222, 10, 3]; 
arr.sort(function (a, b){ 
    return a-b; 
});

// 결과: [1, 3, 4, 10, 111, 222]
```



- 내림차순

```javascript
var arr = [1, 111, 4, 222, 10, 3]; 
arr.sort(function (a, b){ 
    return b-a;
});

// 결과: [222, 111, 10, 4, 3, 1]
```







