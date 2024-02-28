import { Link, useLoaderData } from "react-router-dom";


const SingleSupply = () => {
    const {category, _id , image, title, quantity, description } = useLoaderData();
    return (
        <div className=" p-5 bg-gray-100 rounded-lg my-10 md:w-2/4 md:mx-auto ">
                <img className=' w-full h-[350px]  rounded-md ' src={image} alt="" />
                <div className="w-3/4 mx-auto px-3 mt-5">
                <h1 className='mt-5 font-semi-bold text-3xl'>Title: <span className='font-normal'>{title}</span> </h1>
                <h3 className="my-3 font-bold">Category: <span className='font-normal'>{category}</span> </h3>
                <h3 className='font-bold'>Quantity: <span className='font-normal'>{quantity}</span></h3>
                <h3 className='font-bold mt-3'>Description: <span className='font-normal'>{description}</span></h3>
                
                {/* <button className="mt-4 bg-blue-500 text-white p-2 rounded"><Link to={`/all-supply/${_id}`} >Donate Now</Link></button> */}
                <button className="btn bg-blue-500 hover:bg-slate-700 text-white mt-4" onClick={()=>document.getElementById('my_modal_3').showModal()}>Donate Now</button>
                    <dialog id="my_modal_3" className="modal h-screen">
                    <div className="modal-box w-11/12  max-w-2xl">
                    <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                        <h3 className="font-bold text-lg">Single Supply items!</h3>
                        <p className="mt-4 mb-10">Please click dashboard chart button to go to dashboard single supply items to show pieCharts. </p>
                        <button className="bg-blue-400 text-white p-3 rounded"><Link to={`/dashboard/${_id}`}>Dashboard Chart</Link></button>
                        <div className="modal-action">
                        
                        </div>
                    </div>
                    </dialog>
                    </div>
            </div>
    );
};

export default SingleSupply;