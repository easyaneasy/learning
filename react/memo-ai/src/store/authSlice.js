// 엑세스 토큰 상태 관리
// 로그인, 회원가입, 로그아웃 같은 비동기 처리

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { isAxiosError } from 'axios'

// 로그인 요청을 보낼 인증 서버에 대한 정보
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 회원가입 비동기 처리
const signup = createAsyncThunk(
    "auth/signup",
    // 비동기 처리 함수
    async (data, {rejectWithValue}) => { // 매개변수 data : 액션의 페이로드
        // 회원가입 로직 코드
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
);

// 로그인 비동기 처리
const login = createAsyncThunk(
    "auth/login",
    // 비동기 처리 함수
    async (data, { rejectWithValue }) => {
        // 로그인 로직 코드
        try{
            const config = {
                url: `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    apikey: SUPABASE_ANON_KEY,
                },
                data: {
                    // 로그인 정보
                    email: data.email,
                    password: data.password,
                },
            };
            const res = await axios(config);
            return res.data;
        }catch(error) {
            if (isAxiosError(error) && error.response) {
                if (error.response.status === 400) {
                    const userFacingError = "아이디 또는 비밀번호가 유효하지 않습니다.";
                    return rejectWithValue(userFacingError);
                }
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue("로그인 중 알 수 없는 네트워크 오류가 발생했습니다.");
        }
    }
)

// 로그아웃 비동기 처리
const logout = createAsyncThunk(
    "auth/logout",
    async (_, {rejectWithValue, getState}) => {
        try{
            const config = {
                url: `${SUPABASE_URL}/auth/v1/logout`,
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    apikey: SUPABASE_ANON_KEY,
                    // 사용자 인증 정보(토큰)
                    Authorization: `Bearer ${getState().auth.token}`,
                },
            };
            const res = await axios(config);
            return res.data;
        }catch(error){
            return rejectWithValue(error.response.data);
        }
    }
)

// 비동기 처리 3개의 상태 : 대기, 성공, 실패

const loadTokenFromStorage = () => {
    try {
        const token = localStorage.getItem("authToken");
        return token ? token : null;
    } catch (e) {
        console.error("Local Storage access error", e);
        return null;
    }
};

// 초기 상태
const initialState = {
    token: loadTokenFromStorage(), // 액세스 토큰 관리 상태
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
        },
        clearLoginError: (state) => {
            state.loginError = null;
        }
    },
    // 위에서 정의한 비동기 처리 함수(액션)을 처리할 리듀서
    extraReducers: (builder) => {
        builder.addCase(signup.fulfilled, (state) => {
            // 회원가입 성공
            state.isSignup = true;
        }).addCase(signup.rejected, (state, action) => {
            // 회원가입 실패
            state.error = action.payload;
        }).addCase(login.fulfilled, (state, action) => {
            // 로그인 성공
            state.token = action.payload["access_token"];
            localStorage.setItem("authToken", action.payload["access_token"]);
            console.log("로그인 성공");
        }).addCase(login.rejected, (state, action) => {
            // 로그인 실패
            state.loginError = action.payload;
        }).addCase(logout.fulfilled, (state) => {
            // 로그아웃 성공
            state.token = null;
            localStorage.removeItem("authToken");
            console.log("로그아웃 성공 토큰 상태:", state.token);
        })
    }
});

export const { resetIsSignup, clearLoginError } = authSlice.actions;
export default authSlice.reducer;
export { signup, login, logout };