import React from 'react'
import { useRef, useEffect } from "react";
import ChatMessage from './ChatMessage';
import MemoConfirmCard from './MemoConfirmCard'

export default function MessageList({ messages, pendingMemo, onMemoConfirm, onMemoCancel }) {
    const messagesEndRef = useRef(null);
    // 메세지가 추가될 때마다 자동 스크롤
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, pendingMemo]);


    return (
        <div>
            <div className='flex justify-center mt-20'>
                {/* 메시지가 없을 때 */}
                {messages.length === 0 && !pendingMemo && (
                    <div className="flex flex-col items-center text-center">
                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-semibold'>AI 메모 생성기</p>
                            <p>자연어로 할 일을 입력하면 AI가 자동으로 메모를 생성합니다.</p>
                        </div>
                        <div className='flex flex-col mt-10 gap-3 bg-gray-50 py-3 w-60'>
                            <p className='text-xl font-medium'>예시</p>
                            <p className='text-sm'>"내일 오후 3시에 회의 준비하기"</p>
                            <p className='text-sm'>"다음 주까지 프로젝트 보고서 작성"</p>
                            <p className='text-sm'>"금요일에 병원 예약하기"</p>
                        </div>
                    </div>
                )}
            </div>

            {/* 메시지 리스트 */}
            {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg}/>
            ))}

            {/* 메모 확인 카드 (pendingMemo가 있을 때만 표시) */}
            {pendingMemo && (
                <MemoConfirmCard 
                    memo={pendingMemo} 
                    onConfirm={onMemoConfirm}
                    onCancel={onMemoCancel}
                />
            )}

            {/* 자동 스크롤을 위한 참조 요소 */}
            <div ref={messagesEndRef} />
        
    </div>
    )
}
