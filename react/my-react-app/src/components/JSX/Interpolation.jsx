import React from 'react'

export default function Interpolation() {
    const number = 0;
    function greet(name){
        return <p className='text-red-400'>저는 {name} 입니다.</p>
    }
  return (
    <div>
        <p>{1 + 1}</p>
        <p>{1 * 1}</p>
        <p>{1 === 1}</p>
        <p>{1 > 2}</p>
        <p>{number}</p>
        <p>{greet("홍길동")}</p>
    </div>
  )
}
