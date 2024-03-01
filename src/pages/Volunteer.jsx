
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateVolunteerMutation } from "../redux/api/baseApi";
import Swal from "sweetalert2";
const Volunteer = () => {
    const {darkMode} = useSelector((store)=>store.theme);

    const [createVolunteer]  = useCreateVolunteerMutation();
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();

    const onSubmit =  (data) =>{
        console.log(data);
        const userInfo = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            location: data.location,
        }
        createVolunteer(userInfo);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Register as Volunteer successfully",
            showConfirmButton: false,
            timer: 1500
          });
        navigate('/about-us');
    }
    return (
        <div className="m-1 mt-5 md:mt-14">
                <h1 className="text-sky-700 text-3xl md:text-4xl text-center ">Register as Volunteer here :</h1>

            <div className={`md:w-2/4 mx-auto my-5 md:my-10 ${darkMode ? "bg-black text-white" : "bg-gray-50"}  p-4 rounded`}>
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