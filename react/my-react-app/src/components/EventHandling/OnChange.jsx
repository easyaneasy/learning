import React from 'react'

export default function OnChange() {
    // 이벤트 핸들러의 event 객체 : 이벤트 정보를 저장한 객체
    function handleChange(event){
        console.log(event);
        // 이벤트가 발생한 요소의 정보
        console.log(event["target"]);
        // 이벤트가 발생한 입력 요소의 사용자 입력 값
        console.log(event["target"]["value"]);
    }
    
    // 실습 1.
    function handleNumberChange(event){
        // 사용자 입력 값이 10보다 작으면
        // console.log() 사용해서 10보다 작은 수 라고 출력
        const value = event["target"]["value"];
        if(value < 10){
            console.log("10보다 작은 수");
        }
    }
  
    return (
    <div>
        {/* onChange 이벤트 속성 적용 */}
        {/* 이벤트 객체 event는 화살표 함수의 매개변수 */}
        <input 
            type="text" 
            className='border-2 border-amber-400 p-2 m-2'
            onChange={(event) => { handleChange(event); }} 
        />

        {/* 실습 2. */}
        {/* onChange 이벤트 속성에서 이벤트 객체를 전달하면서 handleNumberChange 호출 */}
        <input 
            type="number"
            className='border-2 border-amber-400 p-2 m-2'
            onChange={(event) => {handleNumberChange(event);}} 
        />

    </div>
  )
}
