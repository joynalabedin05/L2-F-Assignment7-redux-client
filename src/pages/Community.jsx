import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useCreateCommunityPostMutation, useGetAllCommunityPostQuery } from "../redux/api/baseApi";


const Community = () => {
    const {darkMode} = useSelector((store)=>store.theme);

    const {register, handleSubmit} = useForm();
    const [createCommunityPost] = useCreateCommunityPostMutation();
    const {data, isLoading} = useGetAllCommunityPostQuery();

    if(isLoading){
        return <p>Loading..</p>
    }
    const onSubmit =  (data) =>{
        const communityInfo = {
            name: data.name,
            image: data.image,
            comment: data.comment,
            
        }
        console.log(communityInfo);
        createCommunityPost(communityInfo);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Community posts created successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
    }

    return (
        <div className="my-14">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl text-sky-700">Community Gratitute Wall:</h1>
                <div>
                <button className="mb-5 btn bg-blue-500 hover:bg-slate-700 text-white mt-4" onClick={()=>document.getElementById('my_modal_3').showModal()}>Post Comments</button>
                    <dialog id="my_modal_3" className="modal h-screen">
                    <div className="modal-box w-11/12  max-w-2xl">
                    <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                       
                        <h1 className=" text-3xl  mb-6">Post Comments for the Community Gratitute Wall: </h1>                    
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-4">
                                    <label  htmlFor="name">Name* </label>
                                    <input className="border p-2 w-full"
                                     type="text" placeholder="write your name" id="name" {...register('name')}  />
                                </div>
                                <div className="mt-4">
                                    <label  htmlFor="image">Image* </label>
                                    <input className="border p-2 w-full" 
                                    placeholder="write image url"
                                    type="text" id="image" {...register('image')}  />
                                </div>
                                <div className="mt-4">
                                    <label  htmlFor="comment">Leave a Comment* </label>
                                    <textarea className="border p-2 w-full"
                                    placeholder="write your comment" 
                                     type="text" id="comment" {...register('comment')}  />
                                </div>
                                                          
                                <button  className="bg-blue-500 text-white p-2 mt-5 rounded font-bold " type="submit">Posts Now</button>           
                            </form>                     
                        </div>
                    </dialog>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
                {
                    data?.map(item =><div key={item._id} className={`flex gap-5  ${darkMode ? "bg-black text-white" : "bg-gray-50 "}  p-3 rounded-md`}>
                    <img className="w-1/2 rounded-md" src={item.image} alt="" />
                    <div className="w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-4">{item.name}</h1>
                        <p>{item.comment}... <button className="bg-blue-500 text-white px-1 rounded">see more</button> </p>
                    </div>
                </div>)
                }
                
            </div>
        </div>
    );
};

export default Community;
