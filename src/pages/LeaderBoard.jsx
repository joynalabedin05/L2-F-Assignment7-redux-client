import { useSelector } from "react-redux";
import { useGetAllDonationQuery } from "../redux/api/baseApi";

const LeaderBoard = () => {
    const {darkMode} = useSelector((store)=>store.theme);
    const {data, isLoading} = useGetAllDonationQuery();
    console.log(data);
    if(isLoading){
        return <p>Loading..</p>
    }

    return (
        <div className=" my-10 rounded-md">
            <h1 className="text-sky-700 text-4xl text-center"> Leader Board :</h1>
            <h1 className="text-center mt-3 text-lg">Leader Board that showcase the top donors who have made significant contributions to the relief efforts.</h1>
            <div className={`overflow-x-auto p-10 ${darkMode ? "bg-black text-white" : "bg-gray-100"}  mt-8`}>
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Amount(BDT)</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    data?.map((item, i)=><tr key={item._id} className="hover:bg-slate-300">
                    <th>{i + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.quantity}</td>
                </tr>)
                }
                              
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default LeaderBoard;