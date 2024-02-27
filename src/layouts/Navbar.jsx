

import { Link } from "react-router-dom";
import food from '../assets/healthyfood.jpg';
import { logout, selectCurrentUser } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        console.log('logout');
        dispatch(logout());
        // logout();

            
    };
    const user= useSelector(selectCurrentUser);


    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/supplies'>All Supplys</Link></li>
        

        {
            user ? <div className='md:flex'>
                <h1><Link to='/dashboard/supplies'>Dashboard</Link></h1>
                <h1 className="md:mx-3">{user?.email}</h1>
                <button onClick={handleLogout}>Logout</button>
            </div> :
                
                <li ><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="md:flex justify-between items-center rounded   bg-slate-200 md:w-[1200px] z-30 p-2"  >
            <div className="">
                <img className="w-20 md:w-[100px] rounded" src={food} alt="" />
            </div>
            <div className="mr-5 ">
                <ul className="md:flex justify-center items-center gap-3 md:font-bold">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;