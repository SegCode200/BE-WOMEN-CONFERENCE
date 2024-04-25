import { NavLink } from "react-router-dom"
import pics from "../../assets/be logo.png"
import { MdDashboard } from "react-icons/md"
import { FaBell, FaChartBar, FaUser, FaUsers  } from "react-icons/fa6"
import { BiLogOut } from "react-icons/bi";
import { FaCalendarAlt, FaFileAlt } from "react-icons/fa"

const AdminSlider = () => {
  return (
    <div className="w-full h-full ">
      <div className="justify-between flex flex-col">
        <div className="w-full h-full  flex items-center  ">
          <img src={pics} className="w-[50px] h-[50px]" alt="..." />
          <span className="text-white font-bold">TCN WOMEN</span>
        </div>

        <div className="w-full h-auto mt-[80px]">
        <div>
        <NavLink
          to="/home/admin/dashboard"
          
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Dashboard
          <MdDashboard />
        </NavLink>
        </div>

        {/* Events */}
        <div className="text-red-900 no-underline">
        <NavLink
          to="/home/admin/events"
          style={{marginTop: "5px"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Events
          <FaCalendarAlt  />
        </NavLink>
        </div>

        
        {/* User */}
        <div className="text-red-900 no-underline">
        <NavLink
          to="/home/admin/users"
          style={{marginTop: "5px"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          User Management
          <FaUsers  />
        </NavLink>
        </div>

        {/* Content */}
        <div className="text-red-900 no-underline">
        <NavLink
          to="/home/admin/content"
          style={{marginTop: "5px", textDecoration: "none"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Content Managment
          <FaFileAlt   />
        </NavLink>
        </div>

        </div>

       <div className="mt-[70px]">
        <div>
          {/* analytics */}
          <NavLink
          to="/home/admin/analytics"
          style={{textDecoration: "none"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Analytics
          <FaChartBar    />
        </NavLink>
        </div>
          {/* Notifications */}
          <div>
            
            <NavLink
          to="/home/admin/notifications"
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Notifications
          <FaBell   />
        </NavLink>
          </div>
          {/* Profile */}
          <div>
            
            <NavLink
          to="/home/admin/profile"
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Admin Profile 
          <FaUser    />
        </NavLink>
          </div>
            {/* Logout */}
          
           <div className="">
           <NavLink
          to="/"
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500  text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          LogOut
          <BiLogOut  />
        </NavLink>
            
          
        </div>
       </div>
      </div>
    </div>
  )
}

export default AdminSlider
