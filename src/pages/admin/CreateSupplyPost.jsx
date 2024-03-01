import { useForm } from "react-hook-form";
const img_hosting_token = import.meta.env.VITE_IMAGE;

const CreateSupplyPost = () => {
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  
    const { register, handleSubmit } = useForm();
     
    const onSubmit = (data )=> {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    // console.log(data,imgURL);
                    const { title, category, quantity, description } = data;
                    const newItem = { title, category, quantity, description, image: imgURL };
                    console.log(newItem);
                    fetch('https://l2-b2-frontend-path-assignment-7-server-starter-pack.vercel.app/api/v1/create-supply',{
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newItem),
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                        if(data.insertedId){
                            alert('data added successfully')
                        }
                        
                    })
                }
            })
    };
    return (
        <div className="md:w-1/2 mx-auto">
            <h1 className="text-3xl font-semibold text-center">Create Supply Post:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex mt-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Title*</span>
                        </label>
                        <input type="text" placeholder="title" {...register("title", { required: true })} className="input input-bordered w-full " />
                    </div>                  
                </div>                                         
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Quantity*</span>
                        </label>
                        <input type="text" placeholder="quantity" {...register("quantity", { required: true })} className="input input-bordered w-full " />
                    </div>                  
                </div>                                         
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <input type="text" placeholder="category" {...register("category", { required: true })} className="input input-bordered w-full " />
                    </div>                  
                </div>                                         
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Description*</span>
                        </label>
                        <input type="text" placeholder="description" {...register("description", { required: true })} className="input input-bordered w-full " />
                    </div>                  
                </div>                                         
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Image*</span>
                    </label>
                    <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm" type="submit" value="Create Post" />
            </form>
        </div>
    );

};

export default CreateSupplyPost;