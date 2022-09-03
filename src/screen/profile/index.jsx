import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const Profile = (props) => {

    const [searchparams, setSearchParams] = useSearchParams();

    const changeQuery = () => {
        setSearchParams({ role: "trainer"})
    }

    return <div>
        <p>I am Profile Screen</p>
        <p>Query Params: {JSON.stringify(searchparams.get("name"))}</p>
        <p>Query Params: {JSON.stringify(searchparams.get("age"))}</p>
        <button onClick={changeQuery} >Change Query</button>
        <Link to={AppRoutes.home}>Go Back to Home</Link> <br />
        <Link to={AppRoutes.login}>Go to Login</Link>
    </div>
}