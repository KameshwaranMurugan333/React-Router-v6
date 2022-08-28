import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const Login = (props) => {

    // const history = useHistory();

    // const navigateToHome = () => {
    //     if (history.location.state.from) {
    //         history.push(history.location.state.from);
    //     } else {
    //         history.push(AppRoutes.home)
    //     }
    // }

    // const navigateToHomeWithState = () => {
    //     history.push({
    //         pathname: AppRoutes.home,
    //         state: {
    //             name: "kamesh",
    //             age: 25,
    //             role: "Technical Lead"
    //         }
    //     })
    // }

    // const login = () => {
    //     localStorage.setItem("auth_token", "token");
    //     navigateToHome();
    // }

    // React.useEffect(() => {
    //     if (localStorage.getItem("auth_token")) {
    //         navigateToHome();
    //     }
    // }, []);

    return <div>
        <p>I am Login Screen</p>
        <Link to={AppRoutes.home}> Go to Home </Link><br />
        <Link to={"/profile/2/3"}> Go to view </Link><br />

        {/* <button onClick={navigateToHome} >Go to Home</button><br />
        <button onClick={navigateToHomeWithState} >Go to Home with state</button><br />
        <button onClick={login}>Login</button> */}
    </div>
}