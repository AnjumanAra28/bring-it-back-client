import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../HomeLayout/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddItems from "../pages/AddItems";
import LostAndFound from "../pages/LostAndFound";
import ItemDetails from "../pages/ItemDetails";

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
                element:<AddItems></AddItems>
            },
            {
                path:'/allItems',
                element:<LostAndFound></LostAndFound>
            },
            {
                path:'/items/:id',
                element:<ItemDetails></ItemDetails>
            },

           
        ]
    }
])

export default router;