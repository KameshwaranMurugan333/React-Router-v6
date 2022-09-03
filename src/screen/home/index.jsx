import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const Home = (props) => {

    const location = useLocation();
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate(AppRoutes.login);
    }

    return <div>
        <p>I am Home Screen</p>
        <p>My Recived Data: {JSON.stringify(location.state, null, 2)}</p>
        <Link to={AppRoutes.login}>Go Back to Login</Link> <br />
        <Link to={AppRoutes.profile + "?name=kamesh&age=25"}>Go to Profile</Link>
        <button onClick={logOut}>LogOut</button>
    </div>
}