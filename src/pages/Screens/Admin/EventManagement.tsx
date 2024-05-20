import { useState } from "react"
import AdminHead from "../../../components/Static/AdminHead"
import {FaUserGroup, FaPlus,FaLocationDot} from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx"
import pics from "../../../assets/20 Ways Churches can Encourage Prayer_1619798433_600x400.webp"
import pics1 from "../../../assets/bewomenconference-05042024-0005.webp"
import person from "../../../assets/pastor toyin poju.webp"
// import pics from "../../../assets/8726082_3992547.jpg"



const Data =[
  {icon: <FaUserGroup/>, text: "Total Events", number: 120, color: "#0F766E"},
  {icon: <FaUserGroup/>, text: "Total Members", number: 130, color: "#BE185D"},
  {icon: <FaUserGroup/>, text: "Total Events", number: 20, color: "#3216b1"},
]
const Data1 =[
  {person},
  {person},
  {person},
 
]




const EventManagement = () => {
  
  const [createEvents, setCreateEvents] = useState(false)
  console.log(createEvents)

  const CloseCreateEvent = () => {
    setCreateEvents(false)
  }
  

  return (
    <div className="h-auto bg-teal-50/45  md:w-[84%] lg:w-[84%] w-[100%]">
    <AdminHead name="Event Management"/>
    {/* Holding First Header */}
    <div className="px-[15px] mt-[20px] flex gap-10  max-md:justify-between max-lg:flex-col">
      {/* First Event main */}
      <div className="flex items-center max-lg:gap-2 gap-2   max-lg:justify-between">
          {Data.map((data, index)=>(
            <div className="w-[240px] h-[150px] max-sm:w-auto md:w- max-lg:p-[3px] max-lg:h-[90px] p-[10px] bg-gray-200/50   flex flex-col " key={index}>
            <div className="w-full h-full flex items-center">
            <div className={` text-white rounded-[50%] flex p-[10px] border-2 border-white/95 max-sm:text-[15px] max-sm:p-[3px] text-[25px] shadow-md`} style={{backgroundColor: `${data.color}`}}>
              {data.icon}
            </div>
            <div className="flex flex-col ml-[10px]">
              <span className="font-semibold max-sm:text-[10px]" style={{color: `${data.color}`}}>{data.text}</span>
              <span className="font-semibold text-[30px] max-sm:text-[20px] mt-[-9px]">{data.number}</span>
            </div>
            </div>
            <div>
              <span className="font-normal text-[14px] ml-[5px] max-sm:text-[11px]">Show Details</span>
            </div>
    
          </div>
          ))}
      </div>
      {/* Adding Events */}
      <div className="w-[300px] max-sm:w-full h-[150px] max-sm:py-[7px] p-[10px] flex items-center bg-teal-600/50 rounded-[5px] cursor-pointer" onClick={()=>(setCreateEvents(true))}>
      <div className={` text-white rounded-[50%] flex p-[10px] border-2 border-white/95 text-[25px] shadow-md `} >
              <FaPlus/>
            </div>
            <div className="flex flex-col ml-[15px] text-white">
              <span className="font-semibold text-[19px]">New Events</span>
              <span className="text-[12px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut facere voluptas asperiores nihil!</span>
            </div>
        
      
      </div>


    </div>

       <div className="px-[15px] ">
           {/* Ongoing Events */}
           
           <div className="bg-gray-100 px-[20px] flex py-2 my-[10px] flex-col  ">
           <div className="mb-[10px] flex w-full justify-between text-[14px] "> 
            <span className="text-[17px] font-bold">Ongoing Events</span>
            <span className="text-pink-700 font-semibold text-[12px] cursor-pointer">View All</span>
           </div>
        <div className="flex flex-col w-[300px] h-[200px] border-2 p-[5px] rounded-[10px]">
          <div className="w-full h-[100px] rounded-[10px] overflow-hidden ">
            <img src={pics} className="w-full h-full object-cover"/>
          </div>
          <div className="flex w-full justify-between">
            <span className="text-[13px] font-bold">Women in Tech</span>
            <span className="flex items-center gap-[3px] font-bold text-[13px]"><FaLocationDot className="text-pink-600"/> Ikeja</span>
          </div>
          <div className="text-[10px] flex gap-[5px] mt-[5px] font-medium">
            <span>August 23th 2024</span>
            <span>9:00AM</span>
            <span>-</span>
            <span>12:00NOON</span>
          </div>
          <div className="flex gap-[-10px] mt-[4px] items-center">
                {/* IMage */}
              {Data1.map((data)=>(
                  <div className="w-[30px] h-[30px] rounded-[50%] object-cover">
                  <img src={data.person} className="border-2 border-gray-100 w-full rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200"/>
                </div>
              ))}
              <span className="text-[12px] font-medium ml-[5px]">250 Participants</span>
              </div>

        </div>

        </div>
       </div>
          {/* Upcoming Events */}
       <div className="px-[15px]">
       <div className="bg-gray-100 px-[20px] py-2 ">
          <div className="">
            <div className="flex justify-between mb-[10px]">
            <span className="font-semibold">Upcoming Events</span>
            <span className="font-semibold text-[12px]  text-pink-700 cursor-pointer">View All</span>
            </div>
            <div className="w-[200px] h-[200px] bg-white rounded-md cursor-pointer pb-[10px] ">
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
              {Data1.map((data)=>(
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
       </div>

       {createEvents &&
          (<div className="h-auto md:max-md:h-screen  lg:h-screen  object-cover z-[9999] top-0 absolute left-0 bg-teal-100/65 w-full lg:fixed lg: flex justify-center items-center">
          <div className="flex justify-center items-center w-full h-full" >
        <div className="h-[98%] w-auto max-lg:h-auto max-lg:w-[95%] p-[20px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
             {/* Header */}
         <div className="flex items-center w-full justify-between border-b-2 pb-[15px]">
         <span className="text-[20px] font-semibold">Create a New Events</span>
         <div >
         <RxCross2 className="text-[30px] border-2  rounded-[50%] p-[5px] cursor-pointer" onClick={CloseCreateEvent}  />
         </div>
         </div>

        {/* Adding Events Details */}
        <div className="mt-[30px]">
          {/* Holding First Events */}
          <div className="flex gap-10 justify-between   max-lg:flex-col">
            {/* Events Title */}
            <div className="flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]">Event Title <span className="text-red-400">*</span></label>
            <input type="text" placeholder="Enter User Name" className="w-[250px] px-[10px] py-[10px] max-lg:w-[280px]   text-[12px] border-2 border-[#046667] rounded-[10px] focus:outline-none" />
          </div>
          {/* End Of Events Title */}

          {/* Selecting of Files */}
          <div className="flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]"> Select Your Image <span className="text-red-400">*</span></label>
            <input type="file" accept="image/*"  placeholder="" className="w-[270px]  pl-[2px] py-[2px] max-sm:w-auto file:p-[9px] file:rounded-[5px] file:border-none  text-[12px] border-2 border-[#046667] rounded-[10px] focus:outline-none  " />
          </div>
          {/* End Of Selecting of Files */}

            {/* Events Date and Time */}
            <div className="flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]"> Select Date and Time <span className="text-red-400">*</span></label>
            <input type="datetime-local" placeholder="" className="w-[270px]  p-[10px] py-[10px] file:p-[9px] file:rounded-[5px] file:border-none  text-[12px] border-2 border-[#046667] rounded-[10px] focus:outline-none  " />  
            <div className="mt-[5px] text-[11px] flex items-center w-full">
            <span className="px-[5px]  mr-[5px]  bg-teal-700 text-white rounded-[50%] flex justify-center text-[9px] items-center">?</span>
              <span >Events Start Date</span>
            </div>
          </div>
          {/* End Of Events Date and Time */}
          </div>
          {/* End of First Holding Events */}

            {/* Description*/}
            <div className="flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]">Event Title <span className="text-red-400">*</span></label>
            <textarea maxLength={1000} placeholder="Note" className="w-full h-[100px] px-[10px] py-[10px] text-[12px] border-2 rounded-[10px] focus:outline-none" />
          </div>
          {/* End Of Description*/}

          {/* Holding Second Events */}
          <div className="flex gap-10 justify-between max-lg:flex-col ">
            {/* Host Name */}
            <div className="flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]">Host Name <span className="text-red-400">*</span></label>
            <input type="text" placeholder="Full Name" className="w-[250px]  px-[10px] py-[10px] text-[12px] max-sm:w-[280px] border-2 border-[#046667] rounded-[10px] focus:outline-none" />
          </div>
          {/* End Of Host Name */}

          {/* Meeting Link */}
          <div className="flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]"> Meeting Link<span className="text-red-400">*</span></label>
            <input type="url"   placeholder="Meeting Link" className="w-[300px]  px-[10px] py-[10px]  text-[12px] border-2 border-[#046667] rounded-[10px] focus:outline-none  " />
            <div className="mt-[5px] text-[11px] flex items-center w-full">
            <span className="px-[5px]  mr-[5px]  bg-teal-700 text-white rounded-[50%] flex justify-center text-[9px] items-center">?</span>
              <span >Zoom, Google, Skype, Mixlr</span>
            </div>
          </div>
          {/* End Of Meeting Link */}

            {/* Contact Number */}
            <div className="flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]"> Contact Number <span className="text-red-400">*</span></label>
            <input type="number" placeholder="Mobile Number" className="w-[270px]  p-[10px] py-[10px] file:p-[9px] file:rounded-[5px] file:border-none  text-[12px] border-2 border-[#046667] rounded-[10px] focus:outline-none  " />
            <div className="mt-[5px] text-[11px] flex items-center w-full">
              <span className="px-[5px]  mr-[5px]  bg-teal-700 text-white rounded-[50%] flex justify-center text-[9px] items-center">?</span>
              <span >+2347042604550</span>
            </div>
          </div>
          {/* End Of Contact Number */}
          </div>
          {/* End of Second Holding Events */}




           {/* Holding Third Events */}
           <div className="flex gap-10 mt-[10px] justify-between max-lg:flex-col">
            {/* Event Type */}
            <div className="flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]">Event Type <span className="text-red-400">*</span></label>
            <input type="text" placeholder="Online/Location" className="w-[250px]  px-[10px] py-[10px] text-[12px] border-2 border-[#046667] rounded-[10px] max-sm:w-[280px] focus:outline-none" />
            <div className="mt-[5px] text-[11px] flex items-center w-full">
            <span className="px-[5px]  mr-[5px]  bg-teal-700 text-white rounded-[50%] flex justify-center text-[9px] items-center">?</span>
              <span >Set your Event Type</span>
            </div>
          </div>
          {/* End Of Event Type */}

          {/* Location Address */}
          <div className="flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]">Location Address (Optional)<span className="text-red-400">*</span></label>
            <input type="url"   placeholder=" Address" className="w-[300px]  px-[10px] py-[10px] text-[12px] max-sm:w-[270px] border-2 border-[#046667] rounded-[10px] focus:outline-none  " />
            <div className="mt-[5px] text-[11px] flex items-center w-full">
            <span className="px-[5px]  mr-[5px]  bg-teal-700 text-white rounded-[50%] flex justify-center text-[9px] items-center">?</span>
              <span >234 Houston, Texas, Usa</span>
            </div>
          </div>
          {/* End Of Location Address */}

            {/* Guest Link */}
            <div className="flex flex-col">
            <label className="text-[14px] font-semibold ml-[10px]"> Guest List <span className="text-red-400">*</span></label>
            <input type="text" placeholder="Input or Select Guest" className="w-[280px]  p-[10px] py-[10px] file:p-[9px] file:rounded-[5px] file:border-none  text-[12px] max-sm:w-[300px] border-2 border-[#046667] rounded-[10px] focus:outline-none  " />
            <div className="mt-[5px] text-[11px] flex items-center w-full">
              <span className="px-[5px]  mr-[5px]  bg-teal-700 text-white rounded-[50%] flex justify-center text-[9px] items-center">?</span>
              <span >Searching Guest Member Name</span>
            </div>
          </div>
          {/* End Of Guest List */}
          </div>
          {/* End of Third Holding Events */}

           {/* Button */}
           <div className="flex w-full justify-end gap-3 mt-[30px] md:max-lg:justify-start text-white">
            <button className="text-[15px] max-sm:px-[30px]  px-[30px] py-[10px] bg-pink-400 rounded-3xl focus:outline-none" onClick={()=>setCreateEvents(false)}>Cancel</button>
            <button className="text-[15px] max-sm:px-[40px] px-[50px] py-[10px]  bg-teal-400 rounded-3xl focus:outline-none">Create Event</button>
          </div>
          </div>
          {/* End Of Adding Events Details */}

        </div>
        </div>

      </div>)
           }
 

  </div>
  )
}

export default EventManagement
