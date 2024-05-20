import { Outlet } from "react-router-dom"
import Slider from "../Static/Slider"


const AuthLayout = () => {
 
  return (
    <div className="flex justify-between w-full">
      {/* Slider */}
      <div className={`w-[16%] max-md:hidden  h-screen bg-teal-700 border-r shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-[15px] fixed top-0 left-0 z-[50]`}>
        <Slider/>

        </div>
    {/* Outlet */}
      <div className="bg-white lg:flex-1 md:flex-1   items-end flex justify-end max-md:w-[100%]  ">
       
        <Outlet/>
      </div>
      
    </div>
  )
}

export default AuthLayout
