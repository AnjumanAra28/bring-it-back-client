import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";
import { AuthContext } from "../provider/AuthProvider";



const PrivateRoutes = ({children}) => {
 
    const {loading,user} =useContext(AuthContext);
    const location = useLocation()
    
    // runs loading state until user set
    if(loading){
        return <Loading></Loading>
    }
    
    // will show children if user exists
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoutes;