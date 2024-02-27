import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/api/baseApi";
import { verifyToken } from "../utils/verifyToken";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/authSlice";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
     const {register, handleSubmit} = useForm();
    const [loginUser, ] = useLoginUserMutation();
    const onSubmit = async (data) =>{
        console.log(data);
        const userInfo = {
            email: data.email,
            password: data.password,
        }
       
        const res =  await loginUser(userInfo).unwrap();
        // console.log(data);
        console.log(res);
        const user = verifyToken(res.token);
        // console.log(user);
        
        dispatch(setUser({user: user, token: res.token}));
        alert('user login successgully');     
        navigate("/");

    }
    return (
        <div className="w-2/4 mx-auto mt-20 bg-slate-300 p-10 rounded">
            <h1 className="text-3xl">login here</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
                <label  htmlFor="email">Email </label>
                <input className="border p-3 w-full" type="enail" id="email" {...register('email')}  />
            </div>
            <div className="mt-7">
                <label  htmlFor="password">Password: </label>
                <input className="border p-3 w-full" type="text" id="password" {...register('password')}  />
            </div>
            <button className="bg-blue-500 text-white p-3 mt-8 rounded font-bold " type="submit">Login</button>           
        </form>
        <div className="mt-3">
            <h1>Have any Account? 
                <Link to='/register' className="text-blue-500 text-xl">Register</Link>
            </h1>
        </div>
        </div>
    );
};

export default Login;