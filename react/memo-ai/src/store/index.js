// configureStore 함수
// 리듀서를 받아서 스토어를 생성하는 함수
import { configureStore } from "@reduxjs/toolkit";

// 인증 리듀서 불러오기
import authReducer from './authSlice'

import { persistStore, persistReducer } from "redux-persist";

// 스토어 생성
export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});