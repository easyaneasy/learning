// this 키워드

// 일반 함수에서의 this 키워드
// 전역(global) 객체(object)를 나타낸다
// 일반 함수에서의 this 키워드는 의미가 없다
function func(){
    console.log("함수");
    console.log(this);
}
//func();

// 중괄호로 표현되는 자료형
// 객체의 특징 key-value 속성으로 구성
// 함수도 value가 될 수 있음. 이러한 함수를 메서드라고 한다
// 즉 객체에 포함된 함수는 메서드라고 한다.

const obj = {
    name: "홍길동",
    age: 20,
    // 함수 이름이 없다 -> 함수 표현식
    
    func: function(){
        console.log(this);
        // 여기서 this는 객체 obj와 동일하다
    },
};

obj.func(); //{ name: '홍길동', age: 20, func: [Function: func] }

// 외부에서 데이터를 받아오는 방식
const user = {
    name: "홍길동",
    age: 20,
    greet: function(name){
        console.log(`Hello ${name}`);
    }
};
user.greet("홍길동");

// 내부에 있는 데이터를 활용하는 방식
const user1 = {
    name: "홍길동",
    age: 20,
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
};
user1.greet();

// 화살표 함수로 표현한 메서드는 함수 선언식(표현식, function 키워드를 사용한 함수)작동 방식이 다르다

const user2 = {
    name: "홍길동",
    age: 20,
    greet: () => {
        console.log(this);
    },
};
user2.greet(); // 화살표 함수로 표현한 메서드 결과  : {}
console.log(this); // 함수가 아닌곳에서 실행한 this : {}

const user3 = {
    name: "홍길동",
    age: 20,
    greet: function(){
        // function 키워드 메서드 내부의 화살표 함수의 this
        const arrowFunc = ()  => {
            console.log(this); // { name: '홍길동', age: 20, greet: [Function: greet] }
        };
        arrowFunc();
    },
};
user3.greet();