
import facebook from '../../assets/facebook.png'
import link from '../../assets/link.png'
import insta from '../../assets/insta.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useSelector } from 'react-redux';
import { useGetAllTestimonialQuery } from '../../redux/api/baseApi';

const Testimonial = () => {
    Aos.init({duration: 1000});
    const { darkMode } = useSelector((store) => store.theme);
    const {data, isLoading} = useGetAllTestimonialQuery();
    console.log(data);
    if(isLoading){
        return <p>Loading..</p>
    }
    
    return (
        <div className="mt-8 md:mt-14">           
                <div className='text-center'>
                    <h1 className="text-3xl md:text-4xl font-bold">Testimonial</h1>
                    <p className="m-3 mt-4  font-semi-bold"> “The broad range of value added capabilities provided under the SCM services can <br /> help achieve your business objectives with reliability, speed, agility, resilience, cost. <br /> ornare viverra your business objective.,,</p>
                </div>
            <div className="grid md:grid-cols-3 mt-20 mb-10  gap-10 md:gap-16">
                {
                    data?.map(item=>
                <div key={item._id} data-aos="fade-up" className={ ` p-6 rounded-lg relative ${darkMode ? "bg-black text-white" : "bg-purple-50"}`}>
                    <img className='w-20 h-20 rounded-full absolute top-[-40px] left-[130px] border border-white ' src={item.image} alt="" />                     
                    <h2 className="font-semibold mt-4">{item.name}</h2>
                    <p> Chairman of<span className='text-blue-500'> {item.company}</span></p>               
                    <p className='mt-4 mb-8 text-sm'>“ {item.comment} ”</p>
                    <div className='flex gap-5 '>
                       <img className='w-[40px] rounded-full border border-yellow-500' src={facebook} alt="" /> 
                       <img className='w-[40px] rounded-full border border-yellow-500' src={link} alt="" /> 
                       <img className='w-[40px] rounded-full border border-yellow-500' src={insta} alt="" /> 
                    </div>                 
                </div>      
                )
                }
               
            </div>           
        </div>
    );
};

export default Testimonial;