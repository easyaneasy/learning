import React from 'react'

export default function ChatForm({ prompt, setPrompt, isLoading, onSubmit }) {
  return (
    <div className='flex justify-center fixed bottom-0 w-full border border-gray-300 bg-white'>
        <form onSubmit={onSubmit} className='flex flex-shrink-0 p-10'>
            <div className='w-3xl flex justify-between'>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    disabled={isLoading}
                    className='border border-gray-300 w-2xl p-3'
                />
                <input 
                    type="submit" 
                    value="전송"
                    disabled={isLoading || !prompt.trim()}
                    className='border border-gray-300 px-5 cursor-pointer' 
                />
            </div>
            
        </form>
    </div>
  )
}
