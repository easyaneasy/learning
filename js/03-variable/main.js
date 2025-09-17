// 변수에 데이터를 할당(assign O, save X)

// 변수명 = 할당할 데이터 ;
// = : 할당 연산자
// "Hello World" 데이터를 저장한 공간의 이름이 message
// 변수 message에 "Hello World"를 할당
message = "Hello World";
console.log(message);

// 변수 선언과 할당
// 선언과 할당은 분리 가능
//message2;
message2 = "Hello JS";


// 선언의 방식 2개 (원래는 3개)

// let
// 데이터의 재할당 가능
// 변수 message3에 "Hello variable"을 할당
let message3 = "Hello variable";

// 변수 message3에 "Hello let variable"을 재할당
message3 = "Hello let variable";
// 재할당시 let을 붙이지 않는 이유 : let을 붙이면 선언이 된다.
// let 키워드는 재선언은 불가능

// let 변수 message4를 선언
let message4;
// let message4; // / 오류남 재선언 불가

// const
// 데이터의 재할당이 불가능(중요) -> 개발에서는 '상수'라고 표현
// const 변수 message5를 선언하고, "Hello const" 할당
const message5= "Hello const";
//message5 = "Hello world"; // 오류남 재할당 불가

// let VS const
// let : 변하는 데이터를 저장하는 변수 선언 방식
// const : 변하면 안되는 데이터를 저장하는 변수 선언 방식


// 변수 이름 짓기
// 대소문자 구분하기 때문에 두 변수는 다른 변수
let message6;
let MESSAGE6;

// 카멜 케이스 적용 전
let hellomessage;

// 카멜 케이스 적용 후 
let helloMessage;

// 의미 없는 변수명
let a = 1;
// 의미 있는 변수명
let number1 = 1;

// 템플릿 리터럴
// 문자열 사이에 변수를 삽입해서 문자열을 생성하는 방법
// 1. 문자열을 백틱으로 표현
// 2. 변수 삽입 위치에 기호${변수}를 사용
let name = "이지안"
let greet = `안녕하세요 ${name} 입니다.`;
console.log(greet);








