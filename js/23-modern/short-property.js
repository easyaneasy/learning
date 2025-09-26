let name = "홍길동";
let age = 20;

// 객체
const user = {
    name: name,
    age: age,
};
 console.log(user);

// 단축 속성
// 값으로 사용할 변수가 있어야 사용할 수 있음
// 변수명을 key로 사용할 때
// 변수명과 key가 동일할 때

const user2 = {
    name, // name: name
    age, // age: age
};
console.log(user2);