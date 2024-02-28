import { useSelector } from "react-redux";


const AllVolunteer = () => {
    const {darkMode} = useSelector((store)=>store.theme);

    return (
        <div className="w-3/4 mx-auto  my-10 rounded-md">
            <h1 className="text-sky-700 text-4xl text-center">Meet All Our Volunteers :</h1>
            <div className={`w-3/4 mx-auto my-10 ${darkMode ? "bg-black text-white" : ""} bg-gray-50 p-4 rounded`}>
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="hover:bg-slate-300">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr className="hover:bg-slate-300">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr className="hover:bg-slate-300">
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>Red</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllVolunteer;