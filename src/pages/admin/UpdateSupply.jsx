import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";


const UpdateSupply = () => {
    const { register, handleSubmit,  } = useForm();
    const {_id, title, description, category,quantity} = useLoaderData();
    const onSubmit = (data )=> {
    console.log(data)       
    const { title, category, quantity, description } = data;
    const newItem = { title, category, quantity, description};
    console.log(newItem);

    fetch(`https://l2-b2-frontend-path-assignment-7-server-starter-pack.vercel.app/api/v1/update-supply/${_id}`,{
        method: 'PUT',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(newItem),
    })
    .then(res=>res.json())
    .then(data=>{
    console.log(data);
    if(data.insertedId){
    alert('data updated successfully')
    }
    })
            
    };
    return (
        <div className="w-1/2 mx-auto">
        <h1 className="text-3xl font-semibold text-center">Update Supply Post: <br /> <span className="text-sm">_id: {_id}</span></h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex mt-5">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Title*</span>
                    </label>
                    <input type="text" defaultValue={title} placeholder="title" {...register("title", { required: true })} className="input input-bordered w-full " />
                </div>                  
            </div>                                         
            <div className="flex">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Quantity*</span>
                    </label>
                    <input type="text" defaultValue={quantity} placeholder="quantity" {...register("quantity", { required: true })} className="input input-bordered w-full " />
                </div>                  
            </div>                                         
            <div className="flex">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Category*</span>
                    </label>
                    <input type="text" defaultValue={category} placeholder="category" {...register("category", { required: true })} className="input input-bordered w-full " />
                </div>                  
            </div>                                         
            <div className="flex">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Description*</span>
                    </label>
                    <input type="text" defaultValue={description} placeholder="description" {...register("description", { required: true })} className="input input-bordered w-full " />
                </div>                  
            </div>                                         
            <input className="btn btn-sm mt-5" type="submit" value="Create Post" />
        </form>
    </div>
    );
};

export default UpdateSupply;