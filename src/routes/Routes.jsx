import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Login from "../page/login/Login/Login";
import Reg from "../page/login/reg/Reg";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        children: [
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Reg></Reg>
            }
        ]
        

        
    }
])

export default router;