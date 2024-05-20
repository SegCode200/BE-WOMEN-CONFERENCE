
import { IoIosNotifications } from "react-icons/io"
import userimage from "../../assets/user.png"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CgMenu } from "react-icons/cg";
import AdminSlider from "./AdminSlider";
interface iData{
  name: string;
}
const AdminHead: React.FC<iData> = ({name}) => {
  const getFormattedDate = () => {
    const now = new Date();
    
    // Formatter with locale and options for a more detailed date format
    const options = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(now);
    return formattedDate;
  };
  

  const currentDate = getFormattedDate()

  const [active, setActive] = useState(false)
  const [active1, setActive1] = useState(false)
  const [OpenSlider, setOpenSlider] = useState(false)
  return (
    <div className="flex h-[60px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white items-center px-[15px] justify-between w-full">
       <div className="flex items-center justify-between md:gap-8 gap-2">
      <div className="md:hidden cursor-pointer mr-[10px]" onClick={()=>(setOpenSlider(true))} >

      <CgMenu/>
      </div>
      {OpenSlider? (
        <div className="w-[66%] md:hidden  h-full bg-teal-700 border-r shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-[15px] fixed top-0 left-0 z-[50] ">
       
            <RxCross2 className="text-[30px] bg-pink-600 text-white  rounded-[50%] p-[5px] cursor-pointer absolute top-6 right-3" onClick={()=>(setOpenSlider(false))}/>
         
          <AdminSlider />
         </div>
      ):null
      }
   
    
      </div>
    <span className="uppercase font-extrabold text-[17px] max-sm:text-[14px] text-teal-500">{name}</span>
    <div className="flex gap-1 items-center w-[75%] justify-around">
      <span className=" font-extrabold text-[15px] max-sm:text-[11px]">
        {currentDate}
      </span>
    </div>


      <div className="flex gap-[10px] items-center max-sm:gap-1 ">
        {/* Icons */}
        <div className=" text-black p-[10px]   relative cursor-pointer hover:bg-pink-300 rounded-[50%] hover:text-white" onMouseEnter={()=>(setActive1(true))}
        onMouseLeave={()=>(setActive1(false))}>
          <IoIosNotifications className="max-sm:text-[30px] text-[35px]"  /> 
          <div className="absolute top-[7px] right-[8px] bg-red-700 text-white px-[5px]   rounded-[50%] text-[12px] font-semibold">2</div>
          {active1 ? <div>
            <div className="absolute bottom-[-40px] duration-200 left-[-30px] border-teal-400 bg-pink-500 py-[6px] px-[6px] rounded-[5px] text-white  "> Notifications</div>
          </div> : null}
        </div>
          {}
        <div>
          
        </div>

        <div className="w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] cursor-pointer relative " onMouseEnter={()=>(setActive(true))}
        onMouseLeave={()=>(setActive(false))}
        >
          <img src= {userimage} className="w-full h-full"/>
          {active ? <div>
            <div className="absolute bottom-[-40px] duration-200 left-[-30px] border-teal-400 bg-pink-500 py-[6px] px-[6px] rounded-[5px] text-white  "> Profile</div>
          </div> : null}
        </div>
      </div>
    </div>
  )
}


export default AdminHead
