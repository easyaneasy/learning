import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex min-h-screen items-center'>
            <div className='flex flex-col items-center gap-5'>
                <p className='text-6xl font-bold'>Memo AI</p>
                <p className='text-3xl font-thin'>가장 스마트한 메모</p>
                <p className='text-gray-500'>더 이상 중요한 것을 잊을까 걱정하지 마세요. AI가 당신의 모든 할 일을 가장 쉽고 완벽하게 정리합니다.</p>

                <Link to="" className='text-xl border py-3 px-20'>시작하기</Link>
            </div>
        </div>
        
        <div className='flex flex-col items-center px-6 py-20 bg-gray-100 w-full'>
            <p className='text-4xl font-bold mb-20'>주요 기능</p>
            <div className='flex flex-row gap-8 w-full'>
                <div className='flex flex-col flex-1 items-center p-10'>
                    <p className='text-5xl mb-5'>🤖</p>
                    <p className='text-2xl mb-5'>AI 자연어 처리</p>
                    <p className='text-gray-500 text-center'>자연어를 입력하면 AI가 자동으로 구조화된 메모로 변환합니다.</p>
                </div>
                <div className='flex flex-col flex-1 items-center p-10'>
                    <p className='text-5xl mb-5'>📝</p>
                    <p className='text-2xl mb-5'>스마트 메모 생성</p>
                    <p className='text-gray-500 text-center'>AI가 당신의 메모를 분석해 단순히 텍스트로 바꾸는 것을 넘어 보다 더 스마트한 메모로 만들어 드립니다.</p>
                </div>
                <div className='flex flex-col flex-1 items-center p-10'>
                    <p className='text-5xl mb-5'>📊</p>
                    <p className='text-2xl mb-5'>효율적인 관리</p>
                    <p className='text-gray-500 text-center'>메모 목록에서 보다 편리하게 메모를 관리할 수 있습니다.</p>
                </div>
            </div>

            <p className='text-4xl font-bold mt-20 mb-20'>사용 방법</p>
            <div className='flex flex-row gap-12 w-full'>
                <div className='flex flex-col flex-1 items-center p-10'>
                    <p className='text-5xl mb-5'>1</p>
                    <p className='text-2xl mb-5'>자연어로 입력</p>
                    <p className='text-gray-500 text-center'>자연스러운 문장으로 메모를 입력합니다.</p>
                </div>
                <div className='flex flex-col flex-1 items-center p-10'>
                    <p className='text-5xl mb-5'>2</p>
                    <p className='text-2xl mb-5'>AI가 구조화</p>
                    <p className='text-gray-500 text-center'>AI가 당신의 메모를 분석합니다.</p>
                </div>
                <div className='flex flex-col flex-1 items-center p-10'>
                    <p className='text-5xl mb-5'>3</p>
                    <p className='text-2xl mb-5'>메모로 저장</p>
                    <p className='text-gray-500 text-center'>저장된 메모를 확인하고 관리할 수 있습니다.</p>
                </div>
            </div>
        </div>

        <div className='w-full bg-gray-200 py-10 flex justify-center'>
            <p>ⓒ 2025. eae All rights reserved.</p>
        </div>
    </div>
  )
}
