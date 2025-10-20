import React from 'react'
import { useState } from 'react';
import MessageList from '../components/MessageList'
import ChatForm from '../components/ChatForm'

import { ai, config } from "../util/genai"

export default function CreateMemo() {
    const [prompt, setPrompt] = useState(""); // 사용자 입력 프롬프트 관리 상태
    const [messages, setMessages] = useState([]); // 사용자 - AI 메세지 관리 상태
    const [pendingMemo, setPendingMemo] = useState(null); // 생성 대기 중인 메모
    const [savedMemos, setSavedMemos] = useState([]); // 저장된 메모 리스트
    const [isLoading, setIsLoading] = useState(false); // AI 요청 후 응답 대기 상태

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(prompt);
        // 프롬프트가 비어있거나 AI 응답을 대기 중이라면 작업 X
        if (isLoading === true || prompt.trim() === "") return;
    
        // 대화 내역 상태를 업데이트
        setMessages((prev) => [...prev, { role: "user", content: prompt }]);
    
        setIsLoading(true); // 요청 시작
        await generateAiMemo(); // AI 메모 분석 함수
        setIsLoading(false); // 요청 종료
    }

    async function generateAiMemo(){
        try{
            const res = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: config,
            });

            // JSON 응답 파싱
            const aiData = JSON.parse(res.text);

            // 사용자 입력 프롬프트 초기화
            setPrompt("");

            // 메모로 분류되었는지 확인
            if (aiData.isMemo) {
                // 메모라면 pendingMemo에 저장 (확인 대기)
                setPendingMemo({
                id: Date.now(),
                ...aiData
                });
            } else {
                // 메모가 아니라면 일반 AI 응답으로 처리
                setMessages((prev) => [
                ...prev, 
                { role: "ai", content: aiData.content || "메모로 저장하기 어려운 내용입니다." }
                ]);
            }
        }catch(error){
            console.error(error);

            // 입력 프롬프트 초기화
            setPrompt("");
        }
    }

     // 메모 생성 확인
    function handleMemoConfirm() {
        if (pendingMemo) {
            // 메모 저장
            setSavedMemos((prev) => [...prev, pendingMemo]);
            
            // 성공 메시지 추가
            setMessages((prev) => [
                ...prev,
                { role: "ai", content: "메모가 저장되었습니다!" }
            ]);
            
            // 대기 중인 메모 초기화
            setPendingMemo(null);
        }
    }

    // 메모 생성 취소
    function handleMemoCancel() {
        // 취소 메시지 추가
        setMessages((prev) => [
            ...prev,
            { role: "ai", content: "메모 저장이 취소되었습니다." }
        ]);

        // 대기 중인 메모 초기화
        setPendingMemo(null);
    }

    return (
        <div>
            {/* 사용자 - AI 대화 내용 + 메모 확인 카드 출력 컴포넌트 */}
            <div className="pb-40">
                <MessageList 
                    messages={messages}
                    pendingMemo={pendingMemo}
                    onMemoConfirm={handleMemoConfirm}
                    onMemoCancel={handleMemoCancel}
                />
            </div>
            

            {/* 사용자의 프롬프트 작성 폼 컴포넌트 */}
            <ChatForm
                prompt={prompt} // 사용자 입력값 관리 상태
                setPrompt={setPrompt} // 사용자 입력값 상태 변경함수
                isLoading={isLoading} // AI 응답 대기 상태
                onSubmit={handleSubmit} // form 요소 제출 이벤트 핸들러 함수
            />
            
        </div>
    )
}
