import { NavLink } from "react-router-dom"
import pics from "../../assets/be logo.png"
import { MdDashboard } from "react-icons/md"
import { FaBookJournalWhills,FaFileWaveform, FaLocationDot  } from "react-icons/fa6"
import { SiGotomeeting } from "react-icons/si"
import { BsChatSquareTextFill, BsPeople } from "react-icons/bs"
import { IoSettingsOutline } from "react-icons/io5"
import { BiLogOut } from "react-icons/bi";
import { IoIosListBox } from "react-icons/io"


 const Slider = () => {
 
  return (
    <div className="w-full h-full ">
      <div className="justify-between flex flex-col ">
        <div className="w-full h-full  flex items-center  ">
          <img src={pics} className="w-[50px] h-[50px]" alt="..." />
          <span className="text-white font-bold">TCN WOMEN</span>
        </div>

        <div className="w-full h-auto mt-[60px]">
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
        <div className="text-red-900 no-underline relative group" 
        >
        
          
     
           <ul className="absolute top-0 right-[-210px] w-48 bg-teal-700 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity ">
           <NavLink
          to="/home/user/journal"
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all  text-white cursor-pointer font-medium  flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600 "
              : "duration-500 transition-all  hover:bg-teal-500 text-white cursor-pointer font-medium flex items-center justify-between decoration-white hover:text-white "
          }
          
        >
            <li className="p-4 w-full hover:bg-teal-500 flex justify-between items-center">Add Journal <FaBookJournalWhills /></li>
        </NavLink>
        <NavLink
          to="/home/user/listjournal"
          
          className={({ isActive, }) =>
            isActive
          ? "duration-500 transition-all  text-white cursor-pointer font-medium  flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600 "
          : "duration-500 transition-all  hover:bg-teal-500 text-white cursor-pointer font-medium flex items-center justify-between decoration-white hover:text-white "
        }
        
        >
            <li className="p-4 w-full hover:bg-teal-500 flex justify-between items-center">List Journal <IoIosListBox/></li>
          </NavLink>
           
          </ul>
       <div className="duration-500 transition-all  hover:bg-teal-500 text-white cursor-pointer font-medium flex items-center justify-between decoration-white hover:text-white p-2">
       <span>Journal</span> 
         <FaBookJournalWhills />
       </div>
        </div>

        
        {/* Prayer */}
        <div className="text-red-900 no-underline">
        <NavLink
          to="/home/user/social"
          style={{marginTop: "5px"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Social
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

        {/* Community */}
        <div className="text-red-900 no-underline">
        <NavLink
          to="/home/user/community"
          style={{marginTop: "5px", textDecoration: "none"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Community
          <BsPeople  />
        </NavLink>
        </div>

        </div>

       <div className="mt-[30px]">
       <div>
          {/* Notifications */}
          <NavLink
          to="/home/user/location"
          style={{textDecoration: "none"}}
          className={({ isActive, }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm text-white cursor-pointer font-medium my-2 flex items-center justify-between hover:text-white bg-gradient-to-r  from-teal-600 to-pink-600"
              : "duration-500 transition-all p-2 rounded-sm hover:bg-teal-500 text-white cursor-pointer font-medium my-2 flex items-center justify-between decoration-white hover:text-white "
          }
        >
          Nearest Location
          <FaLocationDot  />
        </NavLink>
        </div>

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
