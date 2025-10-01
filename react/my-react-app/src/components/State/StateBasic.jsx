// 상태(State)를 사용하기 위한 모듈
import { useState } from "react"

// 리액트 훅(Hook)
// JS 함수와 유사한 개념이지만 함수는 아니다.
// 함수 : 특정 동작을 수행하는 "코드 뭉치"
// 훅 : 리액트에서 특정 동작을 수행하는 "도구"
// useState 훅 : 리액트에서 상태 관리를 수행하는 "도구"

export default function StateBasic() {
  // useState 훅 사용
  // useState 훅은 배열 [ ]을 생성한다.
  // 배열에는 2개의 원소 존재
  // [상태를 저장할 변수, 상태를 설정(변경)할 함수]
  
  // 배열의 구조 분해 할당을 활용
  /**
   * let array = [1, 2]
   * let [one, two, three] = array
   * one // 1
   * two // 2
   */

  // const [one, two] = [상태를 저장할 변수, 상태를 설정(변경)할 함수]
  const [somethingState, setSomethingState] = useState();
  const [something, setSomething] = useState();

  // 문자열 데이터로 관리하는 상태(state)
  // string : 상태를 저장할 변수
  // setString : 상태를 설정(변경)할 함수
  const [string, setString] = useState("초기값");
  // 초기값 : 생성될 때 저장할 첫 값

  // 배열 데이터를 관리하는 상태
  // array : 상태 데이터를 저장하는 변수
  // setArray : 상태 데이터를 설정(변경)할 함수
  const [array, setArray] = useState([1, 2, 3]);

  function handleClick(){
    console.log("상태 변경");

    // 상태 데이터를 변경하는 코드
    // 변경할 데이터를 상태 변경 함수에 전달해야 한다.
    setString("상태 변경");
    // 상태 데이터를 저장한 변수를 직접 수정해서는 안된다.
    // string = "변경" <- 절대안됨
  }

  // 배열에 원소를 추가하는 이벤트
  function handleClick2(){
    // 새로운 배열 데이터를 생성해서
    // 변수 newArray에 할당
    const newArray = [...array, 4];
    // 변수 newArray를 새로운 상태로 변경
    setArray(newArray);
    console.log(newArray);
  }

  return (
    <div>
      {string}
      <button className="border-2" onClick={() => {handleClick();}}>상태 변경</button>

      <hr />

      <button onClick={() => {handleClick2()}}>원소 추가</button>
      {array.map((element) => {
        return <li>{element}</li>
      })}
    </div>
  )
}
