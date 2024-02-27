import { Link, useLoaderData } from "react-router-dom";


const SingleSupply = () => {
    const {category, _id , image, title, quantity, description } = useLoaderData();
    return (
        <div className=" p-5 bg-gray-100 rounded-lg my-10 md:w-1/2 md:mx-auto text-center">
                <img className=' w-full h-[350px]  rounded-md ' src={image} alt="" />
                <h1 className='mt-5 font-bold text-lg'>Title: {title} </h1>
                <h3 className="my-3">Category: {category} </h3>
                <h3>Quantity: {quantity}</h3>
                <h3 className="mt-2">Description: {description}</h3>
                {/* <button className="mt-4 bg-blue-500 text-white p-2 rounded"><Link to={`/all-supply/${_id}`} >Donate Now</Link></button> */}
                <button className="btn bg-blue-500 hover:bg-slate-700 text-white mt-4" onClick={()=>document.getElementById('my_modal_4').showModal()}>Donate Now</button>
                    <dialog id="my_modal_4" className="modal h-screen">
                    <div className="modal-box w-11/12  max-w-2xl">
                        <h3 className="font-bold text-lg">Single Supply items!</h3>
                        <p className="mt-4 mb-10">Please click dashboard chart button to go to dashboard single supply items to show pieCharts. </p>
                        <button className="bg-blue-400 text-white p-3 rounded"><Link to={`/dashboard/${_id}`}>Dashboard Chart</Link></button>
                        <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Back</button>
                        </form>
                        </div>
                    </div>
                    </dialog>
            </div>
    );
};

export default SingleSupply;