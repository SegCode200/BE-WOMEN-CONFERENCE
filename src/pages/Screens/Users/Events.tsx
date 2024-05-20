import Head from "../../../components/Static/Head"
import pics from "../../../assets/Prayer Flyer.jpg"
import pics1 from "../../../assets/bewomenconference-05042024-0005.webp"
import person from "../../../assets/pastor toyin poju.webp"
import Swal from "sweetalert2"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"
const Data =[
  {person},
  {person},
  {person},
 
]

const Events = () => {
  
  const [activeTab, setActiveTab] = useState("ongoing"); 
  const [joinEvent, setJoinEvent] = useState(false)

  const Alert = ()=>{
    Swal.fire({
      title: "You have successfully joined",
      icon: "success",
      timerProgressBar: true,
      
      timer:4000
    })
  }
  
  return (
 
       <div className="bg-teal-50/45 h-screen md:w-[84%] lg:w-[84%] w-[100%]">
      <Head name="Events"/>
      <div className="h-[calc(100vh-60px)] p-[15px] w-full">

      <div className="flex justify-between mb-4">
          <div
            className={`cursor-pointer p-[10px] bg-gradient-to-r to-teal-500 from-pink-500 text-white  ${
              activeTab === "ongoing" ? "font-extrabold text-teal-500" : ""
            } max-md:text-[12px] max-sm:p-[4px]`}
            onClick={() => setActiveTab("ongoing")}
          >
            Ongoing Events
          </div>
          <div
            className={`cursor-pointer p-[10px] bg-gradient-to-r to-teal-500 from-pink-500 text-white ${
              activeTab === "upcoming" ? "font-extrabold text-teal-500" : ""
            } max-md:text-[13px] max-sm:p-[5px]`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Events
          </div>
          <div
            className={`cursor-pointer p-[10px] bg-gradient-to-r to-teal-500 from-pink-500 text-white ${
              activeTab === "registered" ? "font-extrabold text-teal-500" : ""
            } max-md:text-[13px] max-sm:p-[5px]`}
            onClick={() => setActiveTab("registered")}
          >
            Registered Events
          </div>
        </div>

        {/* Content based on selected tab */}
        {activeTab === "ongoing" && (
          <div className=" flex flex-wrap  mb-[10px]" onClick={() => { setJoinEvent(true) }}>
            {/* Ongoing Events */}
        
          <div className="">
            <div className=" font-semibold mb-[10px] ">Ongoing Events</div>
          {/* Holder */}
            <div className="max-sm:w-[170px]  w-[200px] h-auto bg-white rounded-md cursor-pointer pb-[20px] ">
              <div className="w-full max-sm:h-[100px] h-[120px] rounded-s-sm overflow-hidden">
                <img src={pics} className="w-full h-full object-fill "/>
              </div>

              <div className="flex flex-col px-[5px]">
               <div className="flex w-ful justify-between items-center">
               <span className="text-[13px] font-semibold capitalize text-pink-400 max-sm:text-[11px]">TCN women global prayer</span>
               <button className="text-[11px] text-white mt-[3px] py-[0px] px-1 bg-teal-400 rounded-[3px] max-sm:px-[2px] ">Join</button>
               </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-semibold my-[5px]">@Zoom</span>
                  <span className="text-[10px] font-semibold my-[5px]"> 300 members</span>
                </div>
                <div className="text-[11px] text-teal-400">
                  <span>18th Apr. 2024</span>
                  <span className="mx-[10px]">:</span>
                  <span>11:00am - 12:30pm</span>
                </div>
              </div>

            </div>
          
         

         
          </div>
         

        
          </div>
        )}
        {activeTab === "upcoming" && (
          <div className=" mb-[10px] flex flex-wrap py-2">
            {/* Upcoming Events Content */}
              {/* Upcoming Events */}
        
          <div className="">
            <div className="font-semibold mb-[10px]">Upcoming Events</div>
            <div className="max-sm:w-[170px] w-[200px] h-auto bg-white rounded-md cursor-pointer pb-[10px] ">
            <div className="w-full max-sm:h-[100px] h-[120px] rounded-s-sm overflow-hidden">
                <img src={pics1} className="w-full h-full object-fill"/>
              </div>
              {/* Text */}
                <div className="flex">
                <div className="flex flex-col  px-[10px]">
                <span className="text-[12px] font-normal mb-[-10px]">APR</span>
                <span className="font-extrabold text-[24px] m-[0]">12</span>
              </div>
              
              <div className="flex flex-col text-[13px]">
                <span className="font-extrabold text-[18px] max-sm:text-[15px] mb-[-3px]">TCN WOMEN</span>
                <div className="flex text-black font-bold mb-[5px]">
                <span className="text-[8px] max-sm:text-[6px]">THUR. 10:10AM</span>
                <span className="text-[8px] mx-[4px]">-</span>
                <span className="text-[8px] max-sm:text-[6px]">Iganmu, Coastin Lagos</span>
                </div>

                <div className="flex gap-[2px]">
                {/* IMage */}
              {Data.map((data)=>(
                  <div className="w-[30px] h-[30px] max-sm:w-[25px] max-sm:h-[25px] rounded-[50%] object-cover">
                  <img src={data.person} className="border-2 border-gray-100 w-full rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200"/>
                </div>
              ))}
              <div className="border-2 border-gray-100 max-sm:py-[1px] max-sm:px-[3px] py-[3px] px-[5px] rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200">
                +9
              </div>
              </div>
              </div>
              
                </div>
                {/* End of Text */}

            </div>
          </div>
       
           
          </div>
        )}

        {activeTab === "registered" &&(
           <div className="flex flex-wrap mb-[10px] py-2">
              {/* Registered Events */}
        
          <div className="">
            <div className="font-semibold mb-[10px]">Registered Events</div>
            <div className="w-[200px] h-auto bg-white rounded-md cursor-pointer pb-[10px] ">
            <div className="w-full h-[120px] rounded-s-sm overflow-hidden">
                <img src={pics1} className="w-full h-full object-fill"/>
              </div>
              {/* Text */}
                <div className="flex">
                <div className="flex flex-col  px-[10px]">
                <span className="text-[12px] font-normal mb-[-10px]">APR</span>
                <span className="font-extrabold text-[24px] m-[0]">12</span>
              </div>
              
              <div className="flex flex-col text-[13px]">
                <span className="font-extrabold text-[18px] mb-[-3px]">TCN WOMEN</span>
                <div className="flex text-black font-bold mb-[5px]">
                <span className="text-[8px]">THUR. 10:10AM</span>
                <span className="text-[8px] mx-[4px]">-</span>
                <span className="text-[8px]">Iganmu, Coastin Lagos</span>
                </div>

                <div className="flex gap-[2px]">
                {/* IMage */}
              {Data.map((data)=>(
                  <div className="w-[30px] h-[30px] rounded-[50%] object-cover">
                  <img src={data.person} className="border-2 border-gray-100 w-full rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200"/>
                </div>
              ))}
              <div className="border-2 border-gray-100 py-[3px] px-[5px] rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200">
                +9
              </div>
              </div>
              </div>
              
                </div>
                {/* End of Text */}

            </div>
          </div>
       
           </div>
        )}

{joinEvent?
             <div className="h-screen object-cover z-[999] top-0 absolute left-0 bg-teal-100/65 w-full flex">
             <div className="flex justify-center items-center w-full h-full" >
           <div className="h-auto w-[40%] p-[20px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
           <div className="flex items-center w-full justify-between border-b-2 pb-[15px]">
             <span className="text-[20px] font-semibold">Join Events</span>
             <RxCross2 className="text-[30px] border-2  rounded-[50%] p-[5px] cursor-pointer" onClick={()=>{setJoinEvent(false)}} />
             </div>
             {/* Joining Events */}
             <div className="flex gap-7 mt-[10px]">
                {/* Events Title */}
                <div>
                <label className="text-[14px] font-semibold ml-[10px]">Full Name <span className="text-red-400">*</span></label>
                <input type="text" placeholder="Enter User Name" className=" w-full px-[10px] py-[10px] text-[12px] border-2  rounded-[10px] focus:outline-none" />
              </div>
              {/* End Of Events Title */}

              {/* Selecting of Files */}
              <div>
                <label className="text-[14px] font-semibold ml-[10px]"> Events Date and Time <span className="text-red-400">*</span></label>
                <input type="text" disabled  placeholder="August , 23 2024 : 9:00AM" className="  px-[10px] py-[10px] w-full text-[12px] border-2  rounded-[10px] focus:outline-none  " />
              </div>
              {/* End Of Selecting of Files */}
              </div>

              <div className="flex gap-7 mt-[10px]">
                {/* Email */}
                <div>
                <label className="text-[14px] font-semibold ml-[10px]">Your Email <span className="text-red-400">*</span></label>
                <input type="text" placeholder="ajayisegun2003@gmail.com" className=" w-full px-[10px] py-[10px] text-[12px] border-2  rounded-[10px] focus:outline-none" />
                <div className="mt-[5px] text-[11px] flex items-center w-full">
                <span className="px-[5px]  mr-[5px]  bg-teal-700 text-white rounded-[50%] flex justify-center text-[9px] items-center">?</span>
                  <span >Email Address</span>
                </div>
              </div>
              {/* End Of Email */}

              {/* Contact Number */}
              <div>
                <label className="text-[14px] font-semibold ml-[10px]"> Contact Number <span className="text-red-400">*</span></label>
                <input type="text"   placeholder="Mobile Number" className="  px-[10px] py-[10px] w-full text-[12px] border-2  rounded-[10px] focus:outline-none  " />
                <div className="mt-[5px] text-[11px] flex items-center w-full">
                <span className="px-[5px]  mr-[5px]  bg-teal-700 text-white rounded-[50%] flex justify-center text-[9px] items-center">?</span>
                  <span >+2347042604550</span>
                </div>
              </div>
              {/* End Of Contact Number */}
              </div>

              <div className="flex gap-7 mt-[10px]">
                {/* Events Title */}
                <div>
                <label className="text-[14px] font-semibold ml-[10px]"> Events Title<span className="text-red-400">*</span></label>
                <input type="text" disabled placeholder="Global Prayer" className=" w-full px-[10px] py-[10px] text-[12px] border-2  rounded-[10px] focus:outline-none" />
              </div>
              {/* End Of Events Title */}

              {/* Selecting of Files */}
              <div>
                <label className="text-[14px] font-semibold ml-[10px]"> Location <span className="text-red-400">*</span></label>
                <input type="text" disabled  placeholder="23 Houston,Texas Lagos" className="  px-[10px] py-[10px] w-full text-[12px] border-2  rounded-[10px] focus:outline-none  " />
              </div>
              {/* End Of Selecting of Files */}
              </div>
 {/* Description*/}
 <div>
                <label className="text-[14px] font-semibold ml-[10px]">Do you have any ous<span className="text-red-400">*</span></label>
                <textarea maxLength={1000} placeholder="Note" className="w-full h-[100px] px-[10px] py-[10px] text-[12px] border-2 rounded-[10px] focus:outline-none" />
              </div>
              {/* End Of Description*/}

              <div className="flex w-full justify-center gap-3 mt-[30px] text-white">
                <button className="text-[15px] w-full   bg-pink-400 rounded-3xl focus:outline-none" onClick={()=>setJoinEvent(false)}>Cancel</button>
                <button className="text-[15px] w-full px-[50px] py-[10px]  bg-teal-400 rounded-3xl focus:outline-none" onClick={Alert}>Create Event</button>
              </div>
            </div>
            </div>

            </div>
             : null}
      
       
      

      </div>
    </div>

  )
}

export default Events
