import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Cartoons from "../pages/cartoons";
import Romance from "../pages/Romance";

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
        path:"/romance",
        element:<Romance/>
    }

])

export default router;