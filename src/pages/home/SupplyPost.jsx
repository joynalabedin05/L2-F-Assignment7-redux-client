import { Link } from "react-router-dom";
import { useGetAllSupplyQuery } from "../../redux/api/baseApi";
import AllSupplyPosts from "./AllSupplyPosts";
import { FaArrowRight } from "react-icons/fa";

const SupplyPost = () => {
    const {data, isLoading} = useGetAllSupplyQuery();
    console.log(data);
        if(isLoading){
            return <p>Loading....</p>
        }
    return (
        <div className=" mb-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Supply Posts</h1>
                <p className="text-center mt-4 ">Supply chains can be complicated. Thats why we have designed our <br />Supply Chain Management (SCM) services to help cater to your logistics complexities. Our local <br />expertise along with our global infrastructure provides you with a strong supply chain backbone that.</p>
            </div>                      
            <div className=' mt-10 grid grid-cols-1 md:grid-cols-3 gap-10'>  
            {
                
                data?.slice(0,6).map((item)=><AllSupplyPosts item={item} key={item._id} ></AllSupplyPosts>)
            }
                                                 
            </div> 
            <div className="mx-auto text-end">
            <button className="mt-10 bg-blue-500 text-white px-5 py-2 rounded"><Link to={`/supplies`} >
                <div className="flex justify-center items-center gap-3">
                <p>View All </p>
                <span><FaArrowRight /></span> 
                </div>
                </Link></button>
            </div>             
        </div>
    );
};

export default SupplyPost;