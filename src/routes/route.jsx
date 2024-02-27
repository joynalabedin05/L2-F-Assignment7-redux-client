import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/home/Home";
import AllSupply from "../pages/AllSupply";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLayout from "../layouts/AdminLayout";
import AllSupplies from "../pages/admin/AllSupplies";
import CreateSupplyPost from "../pages/admin/CreateSupplyPost";
import ProtectedRoute from "../layouts/ProtectedRoute";
import UpdateSupply from "../pages/admin/UpdateSupply";
import SingleSupply from "../pages/home/SingleSupply";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },          
            {
                path: '/supplies',
                element: <AllSupply></AllSupply>
            },          
            {
                path: '/all-supply/:id',
                element: <SingleSupply></SingleSupply>,
                loader: ({params})=>fetch(`http://localhost:5000/api/v1/all-supply/${params.id}`)
            },          
        ],
    },
   
    {
        path: '/dashboard',
        element: <ProtectedRoute><AdminLayout></AdminLayout></ProtectedRoute> ,
        children: [
            {
                path: ':id',
                element: <AdminDashboard></AdminDashboard>,
                loader: ({params})=>fetch(`http://localhost:5000/api/v1/all-supply/${params.id}`)
            },
            {
                path: 'supplies',
                element: <AllSupplies></AllSupplies>
            },
            {
                path: 'create-supply',
                element: <CreateSupplyPost></CreateSupplyPost>
            },
            {
                path: 'update-supply/:id',
                element: <UpdateSupply></UpdateSupply>,
                loader: ({params})=>fetch(`http://localhost:5000/api/v1/all-supply/${params.id}`)
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
]);
export default router;