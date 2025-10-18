import React from 'react'
import { Outlet, NavLink} from "react-router-dom";

export default function RootLayout() {
  return (
    <div className='flex flex-col h-screen'>
        {/* 네비게이션바 */}
        <div>
            <nav className='flex p-4 shadow items-center'>
                <div className='flex gap-6 items-center'>
                    <NavLink to="/" className='font-bold text-xl'>Memo AI</NavLink>
                    <NavLink to="" className=''>메모 생성</NavLink>
                    <NavLink to="" className=''>메모 목록</NavLink>
                </div>
                <div className='flex gap-3 items-center ml-auto'>
                    <NavLink to="/login" className='bg-blue-100 px-5 py-2 rounded text-blue-600'>로그인</NavLink>
                    {/* <NavLink className=''>로그아웃</NavLink> */}
                    <NavLink to="/signup" className='bg-blue-600 px-5 py-2 rounded text-white'>회원가입</NavLink>
                </div>
            </nav>
        </div>
        <Outlet className="flex-1"></Outlet>
    </div>
  )
}
