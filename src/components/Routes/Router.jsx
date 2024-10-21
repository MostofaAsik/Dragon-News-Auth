import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/MainLayout';
import Home from "../Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import NewsDetails from "../../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails /></PrivateRoute>
            },
            {
                path: '/signin',
                element: <SignIn />

            },
            {
                path: '/signup',
                element: <SignUp />

            },
        ]
    },
]);