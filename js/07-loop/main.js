// 반복문이 없는 코드
// 변수 number를 선언하고 0을 할당
// 변수 number를 3번 출력 === 변수 number가 3 미만일 때까지
// 1씩 증가하면서
let number = 0; // 초기화
console.log(number); // 반복 실행할 코드
number = number + 1; // 증감식

console.log(number);
number = number + 1;

console.log(number);
number = number + 1;

// 반복문으로
// for(초기화; 조건식; 증감식)
for(let number2 = 0; number2 < 3; number2 = number2 + 1){
    console.log(number2); // 반복 실행할 코드
}

// 내가 어떤 코드를 5번 반복
// 가장 기본적인 형태 (정답지)
// i++ : i = i + 1
for(let i = 0; i < 5; i++){
    console.log(`${i}번 출력`);
}

// 숫자를 0부터 3까지 출력
for(let i = 0; i < 4; i++){
    console.log(i);
}

// for -> if 풀어서 표현하자면
let i = 0;
if(i < 1){
    console.log(i);
    i = i + 1;
}

if(i < 2){
    console.log(i);
    i = i + 1;
}

if(i < 3){
    console.log(i);
    i = i + 1;
}

if(i < 4){
    console.log(i);
    i = i + 1;
}

/* 반복문 시작 -> 한번만 초기화 실행 -> 조건식 평가 -> 조건식이 참이라면 -> 코드블럭 실행 -> 증감문 실행
            -> 다시 조건식 평가 -> 조건식이 거짓이라면 반복문 종료
*/


// 반복문 제어
// break -> 반복중단
// continue -> 이후에 나오는 코드 실행X -> 다시 증감문 실행

for(let i = 0; i < 10; i++){
    if(i === 5){
        break; // i가 5가 되는 순간 반복문 종료
    }
    console.log(`i의 값 : ${i}`);
}

for(let i = 0; i < 5; i++){
    if(i === 2){
        continue; // i가 2일때만 코드 실행X
    }
    console.log(`i의 값 : ${i}`);
}

// while : 반복 횟수를 알 수 없을 때 사용
// do ... while : while 반복문과 동일하지만 코드 블록을 무조건 한 번 실행한다



