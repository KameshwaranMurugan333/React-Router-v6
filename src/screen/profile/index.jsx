import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Profile = (props) => {

    const queryParams = useQuery();

    return <div>
        <p>I am Profile Screen</p>
        <p>Query Params: {JSON.stringify(queryParams.get("name"))}</p>
        <Link to={AppRoutes.home}>Go Back to Home</Link> <br />
        <Link to={AppRoutes.login}>Go to Login</Link>
    </div>
}