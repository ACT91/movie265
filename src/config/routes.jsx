import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Cartoons from "../pages/cartoons";
import Romance from "../pages/Romance";
import Horror from "../pages/horror";
import Action from "../pages/action";

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
        element:<Romance/>},
    {
        path:"/horror",
        element:<Horror/>},
    {
        path:"/action",
        element:<Action/> 
    }

])

export default router;