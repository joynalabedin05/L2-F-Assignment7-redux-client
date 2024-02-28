import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AboutUs = () => {
    const { darkMode } = useSelector((store) => store.theme);

    useEffect(()=>{
        Aos.init({duration: 2000});
    })
    return (
        <div className="mt-10">
            <div className="text-center">
            <h1 className="text-4xl font-bold ">About Us</h1>
                <p className="my-5">Maersk provides a range of integrated supply chain and <br /> logistics products designed to meet the needs of all types of businesses. Contact us today and learn how.</p>
                
            </div>
        <div className={`bg-gray-50 ${darkMode ? "bg-black text-white" : ""} p-5 my-14 `}>

        <div className="md:flex justify-between">
            <div className="w-1/2 flex items-center">
            <div>
            <h1 className="text-4xl font-bold">What We Do?</h1>
                <p className="my-5">Maersk provides a range of integrated supply chain and <br /> logistics products designed to meet the needs of all <br />types of businesses. Contact us today and learn how <br />we can help you adapt to the ever-changing demands of <br />global supply chains.</p>
                <button className="bg-blue-500 text-white p-3 mt-4 rounded hover:bg-black font-bold">Learn More</button>
            </div>
            </div>
            <div data-aos="fade-right" className="w-1/2 mt-5 md:mt-1">
                <img className="rounded-md w-full" src="https://supply.co/cdn/shop/files/supply-87-2-2_3b3794c9-48b3-4a9c-b31f-642708779e48.jpg?v=1622572339" alt="" />
            </div>
        </div>
        </div>
        </div>
        
    );
};

export default AboutUs;