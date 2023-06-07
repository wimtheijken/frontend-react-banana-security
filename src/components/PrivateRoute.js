import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute( { isAuth, children } ) {
    console.log(isAuth)
    return (
        isAuth === true ? children : <Navigate to='/'/>
    );
}

export default PrivateRoute;