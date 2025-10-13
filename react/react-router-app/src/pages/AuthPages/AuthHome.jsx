import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthHome() {
  return (
    <div>
        <h1 className='text-2xl font-bold'>인증 홈페이지</h1>
        <div className='flex flex-col gap-4'>
            <Link to="/">홈페이지</Link>
            <Link to="/auth/login">로그인 페이지</Link>
            <Link to="/auth/signup">회원가입 페이지</Link>
        </div>
    </div>
  )
}
