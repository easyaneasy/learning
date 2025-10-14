// React Router의 createBrowserRouter
// createBrowerRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import {createBrowserRouter} from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";
import ProtectedLayout from "../layout/ProtectedLayout";

// 페이지 컴포넌트
import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import Profile from "../pages/DummyPages/Profile";
import PostList from "../pages/DummyPages/PostList";
import PostDetail from "../pages/DummyPages/PostDetail";

import AuthHome from "../pages/AuthPages/AuthHome"
import Login from "../pages/AuthPages/Login"
import Signup from "../pages/AuthPages/Signup"

import PATHS from "../constants/paths";

// 경로 생성 함수
const router = createBrowserRouter([
    // {
    //     path: "/", // 주소
    //     Component: Home, // 주소에 해당되는 컴포넌트
    // },
    // {
    //     path: "/about",
    //     Component: About, 
    // },
    // {
    //     path: "/profile",
    //     Component: Profile,
    // }
    {
        path: PATHS.ROOT.INDEX,
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: PATHS.ROOT.ABOUT,
                Component: About, 
            },
            {
                path: PATHS.ROOT.POSTS,
                Component: PostList,
            },
            {
                path: PATHS.ROOT.POST_DETAIL,
                Component: PostDetail,
            },
            {
                // path 속성 X
                Component: ProtectedLayout,
                // 보호할 경로와 컴포넌트 정의
                children: [
                    {
                        path: PATHS.ROOT.PROFILE,
                        Component: Profile,
                    }
                ]
            }
        ]
    },
    // AuthLayout 경로 설정
    {
        path: PATHS.AUTH.INDEX,
        Component: AuthLayout,
        children: [
            {
                index: true,
                Component: AuthHome,
            },
            {
                path: PATHS.AUTH.LOGIN,
                Component: Login, 
            },
            {
                path: PATHS.AUTH.SIGNUP,
                Component: Signup, 
            }
        ]
    }
    
]);

// 라우터 내보내기
export default router;
