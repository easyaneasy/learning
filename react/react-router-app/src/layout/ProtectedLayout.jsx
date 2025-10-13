import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedLayout() {
    // 로그인 상태
    const isLogin = false;
    // 로그인 상태가 false면
    // Navigate 컴포넌트로 "/auth/login" 리다이렉트
    if(isLogin === false){
        return <Navigate to="/auth/login"></Navigate>
    }

    return (
        <Outlet></Outlet>
    )
}
