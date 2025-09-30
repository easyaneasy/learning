import React from 'react'

// 매개변수  props에 객체의 구조 분해 할당을 적용
// 구조 분해 할당이란 객체의 key와 동일한 변수명에 value를 지정하는 문법
// const {children} = props
export default function Child({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
