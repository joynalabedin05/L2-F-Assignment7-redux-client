import { useSelector } from "react-redux";
import { useGetAllVolunteerQuery } from "../redux/api/baseApi";


const AllVolunteer = () => {
    const {darkMode} = useSelector((store)=>store.theme);
    const {data, isLoading} = useGetAllVolunteerQuery();
    if(isLoading){
        return <p>Loading..</p>
    }

    return (
        <div className="w-3/4 mx-auto  my-10 rounded-md">
            <h1 className="text-sky-700 text-4xl text-center">Meet All Our Volunteers :</h1>
            <div className={`w-3/4 mx-auto my-10 ${darkMode ? "bg-black text-white" : "bg-gray-50 "} p-4 rounded`}>
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Location</th>                   
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    data?.map((item, i)=><tr key={item._id} className="hover:bg-slate-300">
                    <th>{i + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.location}</td>
                </tr>)
                }
                
                
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllVolunteer;