// if 조건문의 기본 구조

/*
if(조건식){
    // 조건식이 참이면 실행되는 코드 영역
}
*/

if(5  >= 1){
    console.log("5는 1보다 크다");
}

/*
    if ~ else if 조건문 기본 구조
    if(조건식1){

    }else if(조건식2){
    // 조건식2는 조건식1이 거짓일 때 평가된다.
    }else if(조건식3){
        조건식3은 조건식2가 거짓일 때 평가된다.
    }

    else if는 if와 달리 한번에 많이 쓸 수 있다.
*/

if(5 > 10) {
    console.log("5는 10보다 크다"); // 조건식이 false라 실행 X
}else if(5 > 7){
    console.log("5는 7보다 크다"); // 조건식이 false라 실행 X
}else if(5 > 5){
    console.log("5는 5보다 크다"); // 조건식이 false라 실행 X
}else if(5 > 3){
    console.log("5는 3보다 크다"); // 조건식이 true라 실행 O
}

/*
    if ~ else if ~ else 조건문 기본 구조
    if(조건식){
    
    }else if(조건식){
    
    }else{
        else는 조건식이 없다.
        대신 위의 모든 조건이 거짓이면 실행된다.
        else 아래에는 또 다른 else if가 존재할 수 없다.
    }

    ---
    if(조건식){
    
    }else{
        조건식이 거짓이면 실행
    }
*/

// 변수 number를 선언하고 숫자 1을 할당하는 지시문
let number = 1;

// number가 0보다 크면 "양수"를 콘솔에 출력
// number가 0보다 큰게 아니라면 "음수"를 콘솔에 출력
// if ~ else문 구현

if(number > 0){
    console.log("양수");
}else{
    console.log("음수");
}

// 변수 number2를 선언하고 숫자 0을 할당

// 만약 변수 number2가 0보다 크면, "양수" 출력
// 그런데 만약 변수 number2가 0보다 작으면, "음수" 출력
// 그런데 모두 아니라면 "0" 출력

let number2 = 0;

if(number2 > 0){
    console.log("양수");
}else if(number2 < 0){
    console.log("음수");
}else{
    console.log("0");
}

// 중첩 조건문
// 조건문 내부에 조건문을 중첩하는 조건문

let age = 25;
let isStudent = true;

if (age >= 20) {
  if (isStudent === true) {
    console.log("성인 학생입니다.");
  } else {
    console.log("성인입니다.");
  }
} else {
  if (isStudent === true) {
    console.log("미성년 학생입니다.");
  } else {
    console.log("미성년입니다.");
  }
}


// 변수 score를 선언하고, 숫자 75를 할당한다
// 만약 변수 socre가 90 이상이라면
// 그런데 만약 변수 score가 90 미만 그리고(&&), 80 이상이라면
// 그런데 만약 변수 score가 80 미만 그리고(&&), 70 이상이라면
// 그런데 만약 변수 score가 70 미만 그리고(&&), 60 이상이라면
// 그런데 모두 아니라면

let score = 75;

if(score > 90){

}else if(score < 90 && score > 80){

}else if(score < 80 && score > 70){

}else if(score < 70 && score > 60){

}else{

}

// 삼항 연산자 표현식
// 표현식 : 데이터를 생성하는 코드

// 조건식은 무조건 참(true) / 거짓(false) 데이터 중 하나를 생성
// 조건식 ? 조건식 평가 결과가 참일 때 데이터 : 조건식 평가 결과가 거짓일 때 데이터

const message = 2 > 1 ? "2는 1보다 크다" : "2는 1보다 작다";
console.log(message);

let isLoggined = true;
const user = isLoggined === true ? "회원 사용자 화면" : "비회원 사용자 화면";




