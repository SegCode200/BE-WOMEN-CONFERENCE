import { NavLink } from "react-router-dom"
import pics from "../../assets/be logo.png"
import { MdDashboard } from "react-icons/md"
import { FaBookJournalWhills,FaFileWaveform  } from "react-icons/fa6"
import { SiGotomeeting } from "react-icons/si"
import { BsChatSquareTextFill } from "react-icons/bs"
import { IoSettingsOutline } from "react-icons/io5"
import { BiLogOut } from "react-icons/bi";

const Slider = () => {
  return (
    <div className="w-full h-full ">
      <div className="justify-between flex flex-col">
        <div className="w-full h-full  flex items-center  ">
          <img src={pics} className="w-[50px] h-[50px]" alt="..." />
          <span className="text-white font-bold">TCN WOMEN</span>
        </div>

        <div className="w-full h-auto mt-[100px]">
        <div>
        <NavLink
          to="/home/user/dashboard"
          
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

        {/* Journal */}
        <div className="text-red-900 no-underline">
        <NavLink
          to="/home/user/journal"
          style={{marginTop: "5px"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Journal
          <FaBookJournalWhills />
        </NavLink>
        </div>

        
        {/* Prayer */}
        <div className="text-red-900 no-underline">
        <NavLink
          to="/home/user/prayer"
          style={{marginTop: "5px"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Prayer
          <SiGotomeeting />
        </NavLink>
        </div>

        {/* Events */}
        <div className="text-red-900 no-underline">
        <NavLink
          to="/home/user/events"
          style={{marginTop: "5px", textDecoration: "none"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Events
          <FaFileWaveform  />
        </NavLink>
        </div>

        </div>

       <div className="mt-[90px]">
        <div>
          {/* Notifications */}
          <NavLink
          to="/home/user/notify"
          style={{textDecoration: "none"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Notifications
          <BsChatSquareTextFill  />
        </NavLink>
        </div>
          {/* Settings */}
          <div>
            
            <NavLink
          to="/home/user/settings"
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Settings
          <IoSettingsOutline  />
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

export default Slider
