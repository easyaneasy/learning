// AuthLayout과 AuthLayout에 중첩된 페이지 경로 배열을 정의

import AuthLayout from "./../../layout/AuthLayout";

import AuthHome from "./../../pages/AuthPages/AuthHome"
import Login from "./../../pages/AuthPages/Login"
import Signup from "./../../pages/AuthPages/Signup"

// 경로 상수
import PATHS from "../../constants/paths";

const authRouters = [
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
]

export default authRouters;