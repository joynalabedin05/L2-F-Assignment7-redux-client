import {  useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUserDonationMutation } from "../../redux/api/baseApi";
import Swal from "sweetalert2";


const SingleSupply = () => {
    const {category, _id , image, title, quantity, description } = useLoaderData();
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();
    const [userDonation] = useUserDonationMutation();
    const onSubmit =  (data) =>{
        const donateInfo = {
            category: data.category,
            quantity: data.quantity,
            
        }
        console.log(donateInfo);

        userDonation(donateInfo);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, donate now!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Donated!",
                text: "You have successfully donated some amount.",
                icon: "success"
              });
            }
          });
        navigate(`/dashboard/${_id}`);
    }

    return (
        <div className="my-14">
            <h1 className="text-center text-3xl text-sky-700 mb-6">Donate for the Food Distribution and Supplies : </h1>
            <div className=" p-3 bg-gray-100 rounded-lg md:w-2/4 md:mx-auto ">
                <img className=' w-full h-[350px]  rounded-md ' src={image} alt="" />
                <div className="w-3/4 mx-auto px-3 mt-5">
                <h1 className='mt-5 font-semi-bold text-3xl'>Title: <span className='font-normal'>{title}</span> </h1>
                <h3 className="my-3 font-bold">Category: <span className='font-normal'>{category}</span> </h3>
                <h3 className='font-bold'>Quantity: <span className='font-normal'>{quantity}</span></h3>
                <h3 className='font-bold mt-3'>Description: <span className='font-normal'>{description}</span></h3>
                
                
                <button className="mb-5 btn bg-blue-500 hover:bg-slate-700 text-white mt-4" onClick={()=>document.getElementById('my_modal_3').showModal()}>Donate Now</button>
                    <dialog id="my_modal_3" className="modal h-screen">
                    <div className="modal-box w-11/12  max-w-2xl">
                    <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                       
                        <h1 className=" text-3xl  mb-6">Donate for the Individual users : </h1>                    
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-4">
                                    <label  htmlFor="category">Category: </label>
                                    <input className="border p-2 w-full" defaultValue={category} type="text" id="category" {...register('category')}  />
                                </div>
                                <div className="mt-4">
                                    <label  htmlFor="quantity">Amount: </label>
                                    <input className="border p-2 w-full" defaultValue={quantity} type="number" id="quantity" {...register('quantity')}  />
                                </div>
                                <button className="bg-blue-500 text-white p-2 mt-5 rounded font-bold " type="submit">Donate Now</button>           
                            </form>                     
                    </div>
                    </dialog>
                </div>
        </div>
        </div>
    );
};

export default SingleSupply;