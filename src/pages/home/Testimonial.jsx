import man3 from '../../assets/man222.jpg'
import facebook from '../../assets/facebook.png'
import link from '../../assets/link.png'
import insta from '../../assets/insta.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const Testimonial = () => {
    const { darkMode } = useSelector((store) => store.theme);

    useEffect(()=>{
        Aos.init({duration: 2000});
    })
    return (
        <div className="mt-14">           
                <div className='text-center'>
                    <h1 className="text-4xl font-bold">Testimonial</h1>
                    <p className="mt-4  font-semi-bold"> “The broad range of value added capabilities provided under the SCM services can <br /> help achieve your business objectives with reliability, speed, agility, resilience, cost. <br /> ornare viverra your business objective.,,</p>
                </div>
            <div className="grid md:grid-cols-3 mt-20 mb-10 gap-10 md:gap-5">
                <div  data-aos="fade-left"  className={ `bg-purple-50 p-6 rounded-lg relative ${darkMode ? "bg-black text-white" : ""}`}>
                    <img className='w-20 h-20 rounded-full absolute top-[-50px] left-[150px] border border-white ' src={man3} alt="" />                     
                    <h2 className="font-semibold mt-4">Daniel Black</h2>
                    <p> Chairman of<span className='text-blue-500'> Amazon</span></p>               
                    <p className='mt-4 mb-8 text-sm'>“ broad range of value added capabilities provided under the SCM services can <br /> help achieve your business objectives with reliability, speed, agility, resilience, cost. <br /> ornare viverra your business objective. ”</p>
                    <div className='flex gap-5 '>
                       <img className='w-[40px] rounded-full border border-yellow-500' src={facebook} alt="" /> 
                       <img className='w-[40px] rounded-full border border-yellow-500' src={link} alt="" /> 
                       <img className='w-[40px] rounded-full border border-yellow-500' src={insta} alt="" /> 
                    </div>                 
                </div>             
               
            </div>
            
        </div>
    );
};

export default Testimonial;