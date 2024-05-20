import AdminHead from "../../../components/Static/AdminHead"
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { faker } from "@faker-js/faker";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);
const usageData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'App Usage Time (hours)',
      data: [2, 3, 1.5, 4, 3.5, 2.5, 5],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
    },
  ],
};
const chartOptions = {
  responsive: true,
  maintainAspectRatio : false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Weekly App Usage Time',
    },
  },
};
const options = {
  responsive: true,
  maintainAspectRatio : false,
  plugins: {
    legend: {
      position: 'top' as const,
    }
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data1 = {
 labels,
 datasets: [
   {
     label: 'Half Month',
     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
     backgroundColor: 'pink',
   },
   {
     label: 'Remaining Half Month',
     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
     backgroundColor: 'teal',
   },
 ],
};


const Analytics = () => {

  return (
    <div className=" h-auto bg-teal-50/45  md:w-[84%] lg:w-[84%] w-[100%]">
    <AdminHead name="Analytics"/>
    <div className=" max-w-2xl s  p-4">
      <h1 className="text-2xl font-bold mb-4">App Usage Analytics</h1>
      <div className="bg-white p-4 rounded shadow-lg w-full h-[60vh] relative ">
      <Line data={usageData} options={chartOptions} className="w-full" />
    </div>
    </div>
    <div className="px-[20px] mt-[20px] max-w-2xl">
      <div>
      <h1 className="text-2xl font-bold mb-4">Journaling Frequency</h1>
      </div>
      <div className="bg-white p-4 rounded shadow-lg w-full h-[60vh] relative">
 <Bar options={options} data={data1}  className="w-auto h-auto"/>

      </div>
 </div>
   
   
  </div>
  )
}

export default Analytics
