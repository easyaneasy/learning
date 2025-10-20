import React from 'react'

export default function ChatMessage({message}) {
    // role이 "user"인지 "ai"인지에 따라 스타일 변경
  const isUser = message.role === "user";

  return (
    <div className={`mb-3 ${isUser ? 'flex justify-end' : ''}`}>
      <div className={`inline-block mx-10 px-4 py-3 rounded-lg ${
        isUser 
          ? 'bg-white text-gray-800 shadow-sm border border-gray-200' 
          : 'bg-gray-100 text-gray-800 shadow-sm border border-gray-200'
      }`}>
        <p>
          {message.content}
        </p>
      </div>
    </div>
  );
}
