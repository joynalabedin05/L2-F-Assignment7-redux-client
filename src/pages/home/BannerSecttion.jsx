
import {motion} from 'framer-motion'

const parent = {
    hidden : {opacity: 0, scale:0, x: 0, },
    visible : {opacity: 1,
        scale: 1,
        x:[0,50, -100,0],
    transition: {
        ease: 'linear',
        transition: {
            duration: 2,
        },
        duration: 3,
    }},
}


const BannerSecttion = () => {
    return (
        <div className="h-[550px] bg-[url(https://www.murphylogistics.com/wp-content/uploads/4700tatelyle2_0027-hero.jpg.webp)] bg-no-repeat opacity-80  w-full flex items-center mb-3 md:mb-14">
           <motion.div className="bg-gray-800 p-3 md:p-10 rounded w-1/2"
            variants={parent}
            initial='hidden'
            animate='visible'
           >         
           <div className=" text-white ">
           <h1 className="text-3xl md:text-5xl font-bold">Supply Chain  Services</h1>
            <p className="my-5">Maersk provides a range of integrated supply chain and  logistics products designed to meet the needs of all types of businesses. Contact us today and learn how we can help you adapt to the ever-changing demands of global supply chains.</p>
            <button className="bg-blue-600 p-3 rounded hover:bg-black font-bold">Contact Us</button>
           </div>          
           </motion.div>
        </div>
    );
};

export default BannerSecttion;