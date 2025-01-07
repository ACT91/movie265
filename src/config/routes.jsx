import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Cartoons from "../pages/cartoons";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/cartoons",
        element:<Cartoons/>
    },
    {
        path:"/action",
        element:<Action/> 
    }
])

export default router;