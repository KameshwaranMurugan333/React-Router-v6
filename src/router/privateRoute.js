import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppRoutes } from './routes';

const PrivateRoute = ({ children, ...rest }) => {

    const isLoggedIn = () => {
        if(localStorage.getItem("auth_token")){
            return true;
        }else{
            return false;
        }
    };

    return <Route
        {...rest}
        render={(_) => {
            if (isLoggedIn()) {
                return children
            } else {
                return <Redirect
                    to={{
                        pathname: AppRoutes.login,
                        state: { from: _?.location },
                    }}
                />
            }
        }}
    />
}

export default PrivateRoute;