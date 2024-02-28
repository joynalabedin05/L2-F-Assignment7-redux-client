
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useRegisterUserMutation } from "../redux/api/baseApi";
const Volunteer = () => {
    const {darkMode} = useSelector((store)=>store.theme);

    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();

    // const [registerUser, ] = useRegisterUserMutation();

    const onSubmit =  (data) =>{
        console.log(data);
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            phoneNumber: data.phoneNumber,
            location: data.location,
        }
        // registerUser(userInfo);
        alert('register user successgully');
        // navigate('/about-us');
    }
    return (
        <div className="mt-14">
                <h1 className="text-sky-700 text-4xl text-center ">Register as Volunteer here :</h1>

            <div className={`w-2/4 mx-auto my-10 ${darkMode ? "bg-black text-white" : ""} bg-gray-50 p-4 rounded`}>
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
                    <label  htmlFor="phoneNumber">Phone Number </label>
                    <input className="border p-2 w-full" type="number" id="phoneNumber"  {...register('phoneNumber')}/>
                </div>
                <div className="mt-3">
                    <label  htmlFor="location">Location </label>
                    <input className="border p-2 w-full" type="text" id="location"  {...register('location')}/>
                </div>
                <button className="bg-blue-500 text-white p-2 mt-5 rounded font-bold " type="submit">Register here</button>           
            </form>
            
        </div>
        </div>
        
    );
};

export default Volunteer;