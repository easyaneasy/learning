// 배열 고차 메서드
// 배열 원소에 콜백 함수를 (반복을 통해) 순차적으로 적용하는 메서드

function multiTwo(value) {
  return value * 2;
}

function higherOrderFunction(array, callbackFuntion){
  //배열의 반복
  for(let element of array){
      // 배열 내부 원소에 콜백 함수를 적용
      const result = callbackFuntion(element);

      // 콜백 함수 결과를 출력
      console.log(result);
  }
}

numbers = [1, 2, 3, 4, 5]

// 각 원소에 곱하기 2를 출력
higherOrderFunction(numbers, multiTwo);

console.log("---");
// 각 원소에 더하기 1을 출력
higherOrderFunction(numbers, (value) => { return value + 1});

console.log("---");
// 각 원소를 제곱해서 출력
higherOrderFunction(numbers, (value) => {return value ** 2 ;});

console.log("---");

let numbers2 = [1, 2, 3, 4, 5];

// 배열 고차 메서드 forEach()
// 배열 단순 반복

// 배열 고차 메서드 표현
function 콜백함수(element){
  console.log(element + 1);
}
numbers2.forEach(콜백함수);

console.log("---");

// for..of 표현 
for(let element of numbers2){
  console.log(element + 1);
}

// 배열 고차 메서드는
// 배열의 반복문을 함수화

let numbers3 = [1, 2, 3, 4, 5];

// 인덱스 반복문의 문제
// 1. 조건식 실수
// 2. 인덱스를 통해서 원소에 접근
for(let index = 0; index < numbers3.length; index++){}

// for..of
// 1. 조건식 x
// 2. 원소에 바로 직접 접근
// for..of의 문제점
// 1. 내부 로직 관리의 어려움
// 2. 유연함이 떨어진다
for(let element of numbers3){
  // 내부 로직
}

// 배열 고차 메서드
// 1. 문법이 간결
// 2. 콜백함수로 반복작업을 유연하게 제어
numbers3.forEach(콜백함수);

// ---
console.log("---");

const numbers4 = [1, 2, 3, 4 ,5];

// 각 원소에 + 1을 한 결과를 출력
numbers4.forEach((element) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  console.log(element + 1);
});

console.log("---");

// 각 원소를 2로 나눴을때 나머지가 2인 원소만 출력
numbers4.forEach((element) => {
  if(element % 2 === 0){
      // 배열의 원소에 반복적으로 수행할 로직 코드
      console.log(element);
  }
});

// -------
console.log("---");

// 각 원소에 + 1을 한 결과를 모아서 새로운 배열

// 빈 새로운 배열
const newArray = [];
numbers4.forEach((element) => {
  // 새로운 배열에 1을 저장
  newArray.push(element + 1);
});

console.log(newArray);
console.log("---");

// map() 활용
// map()을 활용해서 원소 +1을 한 데이터를 모은 새로운 배열 생성
const newArray1 = numbers4.map((element) => {
  // 반환값 : 원소 + 1
  return element + 1;
})
console.log(newArray1);

// map()을 활용해서 원소 * 2를 한 데이터를 모은 새로운 배열 생성
const newArray2 = numbers4.map((element) => {
  return element * 2;
});
console.log(newArray2);


// filter

// 원소 중 짝수만 모아서 반환
const numbers5 = [1, 2, 3, 4, 5, 6];

// map() + 내부 로직 조건문(if)
console.log(
  numbers5.map((element) => {
    if (element % 2 === 0) {
      return element;
    } else {
      return undefined;
    }
  })
);

console.log("----");

  // filter
  console.log( numbers5.filter((element) => {
    if (element % 2 === 0) {
      return true;
    }
  })
);

const newArray4 = [];
numbers5.forEach((element) => {
  if (element % 2 === 0) {
    newArray4.push(element + 1);
  }
});
console.log(newArray4);

// 1. 원소 중 짝수인 경우만 모아서 새로운 배열을 만든다. filter()
// 2. 새로운 배열의 원소 + 1 모아서 새로운 배열을 만든다. map()

// reduce()
// 배열의 누적을 반환
const numbers10 = [1, 2, 3, 4, 5];

const result = numbers10.reduce((accValue, currElement) => {
    // accValue : 이전 반복동안 변형된 값을 누적한 데이터
    // currElement : 현재 원소

    // 반환값들이 누적된다.
    //return accValue + 1;
    // accValue + 1
    //---------------
    // 0        + 1 , => accValue = 1
    // 1        + 1 , => accValue = 2
    // 2        + 1 , => accValue = 3
    // 3        + 1 , => accValue = 4
    // 4        + 1 , => accValue = 5

    return accValue + currElement;
    // accValue + currElement
    // ----------------------
    // 0        + currElement(1) , => accValue = 1
    // 1        + currElement(2) , => accValue = 3
    // 3        + currElement(3) , => accValue = 6
    // 6        + currElement(4) , => accValue = 10
    // 10       + currElement(5) , => accValue = 15

});

console.log(result);

// sort()
// 배열을 정렬하는 고차 메서드
// 원소를 2개씩 비교해서 정렬

const numbers11 = [2, 6, 1, 9, 7];
console.log(numbers11);

numbers11.sort((a, b) => {
    // 정렬 규칙
    // 반환값이 양수라면 a가 뒤로 배치
    // 반환값이 음수라면 a가 앞으로 배치
    // 반환값이 0이라면 같다

    // 오름차순
    if(a < b){
        return -1;
    }else if(b < a){
        return 1;
    }else{
        return 0;
    };

    // 오름차순 축약
    return a - b;
    
    // 내림차순 축약
    return b - a;

});

console.log(numbers11);
