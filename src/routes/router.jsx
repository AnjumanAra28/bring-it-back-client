import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../HomeLayout/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddItems from "../pages/AddItems";
import LostAndFound from "../pages/LostAndFound";
import ItemDetails from "../pages/ItemDetails";
import MyItems from "../pages/MyItems";
import UpdateItem from "../pages/UpdateItem";
import RecoveredItems from "../pages/RecoveredItems";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addItems',
                element:<PrivateRoutes><AddItems></AddItems></PrivateRoutes>
            },
            {
                path:'/allItems',
                element:<LostAndFound></LostAndFound>
            },
            {
                path:'/items/:id',
                element:<PrivateRoutes><ItemDetails></ItemDetails></PrivateRoutes>
            },
            {
                path:'/myItems/:email',
                element:<PrivateRoutes><MyItems></MyItems></PrivateRoutes>
            },      
            {
                path:'/updateItem/:id',
                element:<PrivateRoutes><UpdateItem></UpdateItem></PrivateRoutes>
            },      
            {
                path:'/recoveredItems',
                element:<PrivateRoutes><RecoveredItems></RecoveredItems></PrivateRoutes>
            },      
        ]
    }
])

export default router;