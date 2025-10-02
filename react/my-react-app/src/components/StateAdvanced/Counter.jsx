import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1); // 0 + 1 -> count = 1
    setCount(count + 1); // 0 + 1 -> count = 1
    setCount(count + 1); // 0 + 1 -> count = 1
    setCount(count + 1); // 0 + 1 -> count = 1
  };

  function handleIncrementFunctional() {
    // prevCount = 0 시작
    setCount((prevCount) => prevCount + 1); // 0 + 1 -> count = 1
    // prevCount = 1
    setCount((prevCount) => prevCount + 1); // 1 + 1 -> count = 2
    // prevCount = 2
    setCount((prevCount) => prevCount + 1); // 2 + 1 -> count = 3
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button className="border" onClick={handleIncrement}>
        상태 변경의 비동기성
      </button>
      <button className="border" onClick={handleIncrementFunctional}>
        함수형 업데이트
      </button>
    </div>
  );
}
