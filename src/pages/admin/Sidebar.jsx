import { FaHome , FaCartPlus, FaBorderAll } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="bg-purple-500 text-white col-span-2 h-screen sticky top-0 left-0 overflow-auto p-3 md:p-5">
           
        <nav className="flex flex-col gap-3 mt-10">
            <NavLink className="p-3 bg-gray hover:bg-gray-700 hover:text-white rounded-md transition-all flex  items-center gap-2 text-lg" to='/'> 
            <FaHome className="shrink-0" /><span className="truncate">Home</span>
            </NavLink>
            
            <NavLink className="p-3 bg-gray hover:bg-gray-700  hover:text-white rounded-md transition-all flex  items-center gap-2 text-lg" to='/dashboard/supplies'> 
            <FaBorderAll  className="shrink-0"  /> <span className="truncate">All Supply</span>
            </NavLink>
            <NavLink className="p-3 bg-gray hover:bg-gray-700 hover:text-white rounded-md transition-all flex items-center gap-2 text-lg " to='/dashboard/create-supply'> 
            <FaCartPlus className="shrink-0"  />  <span className="truncate">Create Supply</span>
            </NavLink>
            
            
        </nav>
    </aside>
    );
};

export default Sidebar;