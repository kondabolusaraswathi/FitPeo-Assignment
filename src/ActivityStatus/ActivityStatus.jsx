import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale } from 'chart.js';
import {ACTIVITY} from '../data'
// Registering components for Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale);

const Chart = ({ type }) => {
  // Prepare data for the chart
  const chartData = {
    labels: ACTIVITY.weekly.map(item => item.day || item.month || item.year),
    datasets: [
      {
        label: 'Value',
        data: ACTIVITY.weekly.map(item => item.value),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderWidth: 0.8,
        barPercentage:0.4,
        categoryPercentage:0.4
      }
    ]
  };

  return (
    <div>
      {type === 'line' ? <Line data={chartData} /> : <Bar data={chartData} />}
    </div>
  );
};

export default Chart;
