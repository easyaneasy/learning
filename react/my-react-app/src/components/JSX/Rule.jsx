import React from 'react'

// export defult : 모듈 기본 내보내기
// function : 함수
// return : 요소를 반환

// 파일당 하나 존재하는 함수는 컴포넌트를 뜻하는데
// 컴포넌트 함수는 HTML 요소를 반환함
export default function Rule() {
  // DOM API
  // const element = document.createElement("h1")
  // element.textContent("App")
  
  return (
    //<div className="font-bold text-red-500">App</div>
    
    // 규칙1. 1개의 태그만 반환해야한다.
    // div 태그 3개를 반환 -> 오류
    /* <div>App</div>
    <div>App</div>
    <div>App</div>*/

    // 1개의 최상위 태그만 반환한다
    // Fragment 태그로 감싸서 반환한다
    <> 
      <div>1</div>
      <div>2</div>
      <div>3</div>
      
      {/* 규칙2. 모든 태그는 반드시 닫아야한다 */}
      <input />

      {/* 규칙3. 속성명을 카멜케이스로 작성해야한다 */}
      {/* 카멜케이스 : 첫 단어는 소문자, 이후 단어의 시작 글자를 대문자로 */}
      {/* 예시) onclick -> onClick, ... */}
      
      {/* class를 지정하려면 className으로 지정해야한다 */}
      {/* class -> className */}

      <p className='font-bold text-5xl text-red-400'>p 태그{1 + 0}</p>

      {/* 규칙4. style 속성의 값은 객체로 작성한다 */}
      <p style={{fontSize: "3rem", color: "blue"}}>p 태그 2 + 0</p>


    </>
  )
}
