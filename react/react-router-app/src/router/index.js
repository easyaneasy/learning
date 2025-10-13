// 페이지 컴포넌트
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

// React Router의 createBrowserRouter
// createBrowerRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import {createBrowserRouter} from "react-router-dom";

// 경로 생성 함수
const router = createBrowserRouter([
    {
        path: "/", // 주소
        Component: Home, // 주소에 해당되는 컴포넌트
    },
    {
        path: "/about",
        Component: About, 
    },
    {
        path: "/profile",
        Component: Profile,
    }
]);

// 라우터 내보내기
export default router;
