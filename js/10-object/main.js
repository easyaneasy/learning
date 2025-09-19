// 객체
// 0개 이상의 속성을 저장하는 자료형
// 속성 = key(이름) + value(값)
// 중괄호 {} 로 생성

// 변수 emptyObject를 선언하고
// 빈 객체를 할당
let emptyObject = {};

// key는 name
// value는 "홍길동" 인
// 속성 -> key: value

// 변수 person1 할당
let person1 = {name: "홍길동"};

// 객체 생성 기본구조
/*
    let object = {
        key1: value1,
        key2: value2,
        key3: value3,
        key4: value4
        // ...
    }
*/

// 객체 속성 접근
// 대괄호 [] 사용
// 객체데이터[key]

// 마침표 . 사용
// 객체데이터.key
// 사용 X

// 변수 person2를 선언하고
// 객체 데이터 할당
/*
    {
        name: "홍길동",
        score: 99,
        pass: true
    }
*/
let person2 = {name: "홍길동", score: 99, pass: true};
// 객체 데이터 person2 에서
// score key에 접근해서 value를 출력
console.log(person2["score"]);

// 객체의 key(이름)에 사용가능한 자료형
// 문자열

// 객체 속성 수정
// 1. 수정할 속성 접근
// 2. value 데이터 재할당
person2["name"] = "장영실";

// 객체 속성 추가
// 1. 추가할 속성(key) 접근
// 2. value 데이터 할당
person2["주소"] = "한국";
console.log(person2);

// 객체 속성 제거
delete person2["주소"];
console.log(person2);

// 객체 함수
// 모든 key를 배열로 반환
let keyArray = Object.keys(person2);
console.log(keyArray);

// 모든 value를 배열로 반환
let valueArray = Object.values(person2);
console.log(valueArray);

// 모든 key, value를 배열로 반환
let keyValueArray = Object.entries(person2);
console.log(keyValueArray);



