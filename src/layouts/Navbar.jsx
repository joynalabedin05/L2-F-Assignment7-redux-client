// import { FaMale } from "react-icons/fa";
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
        {/* {user?.email} */}
        {
            user ? <div className='md:flex'>
                <h1><Link to='/dashboard/supplies'>Dashboard</Link></h1>
                <li className="tooltip mx-2" data-tip={user?.email}>
                    <span><User /></span>
                </li>
                <button onClick={handleLogout}>Logout</button>
            </div> :
                
                <li ><Link to='/login'>Login</Link></li>
        }
        
        <li>
            <button 
            onClick={handleToggleTheme}
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
      
            >
              
             {darkMode ?  <Sun/> :  <Moon size={24} /> }
              
            </button>
          </li> 

        </>
// w-14 md:w-[80px]
    return (
        <div className={` sticky z-30 p-2 top-0 left-0  ${darkMode ? "bg-black text-white" : "bg-slate-50"}  border`}>
             <div className=" md:flex justify-between items-center  w-full  max-w-[1200px] mx-auto" >
            <div className="">
                <Link to='/'><img className=" rounded-full w-12 md:w-[60px]" src={food} alt="" /></Link>
                
            </div>
            <div className="mr-5 ">
                <ul className="md:flex justify-between items-center gap-3 md:font-semibold">
                    {navItems}
                </ul>
            </div>

        </div>
        </div>
       
    );
};

export default Navbar;