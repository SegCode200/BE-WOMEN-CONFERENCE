
import { IoIosNotifications } from "react-icons/io"
import userimage from "../../assets/user.png"
import { useState } from "react";
interface iData{
  name: string;
}
const Head: React.FC<iData> = ({name}) => {

  const [active, setActive] = useState(false)
  const [active1, setActive1] = useState(false)
  return (
    <div className="flex h-[60px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white items-center px-[15px] justify-between">
      <span className="uppercase font-extrabold text-[25px] text-teal-500">{name}</span>
      <span className="uppercase font-extrabold text-2xl">
        Welcome Back
      </span>


      <div className="flex gap-[10px] items-center ">
        {/* Icons */}
        <div className=" text-black p-[10px]   relative cursor-pointer hover:bg-pink-300 rounded-[50%] hover:text-white" onMouseEnter={()=>(setActive1(true))}
        onMouseLeave={()=>(setActive1(false))}>
          <IoIosNotifications  size={30}/> 
          <div className="absolute top-[7px] right-[8px] bg-red-700 text-white px-[5px]   rounded-[50%] text-[12px] font-semibold">2</div>
          {active1 ? <div>
            <div className="absolute bottom-[-40px] duration-200 left-[-30px] border-teal-400 bg-pink-500 py-[6px] px-[6px] rounded-[5px] text-white  "> Notifications</div>
          </div> : null}
        </div>
          {}
        <div>
          
        </div>

        <div className="w-[40px] h-[40px] cursor-pointer relative " onMouseEnter={()=>(setActive(true))}
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
