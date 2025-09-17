// 형 변환
// 명시적 형 변환 : 개발자가 변환한 것
// 암시적 형 변환 : JS 엔진이 자동으로 변환한 것

// 문자열 명시적 형 변환
// String() 함수 : 문자열로 변환하는 도구
// 함수 : 프로그래밍 언어의 특정 기능을 수행하는 도구

// String(데이터) / String(변수)
console.log(String(123)); // 숫자형 -> 문자열
console.log(String(123) === "123"); // true

// true, undefined, null을 문자열로 형변환하는 코드 작성
String(true);
String(undefined);
String(null);

// 숫자형 명시적 형 변환
// Number() 함수 : 숫자형으로 변환하는 도구
// Number(데이터) / Number(변수);

// 문자열 "123"을 숫자형으로 변환해서 출력하는 코드 작성
console.log(Number("123") === 123); // true

// 만약, 숫자형태가 아닌 문자열을 형변환하면?
console.log(Number("1ab2")); // NaN(Not a Number) 오류
// 숫자의 형태가 아니면 형 변환 불가

// 불리언 명시적 형 변환
// 명시적 데이터 : true / false
// Boolean() 함수 : 불리언으로 변환하는 도구
console.log(Boolean("이지안"));

// 불리언 형 변환 규칙
// 각 자료형마다 최소 1개는 false로 변환
// false가 아닌 데이터는 모두 true로 반환
// false로 변환되는 값 : 0, -0
// 숫자형 -> 불리언 형 변환
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false


// 암시적 형 변환
// 문자열 형 변환
console.log(Boolean("")); // false

// 암시적 불리언 형 변환
// 불리언 데이터가 아닌 데이터에 대한 논리연선(&&, ||, !)

// o --암시적 불리언 형 변환 --> false -- not 연산 --> true
console.log(!0); // true
console.log(!""); // true
console.log(!1); // false





