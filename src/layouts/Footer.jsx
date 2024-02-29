import {  FaEuroSign, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import food from '../assets/healthyfood.jpg';
import { useSelector } from "react-redux";


const Footer = () => {
    const { darkMode } = useSelector((store) => store.theme);

    return (
        <div className={` ${darkMode ? "bg-black text-white" : "bg-gray-100"} p-3 md:px-14 md:py-10`}>
            <div className="grid md:grid-cols-3 lg:grid-cols-5">
            <div>
                <img className="w-[100px] rounded" src={food} alt="" />
            </div>
                <div className="mt-4 md:mt-1">
                    <ul className="flex flex-col">
                        <Link to='/' className="text-sm">Home</Link>
                        <Link to='/all-supply' className="text-sm my-2">All Supply</Link>
                        <Link to='/register' className="text-sm">Register</Link>
                        <Link to='/login' className="text-sm my-2">Login</Link>
                       
                    </ul>
                </div>
               
                <div>
                    <ul className="flex flex-col">
                        <Link to='#' className="text-sm">Product</Link>
                        <Link to='#' className="text-sm my-2">Price</Link>
                        <Link to='#' className="text-sm">Blogs</Link>
                        
                        <Link to='#' className="text-sm my-2">FAQs</Link>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col">
                        <Link to='#' className="text-sm">Support</Link>
                        <Link to='#' className="text-sm my-2">Contact us</Link>
                        <Link to='#' className="text-sm ">Resource</Link>
                        <Link to='#' className="text-sm my-2">Help Center</Link>
                    </ul>
                </div>
                <div className="">
                    <ul className="flex flex-col ">
                        <Link to='#' className="text-sm">Company</Link>
                        <Link to='#' className="text-sm my-2">About Us</Link>
                        <Link to='#' className="text-sm">Press Relese</Link>
                        <Link to='#' className="text-sm my-2">Events</Link>
                       
                    </ul>
                </div>
                             
            </div>
            <div className=" p-5 rounded-md md:flex justify-between mt-10 ">
                <p className="text-sm"> &copy; 2023. All rights reserved.</p>
                <div>
                <ul className=" md:flex  justify-center items-center md:gap-7 md:mr-10">
                        <Link to='#' className="text-sm">Terms</Link>
                        <Link to='#' className="text-sm my-2">Privacy</Link>
                        <Link to='#' className="text-sm">Contact</Link>
                        <Link  to='#' className="text-sm my-2 flex justify-center items-center gap-2"> <FaGlobe /> <span>EN</span></Link>
                        <Link to='#' className="text-sm flex justify-center items-center gap-2"> <FaEuroSign /> EUR </Link>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;