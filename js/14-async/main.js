// 비동기 처리 함수
// setTimeout, setInterval, fetch

// setTimeout(콜백, 밀리초)
// 밀리초 뒤에 콜백함수를 실행하는 비동기 처리 함수

console.log("setTimeout 전 코드");

setTimeout(() => {
    console.log("5000ms 후 실행");  
}, 5000);

setTimeout(() => {
    console.log("1000ms 후 실행");  
}, 1000);

setTimeout(() => {
    console.log("2000ms 후 실행");  
}, 2000);

console.log("setTimeout 후 코드");

// 콜백 지옥
// 비동기 처리를 위해 콜백함수를 너무 많이 중첩해서 쓰는 경우
// 코드가 너무 복잡하고 가독성이 떨어짐
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            //...
        });
    });
});
