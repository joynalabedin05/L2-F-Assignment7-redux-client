
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];


const PieCharts = () => {
    return (
      
        <ResponsiveContainer width="100%" height="100%">
        {/* <h1 className='text-center'>AdminBoard PieCharts:</h1> */}

          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      
        
      );
};

export default PieCharts;