/* eslint-disable react/prop-types */

import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const AllSupplyPosts = ({item}) => {
    const { darkMode } = useSelector((store) => store.theme);

    useEffect(()=>{
        Aos.init({duration: 2000});
    })
    const {category, _id , image, title, quantity} =item;
    return (
        <div data-aos="fade-down" className={` p-5  ${darkMode ? "bg-black text-white" : ""} bg-gray-100 rounded`}>
                <img className=' md:w-[350px] md:h-[300px] rounded ' src={image} alt="" />
                <div className='w-3/4 mx-auto px-3 mt-5'>
                <h1 className='mt-5 font-semi-bold text-2xl'>Title: <span className='font-normal'>{title}</span> </h1>
                <h3 className="my-3 font-bold">Category: <span className='font-normal'>{category}</span> </h3>
                <h3 className='font-bold'>Quantity: <span className='font-normal'>{quantity}</span></h3>
                <button className="mt-4 bg-blue-500 text-white p-2 rounded"><Link to={`/all-supply/${_id}`} >View Details</Link></button>
                </div>
            </div>
    );
};

export default AllSupplyPosts;