import { Navigate, createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Login from "../page/login/Login/Login";
import Reg from "../page/login/reg/Reg";
import Main from "../Layouts/Main";
import Chef from "../Home/Chef/Chef";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Reg></Reg>
            }
        ]
        

        
    },
    {
        path: 'home',
        element: <Main></Main>

    }
])

export default router;