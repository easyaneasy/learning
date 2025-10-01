import { useState } from "react";

export default function ObjectState() {
  const [objectState, setObjectState] = useState({
    age: 19,
    name: "홍길동",
  });

  const updateObjectState = () => {
    // ... 연산자로 새로운 객체를 생성해서 변경
    // 수정할 속성만 새로운 값으로 변경
    let newObjectState = {
      ...objectState,
      age: objectState.age + 1,
    };

    setObjectState(newObjectState);
  };

  return (
    <div>
      <p>이름 : {objectState.name}</p>
      <p>나이 : {objectState.age}</p>
      <button
        onClick={() => {
          updateObjectState();
        }}>
        나이 증가
      </button>
    </div>
  );
}
