// 엑세스 토큰 상태 관리
// 로그인, 회원가입, 로그아웃 같은 비동기 처리

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

// 로그인 요청을 보낼 인증 서버에 대한 정보
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 회원가입 비동기 처리
const signup = createAsyncThunk(
    "auth/signup",
    // 비동기 처리 함수
    async (data, {rejectWithValue}) => { // 매개변수 data : 액션의 페이로드
        try {
            // config : 요청 정보
            const config = {
                url: `${SUPABASE_URL}/auth/v1/signup`,
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    apikey: SUPABASE_ANON_KEY,
                },
                data: {
                    // 회원가입을 위해 필요한 데이터
                    email: data.email,
                    password: data.password,
                },
            }
            const res = await axios(config);
            return res.data;
        }catch(error){
            return rejectWithValue(error.response.data);
        }
    }
)

// 비동기 처리 3개의 상태 : 대기, 성공, 실패

// 초기 상태
const initialState = {
    token: null, // 액세스 토큰 관리 상태
    error: null, // 에러 여부 관리 상태
    isSignup: false, // 회원가입 성공 여부 관리 상태
}

// 슬라이스 생성 (리듀서 + 액션)
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        // 회원가입 성공 여부를 초기화
        resetIsSignup: (state) => {
            state.isSignup = false;
        }
    },
    // 위에서 정의한 비동기 처리 함수(액션)을 처리할 리듀서
    extraReducers: (builder) => {
        builder.addCase(signup.fulfilled, (state) => {
            // 성공
            state.isSignup = true;
        }).addCase(signup.rejected, (state, action) => {
            // 실패
            state.error = action.payload;
        });
    }
});

export const { resetIsSignup } = authSlice.actions;
export default authSlice.reducer;
export { signup };