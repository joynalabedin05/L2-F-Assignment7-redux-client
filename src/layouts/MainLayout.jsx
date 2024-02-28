import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";


const MainLayout = () => {
    const { darkMode } = useSelector((store) => store.theme);
    return (
        <div className={` min-h-screen w-full ${darkMode ? "bg-black text-white" : ""}`}>
            <Navbar></Navbar>
            <div className="max-w-[1200px] mx-auto"> 
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;