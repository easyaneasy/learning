// useEffect 불러오기
import { useEffect, useState } from "react"

export default function Basic() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    // useEffect 훅은 데이터를 생성하는 훅은 아니다
    
    useEffect(() => {
        // 콜백함수
        // 화면 렌더링과 관련 없는 일을 한다.
        // API 요청하기, 타이머 시작하기 등
        console.log("의존성 배열이 없는 useEffect");
    })
    useEffect(() => {
        console.log("의존석 배열이 있는데 빈 배열인 useEffect");
    }, [])
    useEffect(() => {
        console.log("의존석 배열에 number 상태가 저장");
    }, [number])
    useEffect(() => {
        console.log("의존석 배열에 number2 상태가 저장");
    }, [number2])

    useEffect(()=>{
        return () => {
            // 정리 함수
            // 컴포넌트가 사라질 때 실행되는 함수
        }
    })

  return (
    <div>
        <button onClick={() => {setNumber(number + 1)}}>{number}</button>
        <hr />
        <button onClick={() => {setNumber2(number2 + 1)}}>{number2}</button>
    </div>
  )
}
