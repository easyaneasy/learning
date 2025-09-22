// 예외처리

try {
    // try 코드 블록
    // 원래 실행할 코드

    // 오류가 발생할만한 코드 작성
    console.log(number);
} catch (error) {
    // catch 코드 블록
    // try 코드 블록이 오류가 발생할 때 실행할 코드

    // error 매개변수
    // 오류의 정보를 저장하고 있는 객체
    console.log(error.name);
    console.log(error.message);
} finally {
    // finally 코드 블록
    // try ~ catch와 상관없이
    // 무조건 실행되는 코드
    console.log("무조건 실행되는 코드 1");
}

console.log("무조건 실행되는 코드 2");

function errorFunction(){
    try {
        console.log(number);

        return true; // return은 함수를 종료한다
    } catch (error) {
        console.log(error.name);
        console.log(error.message);

        return false; // return은 함수를 종료한다
    } finally {
        // finally는 return에 의해 함수가 종료되어도 실행된다.
        console.log("무조건 실행되는 코드 1");
    }
    console.log("무조건 실행되는 코드 2"); // 실행안됨
}

const result = errorFunction();
//console.log(result);
