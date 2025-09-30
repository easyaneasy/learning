import React from 'react'

// 구조분해할당을 활용해서 props가 아닌 {isLogin}으로 데이터를 받아오기
export default function LoginStatus({isLogin, userName}) {
  return (
    <div>
        <p>로그인 상태 : {isLogin === true ? "로그인 상태" : "비 로그인 상태"}</p>
        {/* button 태그 내부에 삼항연산자를 사용한다 */}
        {/* isLogin이 true면 로그아웃 false명 로그인 생성 */}
        <button className='border-2'>
            {isLogin === true ? "로그아웃" : "로그인"}
        </button>

        {/* 만약 isLogin이 true라면 userName님 환영합니다 출력 */}
        {/* 만약 isLogin이 false라면 로그인 해주세요 출력 */}
        <p>{isLogin === true ? `${userName}님 환영합니다` : "로그인 해주세요"}</p>

        
    </div>
  )
}
