import { useLoaderData } from "react-router-dom";
import { PieChart, Pie } from "recharts";


const AdminDashboard = () => {
    const { _id, quantity} = useLoaderData();

    const data = [
    { name: "Group A", value: Number(quantity) },
    // { name: "Group B", value: 300 },
    // { name: "Group C", value: 300 },
    // { name: "Group D", value: 200 },
    // { name: "Group E", value: 278 },
    // { name: "Group F", value: 189 }
    ];

    return (
        <div className="bg-blue-100 h-screen p-10 rounded-lg">
            <h1 className="text-3xl font-bold ">Admin dsahboard:  <span className="text-sm ">id: {_id}</span>
            </h1>
            <h1  className="text-5xl font-semi-bold mt-5">Donation satatistics for individual user!.</h1>
            <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
            />
            </PieChart>
        </div>
    );
};

export default AdminDashboard;