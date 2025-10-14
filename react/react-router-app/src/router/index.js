// React Router의 createBrowserRouter
// createBrowerRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import {createBrowserRouter} from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
// import RootLayout from "../layout/RootLayout";
// import AuthLayout from "../layout/AuthLayout";
// import ProtectedLayout from "../layout/ProtectedLayout";

// 페이지 컴포넌트
// import Home from "../pages/RootPages/Home";
// import About from "../pages/RootPages/About";
// import Profile from "../pages/DummyPages/Profile";
// import PostList from "../pages/DummyPages/PostList";
// import PostDetail from "../pages/DummyPages/PostDetail";

// import AuthHome from "../pages/AuthPages/AuthHome"
// import Login from "../pages/AuthPages/Login"
// import Signup from "../pages/AuthPages/Signup"

// 경로 상수 불러오기
// import PATHS from "../constants/paths";

// RootLayout 관련 경로 배열 불러오기
import rootRouters from "./routes/rootRoutes";

// AuthLayout 관련 경로 배열 불러오기
import authRouters from "./routes/authRoutes";

// NotFound 처리
import NotFound from "../pages/NotFound";

// 경로 생성 함수
const router = createBrowserRouter([
    // RootLayout 관련 경로
    // {
    //     path: PATHS.ROOT.INDEX,
    //     Component: RootLayout,
    //     children: [
    //         {
    //             index: true,
    //             Component: Home,
    //         },
    //         {
    //             path: PATHS.ROOT.ABOUT,
    //             Component: About, 
    //         },
    //         {
    //             path: PATHS.ROOT.POSTS,
    //             Component: PostList,
    //         },
    //         {
    //             path: PATHS.ROOT.POST_DETAIL,
    //             Component: PostDetail,
    //         },
    //         {
    //             // path 속성 X
    //             Component: ProtectedLayout,
    //             // 보호할 경로와 컴포넌트 정의
    //             children: [
    //                 {
    //                     path: PATHS.ROOT.PROFILE,
    //                     Component: Profile,
    //                 }
    //             ]
    //         }
    //     ]
    // },
    ...rootRouters,
    // AuthLayout 경로 설정
    // {
    //     path: PATHS.AUTH.INDEX,
    //     Component: AuthLayout,
    //     children: [
    //         {
    //             index: true,
    //             Component: AuthHome,
    //         },
    //         {
    //             path: PATHS.AUTH.LOGIN,
    //             Component: Login, 
    //         },
    //         {
    //             path: PATHS.AUTH.SIGNUP,
    //             Component: Signup, 
    //         }
    //     ]
    // }
    ...authRouters,
    {
        path: "*", // 모든것에 매핑되는 특수문자
        Component: NotFound,
    }
]);

// 라우터 내보내기
export default router;
