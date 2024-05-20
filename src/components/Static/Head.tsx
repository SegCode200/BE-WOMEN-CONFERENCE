
import { IoIosNotifications } from "react-icons/io"
import { CgMenu } from "react-icons/cg"
import userimage from "../../assets/user.png"
import { useState } from "react";
import Slider from "./Slider";
import { RxCross2 } from "react-icons/rx";

interface iData{
  name: string;
}
const Head: React.FC<iData> = ({name}) => {

  const [active, setActive] = useState(false)
  const [active1, setActive1] = useState(false)
  const [OpenSlider, setOpenSlider] = useState(false)

  return (
    <div className="flex h-[60px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white items-center px-[15px] justify-between w-full transition duration-1000 ease-in-out">
      <div className="flex items-center justify-between md:gap-8 gap-2">
      <div className="md:hidden cursor-pointer " onClick={()=>(setOpenSlider(true))} >

      <CgMenu/>
      </div>
      {OpenSlider? (
        <div className="w-[66%] md:hidden  h-full bg-teal-700 border-r shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-[15px] fixed top-0 left-0 z-[50] ">
       
            <RxCross2 className="text-[30px] bg-pink-600 text-white  rounded-[50%] p-[5px] cursor-pointer absolute top-6 right-3" onClick={()=>(setOpenSlider(false))}/>
         
          <Slider />
         </div>
      ):null
      }
   
      <span className="uppercase font-extrabold text-2xl text-teal-500 max-sm:text-sm ">{name}</span>
      </div>
      <span className="uppercase font-extrabold text-2xl max-sm:text-[11px]">
        Welcome Back
      </span>


      <div className="flex gap-[10px] items-center  max-xl:gap-[3px]">
        {/* Icons */}
        <div className=" text-black p-[10px]   relative cursor-pointer hover:bg-pink-300 rounded-[50%] hover:text-white max-md:text-[9px]" onMouseEnter={()=>(setActive1(true))}
        onMouseLeave={()=>(setActive1(false))}>
          <IoIosNotifications  className="text-[35px] max-md:text-[18px]"/> 
          <div className="absolute top-[7px] right-[8px] bg-red-700 text-white max-md:px-[3px]  px-[5px]  rounded-[50%] text-[12px] max-md:text-[6px] font-semibold">2</div>
          {active1 ? <div>
            <div className="absolute bottom-[-40px] duration-200 left-[-30px] border-teal-400 bg-pink-500 py-[6px] px-[6px] rounded-[5px] text-white  "> Notifications</div>
          </div> : null}
        </div>
          {}
        <div>
          
        </div>

        <div className="w-[50px] h-[50px] max-md:w-[20px] max-md:h-[20px] cursor-pointer relative " onMouseEnter={()=>(setActive(true))}
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


export default Head
