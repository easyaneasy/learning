// 모듈을 불러오기
// import / from

// from : 어디서 불러올 것이냐
// import : 무엇을 불러올 것이냐
import {add, multiply, substract, devide, PI} from './math.js';

console.log(add(1, 2));
console.log(substract(4, 1));
console.log(multiply(3, 5));
console.log(devide(4, 2));

console.log(PI);

// 하나만 불러오기 (default export)
// 하나만 불러올 경우에는 함수명을 바꿔도 상관없다.
// 원래는 add 함수인데 Plus로 불러옴

// 대표성을 띈다는 특징
//import Plus from "./calculator.js";
//console.log(Plus(1, 2));

import calculator from "./calculator.js";

console.log(calculator);
console.log(calculator.add(1,2));



