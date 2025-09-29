import React from 'react'

export default function OnClick() {

    // 클릭 이벤트 핸들링 함수
    // 관례적으로 핸들링 함수명은 handle이벤트명

    // 매개변수가 없는 함수
    // function handleClick(){
    //     alert("클릭");
    // }

    // 매개변수가 있는 함수
    function handleParamClick(param){
        alert(param);
    }

    function handleClick(){
        alert("클릭");
    }


  return (
    <div>
        {/* 카멜케이스로 이벤트 속성을 작성해야한다 */}
        {/* JSX 보간법 {} 을 활용해서 함수를 호출 */}
        {/* <button 
            className='cursor-pointer border-2 p-2 bg-blue-400 text-white shadow m-1'
            onClick={() => {handleClick();}}>
                화살표 함수 클릭
        </button>

        <button 
            className='cursor-pointer border-2 p-2 bg-green-400 text-white shadow m-1'
            onClick={() => {handleParamClick("Hello World");}}>
                매개변수가 있는 함수 클릭
        </button> */}

        {/* 아래 버튼을 클릭했을때 handleClick()함수가 실행되도록 작성 */}
        <button
            className='border-2'
            onClick={() => {handleClick();}}>
                클릭
        </button>
    </div>
  )
}
