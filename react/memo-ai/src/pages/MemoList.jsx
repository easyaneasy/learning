import React from 'react'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export default function MemoList() {
    const token = useSelector((state) => state.auth.token);
    const [decodedToken, setDecodedToken] = useState(null);
    const [memos, setMemos] = useState([]);
    const [filter, setFilter] = useState("all");

    const totalCount = memos.length;
    const incompleteCount = memos.filter(m => !m.isCompleted).length;
    const completeCount = memos.filter(m => m.isCompleted).length;
    
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            // 사용자 정보
            setDecodedToken(jwtDecode(token));
        }else{
            // 토큰이 없으면 login으로 리다이렉트
            navigate("/login");
        }

        // 로컬 스토리지 메모 불러오기
        const storedMemos = localStorage.getItem('memos');

        if (storedMemos) {
            try {
                // JSON 문자열을 JavaScript 객체 배열로 변환
                const parsedMemos = JSON.parse(storedMemos);
                setMemos(parsedMemos); // 상태 업데이트
            } catch (error) {
                console.error("로컬 스토리지의 'memos'를 파싱하는 중 오류 발생:", error);
                setMemos([]); // 오류 발생 시 빈 배열로 설정
            }
        }
    }, [token, navigate]);

    // 메모 업데이트
    function updateMemosInStorage(newMemos) {
        setMemos(newMemos);
        localStorage.setItem('memos', JSON.stringify(newMemos));
    };

    // 메모 삭제
    function handleRemoveMemo(id) {
        const newMemos = memos.filter(memo => memo.id !== id);
        updateMemosInStorage(newMemos);
    };

    // 메모 상태 완료로 바꾸기
    function handleToggleComplete(id) {
        const newMemos = memos.map(memo => {
            if (memo.id === id) {
                return { ...memo, isCompleted: !memo.isCompleted }; // 상태 반전
            }
            return memo;
        });

        updateMemosInStorage(newMemos);
    };

    // 필터 변경
    function handleChangeFilter(newFilter) {
        setFilter(newFilter);
    };

    // 필터링된 메모
    const filteredMemos = memos.filter(memo => {
        if(filter === "incomplete"){
            return !memo.isCompleted; // isCompleted가 false
        }else if(filter === "complete"){
            return memo.isCompleted; // isCompleted가 true
        }
        return true;
    })
    
    return (
        <div>
            <div className='flex flex-col max-w-3xl mx-auto p-6 mt-10'>
                <div className='flex gap-2 '>
                    <button 
                        onClick={() => handleChangeFilter("all")} 
                        className='border border-gray-300 py-2 px-3 cursor-pointer'>
                            전체 ({totalCount})
                    </button>
                    <button onClick={() => handleChangeFilter("incomplete")} className='border border-gray-300 py-2 px-3 cursor-pointer'>미완료 ({incompleteCount})</button>
                    <button onClick={() => handleChangeFilter("complete")} className='border border-gray-300 py-2 px-3 cursor-pointer'>완료 ({completeCount})</button>
                </div>

                <div>
                    {memos.length === 0 ? (
                        <div className='text-center mt-10 py-10'>
                            <p>📝</p>
                            <p>아직 메모가 없습니다</p>
                            <p>메모 작성 페이지에서 새로운 메모를 만들어보세요.</p>
                        </div>
                    ) : (
                        <div className='grid gap-4 mt-5'>
                            {filteredMemos.map((memo) => (
                                <div key={memo.id} className='bg-white border border-gray-300 p-6'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p className='text-lg font-semibold mb-2'>{memo.content}</p>
                                            <div className='flex flex-wrap gap-2'>
                                                <p className={`text-xs px-2 py-1 rounded ${
                                                    memo.priority === '높음' ? 'bg-red-100 text-red-800' :
                                                    memo.priority === '중간' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-sky-100 text-sky-800'
                                                }`}>
                                                    {memo.priority}
                                                </p>
                                                <p className={`text-xs px-2 py-1 rounded ${
                                                    memo.isCompleted === false ? "bg-gray-200" :
                                                    "border border-gray-800"
                                                }`}>
                                                    {memo.isCompleted === false ? "미완료" : "완료" }
                                                </p>
                                                <p className={`text-xs px-2 py-1 rounded ${
                                                    memo.category === '할 일' ? 'bg-blue-100 text-blue-800' :
                                                    memo.category === '업무' ? 'bg-purple-100 text-purple-800' :
                                                    'bg-orange-100 text-orange-800'
                                                }`}>
                                                    {memo.category}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={() => handleRemoveMemo(memo.id)} className='text-red-500 cursor-pointer'>삭제</button>
                                        </div>
                                    </div>
                                    
                                    <p className='text-sm mt-3'>마감일: {memo.dueDate}</p>
                                    <p className='text-sm mb-3'>생성일: {memo.createAt}</p>
                                    {memo.isCompleted === false ? (
                                        <button
                                            onClick={() => handleToggleComplete(memo.id)}
                                            className='border border-green-400 bg-green-50 rounded text-sm text-green-600 p-2 cursor-pointer'>
                                                완료로 변경
                                        </button>
                                    ):("")}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>   
        </div>
    )
}
