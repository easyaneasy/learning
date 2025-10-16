// 인증 관련 페이지 레이아웃
// 로그인 사용자의 접근을 막는다

import { Navigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

export default function AuthLayout() {
     // 전역 상태 token 불러오기
    const token = useSelector((state) => state.auth.token);
   
    // 로그인은 했으면
    if(token){
        // 로그인 경로로 이동
        return <Navigate to="profile" replace></Navigate>;
    }else{
        // 중첩된 자신 컴포넌트 렌더링
        return <Outlet></Outlet>
    }
}
