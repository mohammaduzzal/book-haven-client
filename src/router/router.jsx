import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import BorrowedBooks from "../pages/BorrowedBooks";
import AuthLayout from "../mainLayout/AuthLayout";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import UpdateBook from "../components/UpdateBook";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allBooks',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path: '/addBook',
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path: '/borrowedBooks',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path: '/update-book/:id',
                element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>
            },
        ]
        
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path: '/auth/signin',
                element: <Signin></Signin>
            },
            {
                path: '/auth/signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default router;