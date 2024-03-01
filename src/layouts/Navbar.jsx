
import { Moon, Sun, User } from "lucide-react";
import { Link } from "react-router-dom";
import food from '../assets/healthyfood.jpg';
import { logout, selectCurrentUser } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/features/themeSlice";

const Navbar = () => {
    const {darkMode} = useSelector((store)=>store.theme);

    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log('logout');
        dispatch(logout());
        // logout();           
    };
    const handleToggleTheme = ()=>{
        dispatch(toggleTheme())
      }
    const user= useSelector(selectCurrentUser);

    const navItems = <>      
        <li><Link to='/'>Home</Link></li>      
        <li><Link to='/supplies'>All Supplys</Link></li>
        <li><Link to='/leaderboard'>Leaderboard</Link></li>
        <li><Link to='/community'>Community</Link></li>
        <li><Link to='/volunteer'>Volunteer</Link></li>
        <li><Link to='/about-us'>About Us</Link></li>
        {
            user ? <div className=' md:flex justify-between items-center '>
                <h1><Link to='/dashboard/supplies'>Dashboard</Link></h1>
                <li className="tooltip mx-1" data-tip={user?.email}>
                    <span><User /></span>
                </li>
                <button onClick={handleLogout}>Logout</button>
            </div> :
                
                <li ><Link to='/login'>Login</Link></li>
        }
           
    </>
    return (
        <div className={`navbar sticky z-30 p-2 top-0 left-0  ${darkMode ? "bg-black text-white" : "bg-slate-50 "} max-w-[1200px] mx-auto p-4`}>
            <div className="navbar-start ">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
                </div>
                <a className=""><img className=" rounded-full w-12 md:w-[60px]" src={food} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                 <button 
            onClick={handleToggleTheme}
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"    
            >             
             {darkMode ?  <Sun/> :  <Moon size={24} /> }             
            </button>
        </div>
        </div>
       
    );
};

export default Navbar;