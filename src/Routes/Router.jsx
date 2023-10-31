import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddProduct from "../Pages/Dashboard/AddProduct";
import Title from "../Components/Title";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <span>Error element</span>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-magician-server-site.vercel.app/services/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboardLayout',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboardLayout',
                element: <Title>Dashboard</Title>
            },
            {
                path: '/dashboardLayout/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboardLayout/updateProduct',
                element: <p>Updta products</p>
            },
            {
                path: '/dashboardLayout/addCategory',
                element: <p>add Category</p>
            },
            {
                path: '/dashboardLayout/updateCategory',
                element: <p>update category</p>
            },
        ]
    }
])

export default Router;