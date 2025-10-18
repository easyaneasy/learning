import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// signup 액션 : 회원가입 비동기 네트워크 처리 액션
// resetIsSignup 액션 : isSignup 상태를 초기화하는 액션
import { signup, resetIsSignup } from '../store/authSlice'

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isSignup = useSelector((state) => state.auth.isSignup);
    const error = useSelector((state) => state.auth.error);

    // 비밀번호 확인
    function handlePasswordCheckChange(e) {
        const value = e.target.value;
        setPasswordCheck(value);
        setIsPasswordMatch(password === value);
    }
    // 비밀번호 일치 여부 검사
    function handlePasswordChange(e) {
        const value = e.target.value;
        setPassword(value);
        if (passwordCheck !== "") { // passwordCheck가 비어있지 않으면
            setIsPasswordMatch(value === passwordCheck);
       } else {
            setIsPasswordMatch(true); // passwordCheck가 비어있다면 일치 여부는 일단 true로 유지
       }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!isPasswordMatch) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        // 비동기 처리 액션(signup)을 디스패치로 실행
        dispatch(signup({email: email, password: password}));
    }

    useEffect(() => {
        if(isSignup === true) {
            alert("회원가입을 성공했습니다. 메일함을 확인해주세요.");
            navigate("/");
            dispatch(resetIsSignup());
        }
    }, [isSignup, dispatch, navigate]);

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center shadow-xl py-10 px-10 gap-5 w-96'>
                <div>
                    <p className='text-3xl'>회원가입</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <p className='text-gray-500'>이미 계정이 있으신가요?</p>
                    <Link to="/login" className='text-blue-600'>로그인</Link>
                </div>
                <div className='w-full'>
                    <form className='flex flex-col w-full gap-3' onSubmit={handleSubmit}>
                        <input type="email" id='email' placeholder='이메일 주소' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full py-3 px-1 border-1 border-gray-200 rounded'
                            required
                        />
                        <input type="password" id='password' placeholder='비밀번호' value={password}
                            onChange={handlePasswordChange}
                            className='w-full py-3 px-1 border-1 border-gray-200 rounded'
                            required
                        />
                        <input type="password" id='passwordCheck' placeholder='비밀번호 확인' value={passwordCheck}
                            onChange={handlePasswordCheckChange}
                            className={`w-full py-3 px-1 border rounded outline-none ${
                                isPasswordMatch ? 'border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                                : 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            }`}
                            required
                        />
                        <button type='submit' 
                            className='w-full py-3 px-1 mt-5 bg-blue-600 text-white rounded cursor-pointer'
                        >
                            회원가입
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
