import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Wired from "../../Pages/Categories/Wired";
import Wireless from "../../Pages/Categories/wireless";
import New from "../../Pages/WhatsNew/New";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/wired',
                element: <Wired/>
            },
            {
                path: '/wireless',
                element: <Wireless/>
            },
            {
                path: '/new',
                element: <New/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
]);

export default router;