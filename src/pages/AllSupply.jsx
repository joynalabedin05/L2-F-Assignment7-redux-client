
import { useGetAllSupplyQuery } from "../redux/api/baseApi";
import AllSupplyPosts from "./home/AllSupplyPosts";

const AllSupply = () => {
    const {data, isLoading} = useGetAllSupplyQuery();
    console.log(data);
        if(isLoading){
            return <p>Loading....</p>
        }
        return (
            <div className="mt-10 md:mt-20 mb-10">

                <div className="text-center">
                    <h1 className="text-4xl font-bold">Supply Posts</h1>
                    <p className="m-3 text-center mt-4 md:w-3/4 md:mx-auto">Supply chains can be complicated. Thats why we have designed our Supply Chain Management (SCM) services to help cater to your logistics complexities. Our local expertise along with our global infrastructure provides you with a strong supply chain backbone that.</p>
                </div> 
             
                <div className=' mt-10 grid md:grid-cols-3 gap-4 md:gap-10'>  
                    {
                        data?.slice(0,9).map((item)=> <AllSupplyPosts item={item} key={item._id}></AllSupplyPosts>)
                    }                                                       
                </div>    
                        
            </div>
        );
};

export default AllSupply;