import { useSelector } from "react-redux";


const LeaderBoard = () => {
    const {darkMode} = useSelector((store)=>store.theme);

    return (
        <div className="w-3/4 mx-auto  my-10 rounded-md">
            <h1 className="text-sky-700 text-5xl text-center"> Leader Board :</h1>
            <div className={`overflow-x-auto p-10 ${darkMode ? "bg-black text-white" : ""} bg-gray-100 mt-8`}>
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
                <tr className="hover:bg-slate-300">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr className="hover:bg-slate-300">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr className="hover:bg-slate-300">
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default LeaderBoard;