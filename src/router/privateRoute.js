import React from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes } from './routes';

const PrivateRoute = ({ children, path = "", ...rest }) => {

    const isLoggedIn = () => {
        if (localStorage.getItem("auth_token")) {
            return true;
        } else {
            return false;
        }
    };


    if (isLoggedIn()) {
        return children
    } else {
        return <Navigate
            to={AppRoutes.login}
            state={{ from: path }}
        />
    }

}

export default PrivateRoute;