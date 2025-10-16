// configureStore 함수
// 리듀서를 받아서 스토어를 생성하는 함수
import { configureStore } from "@reduxjs/toolkit";
// 리듀서 불러오기
import counterReducer from "./counterSlice";
import authReducer from "./authSlice"

// Redux Persist 모듈
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";

// Redux Persist 모듈 불러오기
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

// Persist Reducer
// Persist Reducer 설정 변수
const authPersistConfig = {
    key: "auth",
    storage: storage,
    whiteList: ["token"]
}

// Persist Reducer 생성
const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        auth: persistAuthReducer,
    },
    // middleware 속성 추가
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);