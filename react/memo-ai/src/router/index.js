import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path: "signup",
                Component: Signup,
            },
            {
                path: "login",
                Component: Login,
            }
        ]
    }
]);

export default router;