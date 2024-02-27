
import {motion} from 'framer-motion'

const parent = {
    hidden : {opacity: 0, scale:0, x: 0, },
    visible : {opacity: 1,
        scale: 1,
        x:[0,50, -100,0],
        // y:[0,50, -100,0], 
        // rotate:[0,300, -300,0], 
    transition: {
        ease: 'linear',
        transition: {
            duration: 2,
        },
        duration: 3,
    
        // repeat: Infinity,
    }},
}
const BannerSecttion = () => {
    return (
        <div className="h-screen  bg-[url(https://distancelearning.anglia.ac.uk/wp-content/uploads/2022/03/Return-to-education--1200x800.jpg)] bg-no-repeat  flex  items-center opacity-80 w-full ">
           <motion.div className=" bg-black opacity-80 p-3 md:p-10 rounded"
            variants={parent}
            initial='hidden'
            animate='visible'
           >
          
           <div className=" text-white">
           <h1 className="text-5xl font-bold">Supply Chain  Services</h1>
            <p className="my-5">Maersk provides a range of integrated supply chain and <br /> logistics products designed to meet the needs of all <br />types of businesses. Contact us today and learn how <br />we can help you adapt to the ever-changing demands of <br />global supply chains.</p>
            <button className="bg-sky-500 p-3 rounded hover:bg-black font-bold">Contact Us</button>
           </div>
           
           </motion.div>
        </div>
    );
};

export default BannerSecttion;