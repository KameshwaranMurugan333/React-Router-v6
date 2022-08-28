import React from "react";
import { Link, useParams } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const View = (props) => {

    const URLParams = useParams();

    return <div>
        <p>I am View Screen</p>
        <p>URL Params : {JSON.stringify(URLParams, null, 2)}</p>
        <Link to={AppRoutes.home}>Go Back to Home</Link> <br />
        <Link to={AppRoutes.login}>Go to Login</Link>
    </div>
}