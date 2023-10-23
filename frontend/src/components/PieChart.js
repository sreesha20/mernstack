import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart({ data }) {
  const chartData = {
    labels: ['Men', 'Women', 'Boys', 'Girls'],
    datasets: [
      {
        data: data,
        backgroundColor: ['blue', 'pink', 'green', 'purple'],
      },
    ],
  };

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
