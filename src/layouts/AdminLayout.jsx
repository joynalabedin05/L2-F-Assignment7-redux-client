import { Outlet } from "react-router-dom";
import Sidebar from "../pages/admin/Sidebar";


const AdminLayout = () => {
    return (
        <div className="grid grid-cols-12">
            <Sidebar></Sidebar>
            {/* <h1>admin layout</h1> */}
            <div className="col-span-10 m-10">
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default AdminLayout;