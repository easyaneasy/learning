import React from 'react'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export default function MemoList() {
    const token = useSelector((state) => state.auth.token);
    const [decodedToken, setDecodedToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            // 사용자 정보
            setDecodedToken(jwtDecode(token));
        }else{
            // 토큰이 없으면 login으로 리다이렉트
            navigate("/login");
        }
    }, [token, navigate]);
    
    return (
        <div>MemoList</div>
    )
}
