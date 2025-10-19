import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';

export default function RootLayout() {
    const token = useSelector((state) => state.auth.token);
    const isLogin = !!token;
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
    }

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
                        {!isLogin ? (
                            <>
                                <NavLink to="/login" className='bg-blue-100 px-5 py-2 rounded text-blue-600'>로그인</NavLink>
                                <NavLink to="/signup" className='bg-blue-600 px-5 py-2 rounded text-white'>회원가입</NavLink>
                            </> 
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className='bg-gray-200 px-5 py-2 rounded cursor-pointer'
                                >
                                    로그아웃
                                </button>
                        )}
                    </div>
                </nav>
            </div>
            <Outlet className="flex-1"></Outlet>
        </div>
  )
}
