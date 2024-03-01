import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useCreateTestimonialMutation } from "../../redux/api/baseApi";

const CreateTestimonial = () => {
    const {darkMode} = useSelector((store)=>store.theme);
    const [createTestimonial]  = useCreateTestimonialMutation();

    const {register, handleSubmit} = useForm();

    const onSubmit =  (data) =>{
        console.log(data);
        const userInfo = {
            name: data.name,
            image: data.image,
            company: data.company,
            comment: data.comment,
        }
        createTestimonial(userInfo);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Testimonial created successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return (
        <div className="md:mt-14">
                <h1 className="text-sky-700 text-3xl text-center ">Please Provide Feedback about the donation:</h1>

            <div className={`md:w-2/4 mx-auto my-10 ${darkMode ? "bg-black text-white" : "bg-gray-50"}  p-4 rounded`}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-3">
                    <label  htmlFor="name">Donor Name </label>
                    <input className="border p-2 w-full" {...register('name')} type="text" id="name" />
                </div>
                <div className="mt-3">
                    <label  htmlFor="image">Image </label>
                    <input className="border p-2 w-full" type="text" id="image" {...register('image')}/>
                </div>
                <div className="mt-3">
                    <label  htmlFor="company">Company </label>
                    <input className="border p-2 w-full" type="text" id="company"  {...register('company')}/>
                </div>
                <div className="mt-3">
                    <label  htmlFor="comment">Comments </label>
                    <input className="border p-2 w-full" type="text" id="comment"  {...register('comment')}/>
                </div>
                <button className="bg-blue-500 text-white p-2 mt-5 rounded font-bold " type="submit">Create Testimonial</button>           
            </form>
            
        </div>
        </div>
        
    );
};

export default CreateTestimonial;