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
import NotFoundPage from "../pages/NotFoundPage";
import LeaderBoard from "../pages/LeaderBoard";
import Community from "../pages/Community";
import Volunteer from "../pages/Volunteer";
import AllVolunteer from "../pages/AllVolunteer";
import CreateTestimonial from "../pages/admin/CreateTestimonial";
import PieChart from "../pages/admin/PieChart";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/leaderboard',
                element: <LeaderBoard></LeaderBoard>
            },
            {
                path: '/community',
                element: <Community></Community>
            },
            {
                path: '/volunteer',
                element: <Volunteer></Volunteer>
            },          
            {
                path: '/about-us',
                element: <AllVolunteer></AllVolunteer>
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
                path: 'pieChart',
                element: <PieChart></PieChart>
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
                path: 'create-testimonial',
                element: <CreateTestimonial></CreateTestimonial>
            },
            {
                path: 'update-supply/:id',
                element: <UpdateSupply></UpdateSupply>,
                loader: ({params})=>fetch(`http://localhost:5000/api/v1/all-supply/${params.id}`)
            },
        ]
    },
    
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    },
]);
export default router;