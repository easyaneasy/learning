import { useSelector } from "react-redux"
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../store/authSlice"
import { useDispatch } from "react-redux";

// 로그인을 했다면
// 로그아웃 버튼과 사용자 정보를 출력
// 정상적으로 로그인을 했을 때 사용자 정보는 전역 상태 token에 저장된 상황

export default function Profile() {
    const dispatch = useDispatch();
    function handleLogout(){
        dispatch(logout());
    }

    // 전역상태 token
    const token = useSelector((state) => state.auth.token);
    // 토큰 복호화 코드
    // const decodeToken = jwtDecode(token);

    // 로그인 검증 로직
    // 사용자 정보 관리 상태
    const [decodeToken, setDecodeToken] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if(token){
            // 토큰 복호화
            setDecodeToken(jwtDecode(token));
        }else{
            // 로그인 상태가 아니면 로그인 페이지로 이동
            // navigate("/login");
        }
    }, [token]);

    return (
        <div>
            <div>{token ? token : "로그인이 필요합니다"}</div>
            <div>{decodeToken ? `이메일: ${decodeToken.email}` : "로그인이 필요합니다"}</div>
            <div>
                <button onClick={() => {
                    handleLogout();
                }}>로그아웃</button>
            </div>
        </div>
    )
}
