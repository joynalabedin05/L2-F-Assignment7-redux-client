import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const MainLayout = () => {
    return (
        <div className="max-w-[1200px] mx-auto ">
            <Navbar></Navbar>
            <div className="">          
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;