import React from 'react'

// submit 이벤트는 form 태그에만 발생한다.
export default function OnSubmit() {
    // submit 이벤트 핸들러 함수
    // 핸들러 함수 이름 규칙 : handle이벤트명
    function handleSubmit(event){
        event.preventDefault(); // form의 기본 동작인 제출(새로고침)을 막는다
        console.log(event);
    }

    return (
    <div>
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" name="email" className="border-2 p-2 m-2"/>
            <input type="password" name="password" className="border-2 p-2 m-2"/>
            <input type="submit" value="제출" className="border-2 p-2 m-2" />
        </form>
    </div>
  )
}