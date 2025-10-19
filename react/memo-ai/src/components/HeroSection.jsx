import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <div className='flex min-h-screen items-center'>
        <div className='flex flex-col items-center gap-5'>
            <p className='text-6xl font-bold'>Memo AI</p>
            <p className='text-3xl font-thin'>가장 스마트한 메모</p>
            <p className='text-gray-500'>더 이상 중요한 것을 잊을까 걱정하지 마세요. AI가 당신의 모든 할 일을 가장 쉽고 완벽하게 정리합니다.</p>

            <Link to="/create-memo" className='text-xl border py-3 px-20'>시작하기</Link>
        </div>
    </div>
  )
}
