import React from 'react'

export default function MemoConfirmCard({ memo, onConfirm, onCancel }) {
  return (
    <div className="mb-3">
        {/* AI 안내 메시지 */}
        <div className="bg-gray-100 inline-block max-w-[80%] px-4 py-3 rounded-lg mb-3">
            <p className="text-sm text-gray-800">
                사용자의 입력을 처리했습니다. 아래 메모를 생성할까요?
            </p>
        </div>
        
        {/* 메모 확인 카드 */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-md">
            <div className="mb-4">
                {/* 메모 내용 */}
                <p className='text-sm text-gray-500'>할 일 내용</p>
                <p className="font-medium mb-2">
                    {memo.content}
                </p>

                {/* 마감 날짜 */}
                {memo.dueDate && (
                    <div className='mb-2'>
                        <p className="text-gray-500 text-sm">마감 날짜</p>
                        <p className="font-medium">
                            {memo.dueDate}
                        </p>
                    </div>
                )}

                {/* 우선순위 */}
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">우선순위:</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                        memo.priority === 'High' ? 'bg-red-100 text-red-800' :
                        memo.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                    }`}>
                        {memo.priority}
                    </span>
                </div>
            
                {/* 메모 정보 */}
                <div className="space-y-2">
                    {/* 카테고리 */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">카테고리:</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                            memo.category === 'ToDo' ? 'bg-blue-100 text-blue-800' :
                            memo.category === 'Work' ? 'bg-purple-100 text-purple-800' :
                            'bg-green-100 text-green-800'
                        }`}>
                            {memo.category}
                        </span>
                    </div>
                </div>
            </div>
            
            {/* 버튼 영역 */}
            <div className="flex gap-2">
            <button 
                onClick={onConfirm}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded transition text-sm font-medium cursor-pointer"
            >
                생성하기
            </button>
            <button 
                onClick={onCancel}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded transition text-sm font-medium cursor-pointer"
            >
                취소
            </button>
            </div>
        </div>
    </div>
  )
}
