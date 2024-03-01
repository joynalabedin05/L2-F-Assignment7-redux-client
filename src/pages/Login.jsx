import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/api/baseApi";
import { verifyToken } from "../utils/verifyToken";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/authSlice";
import Swal from "sweetalert2";

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
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Login successfully",
            showConfirmButton: false,
            timer: 1500
          });   
        navigate("/");

    }
    return (
        <div className="mx-5 md:w-2/4 md:mx-auto my-10 md:my-20 bg-slate-300 p-5 rounded">
            <h1 className="text-3xl">Please login here?</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
                <label  htmlFor="email">Email </label>
                <input className="border p-2 w-full" type="email" id="email" {...register('email')}  />
            </div>
            <div className="mt-4">
                <label  htmlFor="password">Password: </label>
                <input className="border p-2 w-full" type="text" id="password" {...register('password')}  />
            </div>
            <button className="bg-blue-500 text-white p-2 mt-5 rounded font-bold " type="submit">Login</button>           
        </form>
        <div className="mt-2">
            <h1>Havent any Account? 
                <Link to='/register' className="text-blue-500 text-xl"> Register</Link>
            </h1>
        </div>
        </div>
    );
};

export default Login;