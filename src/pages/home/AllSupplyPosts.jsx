/* eslint-disable react/prop-types */

import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const AllSupplyPosts = ({item}) => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    })
    const {category, _id , image, title, quantity} =item;
    return (
        <div data-aos="fade-up-right" className=" p-5 bg-gray-100 rounded">
                <img className=' md:w-[350px] md:h-[300px] rounded ' src={image} alt="" />
                <h1 className='mt-5 font-bold text-lg'>Title: {title} </h1>
                <h3 className="my-3">Category: {category} </h3>
                <h3>Quantity: {quantity}</h3>
                <button className="mt-4 bg-blue-500 text-white p-2 rounded"><Link to={`/all-supply/${_id}`} >View Details</Link></button>
            </div>
    );
};

export default AllSupplyPosts;