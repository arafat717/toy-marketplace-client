/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../AuthProviders/AuthProviders";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContex)
    const location = useLocation();

    if(loading){
        return <progress className="progress progress-error w-56" value="100" max="100"></progress>
    }


    if(user?.email){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;