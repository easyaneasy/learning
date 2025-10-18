import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, clearLoginError } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector((state) => state.auth.token);
    const loginError = useSelector((state) => state.auth.loginError);

    // 로그인 성공
    useEffect(() => {
        if(token) {
            alert("로그인 되었습니다.");
            navigate("/");
        }
    }, [token, navigate]);

    // 로그인 실패
    useEffect(() => {
        if(loginError) {
            alert(loginError);
            dispatch(clearLoginError()); 
        }
        setEmail("");
        setPassword("");
    }, [loginError, dispatch]);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(login({ email, password }));
    }

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center shadow-xl py-10 px-10 gap-5 w-96'>
                <div>
                    <p className='text-3xl'>로그인</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <p className='text-gray-500'>Memo AI 계정이 없다면</p>
                    <Link to="/signup" className='text-blue-600'>회원가입</Link>
                </div>
                <div className='w-full'>
                    <form className='flex flex-col w-full gap-3' onSubmit={handleSubmit}>
                        <input type="email" id='email' placeholder='이메일 주소' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full py-3 px-1 border-1 border-gray-200 rounded'
                            required
                        />
                        <input type="password" id='password' placeholder='비밀번호' value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full py-3 px-1 border-1 border-gray-200 rounded'
                            required
                        />
                        <button type='submit' 
                            className='w-full py-3 px-1 mt-5 bg-blue-600 text-white rounded cursor-pointer font-medium'
                        >
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
