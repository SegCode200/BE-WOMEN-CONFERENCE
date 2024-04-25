// import { Link } from "react-router-dom"
import AdminHead from "../../../components/Static/AdminHead"
import icon from "../../../assets/22379230_6619160.jpg"



const Dashboard = () => {
  return (
    <div className="h-screen bg-teal-50/45 w-[84%]">
    <AdminHead name="Dashboard"/>
 <div className="flex w-full gap-3">
 <div className="flex flex-col p-6  min-h-screen w-auto">
      {/* Summary of Key Sections */}
      <div className=" p-6  shadow-lg bg-pink-100 flex">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back, Travis</h2>
        <p className="text-gray-600 mt-2 ">
          Manage all key aspects of the TCN Women app from here.
        </p>
        {/* Estimation */}
        <div>
       
        </div>
        </div>
        {/* Journal Icon */}
        <div className="w-[250px] h-[250px]">
        <img src={icon} className="w-full h-full"/>
        </div>
      </div>
    </div>
{/* Other Side */}
    <div>

    </div>
 </div>
  </div>
  )
}

export default Dashboard
