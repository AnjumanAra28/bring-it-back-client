import { Outlet } from "react-router-dom";
import Navbar from "../HomeLayout/Navbar";
import Footer from "../pages/Footer";


const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;