import { Outlet } from "react-router-dom"
import AdminSlider from "../Static/AdminSlider"


const AuthLayout = () => {
 
  return (
    <div className="flex justify-between w-full ">
      {/* Slider */}
      <div className={`w-[16%] inline-flex  h-screen bg-teal-700 border-r shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-[15px] fixed top-0 left-0 z-[9999]`}>
        <AdminSlider/>

        </div>
    {/* Outlet */}
      <div className=" bg-white  items-end flex justify-end w-[100%] right-0 ">
       
        <Outlet/>
      </div>
      
    </div>
  )
}

export default AuthLayout
