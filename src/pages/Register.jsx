import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/api/baseApi";


const Register = () => {
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();

    const [registerUser, ] = useRegisterUserMutation();

    const onSubmit =  (data) =>{
        console.log(data);
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
        }
        registerUser(userInfo);
        alert('register user successgully');
        navigate('/login');
    }
    return (
        <div className="w-2/4 mx-auto my-20 bg-slate-300 p-5 rounded">
        <h1 className="text-3xl">Please Register here?</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-3">
            <label  htmlFor="name">UserName </label>
            <input className="border p-2 w-full" {...register('name')} type="text" id="name" />
        </div>
        <div className="mt-3">
            <label  htmlFor="email">Email </label>
            <input className="border p-2 w-full" type="email" id="email" {...register('email')}/>
        </div>
        <div className="mt-3">
            <label  htmlFor="password">Password </label>
            <input className="border p-2 w-full" type="text" id="password"  {...register('password')}/>
        </div>
        <button className="bg-blue-500 text-white p-2 mt-5 rounded font-bold " type="submit">Register</button>           
    </form>
    <div className="mt-3">
        <h1>Already have an Account? 
            <Link to='/login' className="text-blue-500 text-lg"> Login</Link>
        </h1>
    </div>
    </div>
    );
};

export default Register;