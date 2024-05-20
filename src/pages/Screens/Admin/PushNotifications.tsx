import { FaPlus } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx"
import AdminHead from "../../../components/Static/AdminHead"
import { useState } from "react"
import { MdEditDocument, MdDeleteOutline } from "react-icons/md"
import Swal from "sweetalert2"



const PushNotifications = () => {
  const [show, setShow] = useState(false)
  // const [isEditingEvent, setIsEditingEvent] = useState(null)
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const handleOpenEdit =()=>{
    // setIsEditingEvent(content)
    setIsOpenEdit(true)
  }
  function deletePopup()  {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className=" h-auto bg-teal-50/45  md:w-[84%] lg:w-[84%] w-[100%]">
    <AdminHead name="Push Notifications"/>
    <div className="p-[15px] h-screen  shadow-lg mt-[10px]">
      <div className="bg-white p-[10px] shadow-md rounded-md  w-full justify-between">
      <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold max-sm:text-xl">Push Notifications</h1>
      <div className="flex items-center gap-3 p-[8px] rounded-3xl cursor-pointer text-white bg-gradient-to-r from-teal-500 to-pink-500" onClick={()=>(
        setShow(true)
      )}>
        <FaPlus/>
        <p className="" >Add</p>
      </div>
      </div>

      <p className="text-gray-500 w-[600px] max-sm:mt-[10px] max-sm:text-[12px] max-sm:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

      {show && (
        <div className="fixed bg-teal-400/20 left-0 top-0 w-full h-[100%] z-[9999] flex justify-center items-center">
          <div className="w-[500px] h-[70%] bg-white/100 shadow-md rounded-lg p-[15px]">
          
            <div className="flex items-center justify-between border-b-2 pb-[15px]">
              <span className="text-[20px] font-bold"> Push Notifications</span>
              <div>
              <RxCross2 className="text-[30px] border-2  rounded-[50%] p-[5px] cursor-pointer" onClick={()=>(
                setShow(false)
              )}/>
              </div>
            </div>
            {/* Events Title */}
            <div className="mt-[10px] flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]">Notifications Title <span className="text-red-400">*</span></label>
            <input type="text" placeholder="Announcement" className="w-full px-[10px] py-[10px] text-[12px] border-2  rounded-[10px] focus:outline-none" />
          </div>
          {/* End Of Events Title */}

            {/* Selecting of Files */}
            <div className="flex flex-col mt-[10px]">
            <label className="text-[14px] font-semibold ml-[10px]"> Select Your Image <span className="text-red-400">*</span></label>
            <input type="file" accept="image/*"  placeholder="" className="w-full  pl-[2px] py-[2px] file:p-[9px] file:rounded-[5px] file:border-none  text-[12px] border-2  rounded-[10px] focus:outline-none  " />
          </div>
          {/* End Of Selecting of Files */}

              {/* Description*/}
              <div className="mt-[10px]">
            <label className="text-[14px] font-semibold ml-[10px]">Notifications Message <span className="text-red-400">*</span></label>
            <textarea maxLength={1000} placeholder="Note" className="w-full h-[100px] px-[10px] py-[10px] text-[12px] border-2 rounded-[10px] focus:outline-none" />
          </div>
          {/* End Of Description*/}
           {/* Button */}
           <div className="flex w-full justify-center gap-3 mt-[10px] text-white">
            <button className="text-[15px] w-full px-[50px] py-[10px] bg-pink-400 max-sm:px-[30px] max-sm:py-[5px] rounded-3xl focus:outline-none" onClick={()=>setShow(false)}>Cancel</button>
            <button className="text-[15px] w-full px-[50px] py-[10px]  bg-teal-400 rounded-3xl max-sm:px-[30px] max-sm:py-[5px] focus:outline-none">Push Notifications</button>
          </div>
         
          {/* End Of Adding Events Details */}
           
  
          </div>

        </div>
      )}
    

      <div>
        
      </div>
      </div>

      <div className="flex flex-col bg-white shadow-md p-[10px] mt-[10px]">
        <div className="flex justify-between w-full border-b-2 px-[5px] bg-pink-600/40   py-[10px]">
          <span className="text-[20px] font-bold max-sm:text-[18px]">List Of Notifications</span>
          <span className="text-[16px] font-bold">Actions</span>
        </div>
        <div className="flex items-center justify-between border-b-2 pb-[10px] ">
          <div className="flex flex-col  mt-[10px]">
            <span className="text-[18px] font-extrabold max-sm:text-[15px] ">Prayer Prompt</span>
            <span className="text-[16px] w-[70%] my-[5px] max-sm:text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem natus perferendis deserunt? Consequatur, fugiat.</span>
            <span className="text-[11px] mt-[4px] font-bold text-pink-700">Aug,20 2024</span>
          </div>
          <div className="flex gap-[10px] text-[20px] text-teal-700">
          <MdEditDocument onClick={()=>(handleOpenEdit())} />
          {isOpenEdit?   
                <div className="fixed bg-teal-400/20 left-0 top-0 w-full h-screen z-[9999] flex justify-center items-center">
                  <div className="w-[500px] h-[70%] bg-white/100 shadow-md rounded-lg p-[15px]">
          
          <div className="flex items-center justify-between border-b-2 pb-[15px]">
            <span className="text-[20px] font-bold"> Push Notifications</span>
            <div>
            <RxCross2 className="text-[30px] border-2  rounded-[50%] p-[5px] cursor-pointer"  onClick={()=>(setIsOpenEdit(false))}/>
            </div>
          </div>
          {/* Events Title */}
          <div className="mt-[10px] flex flex-col">
          <label className="text-[14px] font-semibold ml-[10px]">Notifications Title <span className="text-red-400">*</span></label>
          <input type="text" placeholder="Announcement" className="w-full px-[10px] py-[10px] text-[12px] border-2  rounded-[10px] focus:outline-none" />
        </div>
        {/* End Of Events Title */}

          {/* Selecting of Files */}
          <div className="flex flex-col mt-[10px]">
          <label className="text-[14px] font-semibold ml-[10px]"> Select Your Image <span className="text-red-400">*</span></label>
          <input type="file" accept="image/*"  placeholder="" className="w-full  pl-[2px] py-[2px] file:p-[9px] file:rounded-[5px] file:border-none  text-[12px] border-2  rounded-[10px] focus:outline-none  " />
        </div>
        {/* End Of Selecting of Files */}

            {/* Description*/}
            <div className="mt-[10px]">
          <label className="text-[14px] font-semibold ml-[10px]">Notifications Message <span className="text-red-400">*</span></label>
          <textarea maxLength={1000} placeholder="Note" className="w-full h-[100px] px-[10px] py-[10px] text-[12px] border-2 rounded-[10px] focus:outline-none" />
        </div>
        {/* End Of Description*/}
         {/* Button */}
         <div className="flex w-full justify-center gap-3 mt-[10px] text-white">
          <button className="text-[15px] w-full px-[50px] py-[10px] bg-pink-400 max-sm:px-[30px] max-sm:py-[5px] rounded-3xl focus:outline-none"  onClick={()=>(setIsOpenEdit(false))}>Cancel</button>
          <button className="text-[15px] w-full px-[50px] py-[10px]  bg-teal-400 rounded-3xl max-sm:px-[30px] max-sm:py-[5px] focus:outline-none">Push Notifications</button>
        </div>
       
        {/* End Of Adding Events Details */}
         

        </div>
          

        </div> : null}
            <MdDeleteOutline className="cursor-pointer" onClick={()=>(deletePopup())}/>
          </div>
        </div>
        <div className="flex items-center justify-between border-b-2 pb-[10px] ">
          <div className="flex flex-col  mt-[10px]">
            <span className="text-[18px] font-extrabold ">Prayer Prompt</span>
            <span className="text-[16px] w-[70%] my-[5px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem natus perferendis deserunt? Consequatur, fugiat.</span>
            <span className="text-[11px] mt-[4px] font-bold text-pink-700">Aug,20 2024</span>
          </div>
          <div className="flex gap-[10px] text-[20px] text-teal-700">
          <MdEditDocument/>
            <MdDeleteOutline/>
          </div>
        </div>
      </div>

    </div>
 
  </div>
  )
}

export default PushNotifications
