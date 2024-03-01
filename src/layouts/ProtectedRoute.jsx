
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useCurrentToken } from '../redux/features/authSlice';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({children}) => {
    const token = useSelector(useCurrentToken);
   
    if(!token){
        return <Navigate to='/login' replace ={true}></Navigate>

    }
    return children;
       
};

export default ProtectedRoute;