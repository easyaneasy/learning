import React from 'react'
import LoginStatus from './LoginStatus'
import AdminLink from './AdminLink'

export default function Container() {
  return (
    <div>
        {/* 첫 번째 컴포넌트에는 isLogin 속성에 true 전달 */}
        {/* userName 속성의 값으로 "홍길동" 전달 */}
        <LoginStatus isLogin={true} userName="홍길동"></LoginStatus>
        {/* 두 번째 컴포넌트에는 isLogin 속성에 false 전달 */}
        {/* userName 속성의 값으로 "김철수" 전달 */}
        <LoginStatus isLogin={false}></LoginStatus>

        {/* isAdmin 속성에 true */}
        <AdminLink isAdmin={true}></AdminLink>
        {/* isAdmin 속성에 false */}
        <AdminLink isAdmin={false}></AdminLink>
    </div>
  )
}
