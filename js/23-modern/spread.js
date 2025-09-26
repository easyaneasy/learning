// 객체 스프레드 연산자
const obj1 = {
    name: "홍길동",
    age: 20,
    job: "개발자",
    location: "서울",
    country: "대한민국",
};

// 객체 복사
const obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.location = "대구";
console.log(obj2);
console.log(obj1); // obj2만 수정했는데 obj1도 수정됨

// ... 스프레드 연산자를 활용한 복사
const obj3 = {...obj1}; // obj1의 속성을 펼쳐서 새로운 객체를 생성
console.log(obj3);

// obj3만 수정됨
obj3.name = "고길동";
console.log(obj1);
console.log(obj3);

// 객체의 속성을 수정하면서 새로운 객체를 생성

// 새로운 객체를 생성하고 age 속성을 추가
const obj4 = {...obj1};
obj4.age = 21;

// 편한방법
// 객체를 생성하면서 age 속성 수정
const obj5 = {...obj1, age: 21};
// 없는 속성도 추가할 수 있음
const obj6 = {...obj1, age: 21, planet:"지구"};
console.log(obj6);

// ---------------------------
// 배열 데이터의 스프레드 연산자
let arr1 = [1,2,3,4,5];
let arr2  = arr1; // 배열의 주소를 복사
arr2[0] = 0; // 그래서 arr2를 수정하면 arr1도 바뀜
console.log(arr1);
console.log(arr2);

// 스프레드 연산자를 활용한 복사
// 스프레드 연산자로 새로운 배열을 생성해서 복사
let arr3 = [...arr1];
arr3[0] = 1;
console.log(arr1);
console.log(arr3);

// 스프레드 연산자를 활용한 원소를 추가
let arr4 = [...arr1, 6, 7, 8];
console.log(arr4);

// ------------------------
// 리액트에서는 스프레드 연산자를 어떻게 사용하는가?

// 원소가 객체인 배열
// 객체를 저장한 배열
let objectArr = [{name: "함수", age: 20}];

// 새로운 객체를 추가한 새로운 배열
let newObjectArr = [...objectArr, {name:"영희", age:20}];
objectArr.push({name: "영희", age: 20});

console.log(objectArr);
console.log(newObjectArr);