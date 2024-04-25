// import { Link } from "react-router-dom"
import AdminHead from "../../../components/Static/AdminHead"
import icon from "../../../assets/JournalPics.png"
import {Chart as ChartJs, ArcElement, Tooltip, Legend} from "chart.js"
import {Doughnut} from "react-chartjs-2"
import { DayPicker } from "react-day-picker"
import 'react-day-picker/dist/style.css';

ChartJs.register(ArcElement, Tooltip, Legend)



const Dashboard = () => {
  const userResponses = [
    { username: 'JohnDoe', prompt: 'What are you grateful for this week?', response: 'I am grateful for my family.' },
    { username: 'JaneSmith', prompt: 'What are you grateful for this week?', response: 'I am grateful for my health.' },
    { username: 'AlexBrown', prompt: 'What are you grateful for this week?', response: 'I am grateful for my job.' },
  ];
  const newUsers = [
    { name: 'John Doe', email: 'john@example.com', registrationDate: '2024-04-01' },
    { name: 'Jane Smith', email: 'jane@example.com', registrationDate: '2024-04-02' },
    { name: 'Alex Brown', email: 'alex@example.com', registrationDate: '2024-04-03' },
  ];
  const data = {
    datasets: [{
      data: [3,6],
      backgroundColor: ["teal", "pink"],
      borderColor: ["teal", "pink"],
      borderWidth: 1
    }]
  };
  const options = {
   
  };
  return (
    <div className="h-auto bg-teal-50/45 w-[84%]">
    <AdminHead name="Dashboard"/>
 <div className="flex w-full gap-3 items-center">
 <div className="flex flex-col p-6  w-auto">

      {/* Summary of Key Sections */}
      <div className=" p-6  shadow-lg bg-pink-100 flex flex-col">
      <div className="flex ">
      <div className="">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back, Travis</h2>
        <p className="text-gray-600 mt-2 ">
          Manage all key aspects of the TCN Women app from here.
        </p>
        {/* Estimation */}
       <div className="flex items-center mt-[40px]">
        {/* Doughtchart */}
       <div className="w-[20%] h-[20%]">
    <Doughnut data={data} options={options}/>
    </div>
    {/* Text */}
      <div className="flex flex-col ml-[10px] ">
        <h2 className="text-[14px] text-black font-semibold mb-[-5px] ">Total Events</h2>
        <h1 className=" text-[60px] text-black font-black">23</h1>
      </div>
        {/* Other Side text */}
        <div className="flex flex-col ml-[50px] border-l-2 border-l-teal-200 pl-[10px]">
          <span className="text-black flex items-center border-l-2 border-l-pink-700 pl-[10px] mb-[5px]">23 <span className="text-gray-800/40 text-[13px] ml-[6px]">Regiter</span></span>
          <span className="text-black flex items-center border-l-2 border-l-teal-700 pl-[10px] mb-[5px]">23 <span className="text-gray-800/40 text-[13px] ml-[6px]">Regiter</span></span>
          <span className="text-black flex items-center border-l-2 border-l-pink-500 pl-[10px] mb-[5px]">23 <span className="text-gray-800/40 text-[13px] ml-[6px]">Regiter</span></span>
       
       </div>
        </div>
        </div>
        {/* Journal Icon */}
        <div className="w-[250px] h-[250px]">
        <img src={icon} className="w-full h-full"/>
        </div>
      </div>
      <span className="text-[14px]">Last Update: 3 days ago</span>
      </div>
        
    </div>
   
{/* Other Side */}
    <div>
    <div className=" shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
              <DayPicker
              mode="single"
              // selected={selected}
              // onSelect={setSelected}
              style={{ backgroundColor: "teal", color: "white", width: "100%", marginLeft:"0px"}}
              
              // footer= {footer}
              />
        </div>

    </div>
 </div>

{/* The Down Side of the Dashboard */}
 <div className="px-[15px] flex flex-col">
    
      <div className=" bg-gray-100 p-6 flex flex-col space-y-6">
      {/* Header Section */}
      <header className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Summary of new user registrations.</p>
      </header>

      {/* Summary Card for New Users */}
      <div className="flex space-x-6">
        <div className="bg-teal-600 text-white p-6 rounded-lg shadow flex-1">
          <h2 className="text-xl font-bold">Total New Users</h2>
          <p className="text-3xl mt-2">{newUsers.length}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex-1">
         <div className="flex items-center w-full justify-between">
         <h2 className="text-xl font-bold text-gray-800">Recent Registrations</h2>
         <h2 className="text-[14px] font-bold text-gray-800 cursor-pointer">View All</h2>
         
         </div>
          <ul className="mt-4 space-y-2">
            {newUsers.map((user, index) => (
              <li key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span>{user.name}</span>
                <span className="text-gray-500 text-sm">{user.email}</span>
                <span className="text-gray-400 text-sm">{user.registrationDate}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>


     {/* User Responses Section */}
     <div className="bg-white p-6 rounded-lg shadow mt-[10px]">
        <h2 className="text-xl font-semibold text-gray-800">User Responses</h2>
        {userResponses.length === 0 ? (
          <p className="text-gray-600 mt-4">No responses found.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-pink-200  ">
                  <th className="px-4 py-2 text-left text-gray-800">Username</th>
                  <th className="px-4 py-2 text-left text-gray-800">Prompt</th>
                  <th className="px-4 py-2 text-left text-gray-800">Response</th>
                </tr>
              </thead>
              <tbody>
                {userResponses.map((response, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 text-gray-700">{response.username}</td>
                    <td className="px-4 py-2 text-gray-700">{response.prompt}</td>
                    <td className="px-4 py-2 text-gray-700">{response.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

 </div>
  </div>
  )
}

export default Dashboard
