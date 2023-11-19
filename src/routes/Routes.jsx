import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Home/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PlaceDetail from "../Pages/PlaceDetail/PlaceDetail";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound/NotFound";


const routes = createBrowserRouter([{
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
        {
            path: '/',
            loader: () => fetch('/places.json'),
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/placeDetail/:id',
            element: <PrivateRoute><PlaceDetail /></PrivateRoute>
        }
    ]
}])


export default routes;