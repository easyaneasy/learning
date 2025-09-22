// 전역 스코프 : 코드 블럭 밖에서 선언된 변수 (코드 어디에서나 접근이 가능하다.)

let globalVar = "전역 변수";
console.log(globalVar); // 전역 변수

if(true){
    globalVar = "전역 변수 재할당"; // 전역 변수 재할당
    console.log(globalVar);
}

console.log(globalVar); // 재할당된 전역 변수