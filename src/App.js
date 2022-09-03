import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from "./router/privateRoute";
// import PrivateRoute from "./router/privateRoute";
import { AppRoutes } from "./router/routes";
import { Home, Login, Profile, View } from "./screen";

function App() {
  return <BrowserRouter>
    <Routes>

      {/* Home Route */}
      <Route path={"/"} element={<Login />} />

      {/* Login Route */}
      <Route path={AppRoutes.login} element={<Login />} />

      {/* Home Route */}
      <Route path={AppRoutes.home} element={
        <PrivateRoute path={AppRoutes.home}>
          <Home />
        </PrivateRoute>
      } />

      {/* Profile Route */}
      <Route path={AppRoutes.profile} element={<PrivateRoute path={AppRoutes.profile}>
        <Profile />
      </PrivateRoute>} />

      {/* View Route */}
      <Route path={AppRoutes.view} element={<PrivateRoute path={AppRoutes.view}>
        <View />
      </PrivateRoute>} />

      {/* For unknow/non-defined path */}
      <Route path="*" element={<p>404 - Not Found</p>} />

    </Routes>
  </BrowserRouter>;
}

export default App;
