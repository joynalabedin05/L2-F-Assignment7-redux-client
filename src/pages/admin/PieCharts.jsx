
import { PieChart, Pie, Cell,Legend , ResponsiveContainer } from 'recharts';

import { useGetAllDonationQuery } from '../../redux/api/baseApi';

const PieCharts = () => {
  const {data: chartData = [], isLoading} = useGetAllDonationQuery();
 
  console.log(chartData);
  if(isLoading){
      return <p>Loading..</p>
  }
  const data01 = chartData?.map(item=>{
    const name = item.name;
    const quantity = item.quantity;
    const info = {
      name,
      quantity
    }
    return info;
  });
  // console.log(data01);

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
          </text>
      );
  };

    return (     
      <ResponsiveContainer width="100%" height="100%">
      <PieChart width={800} height={800}>
          <Legend></Legend>
          <Pie
              data={data01}
              cx="100%"
              cy="100%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="quantity"
          >
              {data01?.map((entry, index) => (
                  <Cell  name={entry.quantity}  key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
          </Pie>
      </PieChart>
  </ResponsiveContainer>
      
        
      );
};

export default PieCharts;