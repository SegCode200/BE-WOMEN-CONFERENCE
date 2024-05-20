import { DayPicker } from "react-day-picker"
import 'react-day-picker/dist/style.css';
import Head from '../../../components/Static/Head'
import pics from "../../../assets/Journalling.jpg"
import pics1 from "../../../assets/JournalPics.png"
import pics2 from "../../../assets/Sea-with-the-ship-sunset-.png"
import pics3 from "../../../assets/SeaLighthouse-day.png"
import { BsThreeDotsVertical } from "react-icons/bs"
import pics4 from "../../../assets/Street-day.png"
import {Chart as ChartJs, ArcElement, Tooltip, Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js"
import {Doughnut} from "react-chartjs-2"
ChartJs.register(ArcElement, Tooltip, Legend,   CategoryScale,
  LinearScale,
  BarElement,
  Title,)

import { IoIosArrowForward } from "react-icons/io"
import { FaBookJournalWhills,FaArrowRightLong   } from "react-icons/fa6"





const Data =[
  {text: "Personal Information", created: "2015/01/01", imge: pics1, time: "3:00PM"},
  {text: "Mental", created: "2016/06/19", imge: pics, time: "8:23AM"},
  {text: "Mental", created: "2016/06/19", imge: pics1, time: "8:23AM"},
]
const JournalData =[
  {title: "Personal Journal", img: pics2, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
  {title: "Mental", img: pics3, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
  {title: "Love Story", img: pics4, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
  {title: "Love Story", img: pics4, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
 
]
const PromptData= [
  {date: "13th December 2024", description: " Lorem ipsum dolor sit amet, consectetur adip"},
  {date: "13th December 2024", description: " Lorem ipsum dolor sit amet, consectetur adip"},
  {date: "13th December 2024", description: " Lorem ipsum dolor sit amet, consectetur adip"},
]


const UserDashboard = () => {

 

  const data = {
    datasets: [{
      data: [3,6],
      backgroundColor: ["teal", "pink"],
      borderColor: ["teal", "pink"],
      borderWidth: 1
    }]
  };
  
  return (
    <div className=" h-auto bg-teal-50/45 md:w-[84%] lg:w-[84%] w-[100%] ">
    <Head name="Dashboard"/>
      <div className='p-[15px] flex w-full max-md:flex max-lg:flex-col justify-between gap-[30px]'>
        {/* Left Side */}
        <div className='flex-1 max-lg:order-2'>
                {/* Intro Name */}
      <div className='flex flex-col'>
        <span className='text-[35px] font-bold text-teal-600'>Hello, Godwin Travis</span>
        <span className='text-[18px] font-medium text-gray-400'>How it's going on?</span>
      </div>
     

      {/* Recent Journal */}
      <div className='mt-[20px]'>
        <div className='flex items-center justify-between'>
          <span className='text-[25px] font-extrabold md:text-2xl'>Today's Journal</span>
          <button className='bg-teal-600 text-white'>Add New +</button>
        </div>
       
       <div className="max-sm:grid max-sm:grid-cols-2 flex justify-between sm:flex-none gap-4  mt-[10px]">
        {Data.map((data, index)=>(
           <div style={{backgroundImage: `url(${data.imge})`}} className='w-[250px] h-[250px] rounded-lg  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] max-sm:w-[150px] max-sm:h-[150px]  bg-no-repeat bg-cover transform hover:scale-95 transition duration-500 ease-in-out' key={index}>
           <div className="bg-teal-700/25 w-full h-full p-[10px] rounded-lg">
           <div className="flex flex-col justify-end h-full items-start">
               {/* Icons */}
               <div className="p-[10px] text-[20px] max-lg:text-[15px] max-lg:p-[5px] rounded-[5px] bg-white/55 flex ">
                 <FaBookJournalWhills/>
               </div>
               <div className="text-white flex flex-col font-bold ">
                 <span className="text-[20px] max-lg:text-[14px]">{data.text}</span>
                 <span className="text-[13px] text-white/85 max-lg:text-[12px]">Created at {data.created} </span>
                 <span className="text-[13px] text-white/85 max-lg:text-[12px]">{data.time} </span>
               </div>
   
             </div>
   
               </div>
            
             
   
           </div>
        ))}

       </div>

        <div className="flex  justify-between gap-7 items-center">
                {/* Today's Prompt prayer for Mobile view */}
      <div className="mt-[15px]  max-sm:w-full lg:hidden">
        <div className="flex justify-between items-center max-lg:w-full">
        <span className="text-[17px] font-extrabold text-black/70">Todays Prayer Prompt</span>
          <div className="p-[3px] text-[10px]  text-teal-800 rounded-[5px] bg-teal-500/55 flex " >
                 <FaBookJournalWhills/>
               </div>
        </div>

        
         <div className="w-full p-[10px] rounded-md h-auto bg-white shadow-[rgba(50,_50,_105,_0.15)_3px_2px_5px_3px,_rgba(0,_0,_0,_0.05)_3px_3px_3px_3px] flex justify- items-start  cursor-pointer mt-[10px]">
        
        {/* Text */}
  <div>
        <div>
      <label className="text-[11px] font-semibold ml-[10px]">What are u grateful about today <span className="text-red-400">*</span></label>
      <textarea maxLength={1000} placeholder="Note" className="w-full h-[100px] px-[10px] py-[10px] text-[12px] border-2 rounded-[10px] focus:outline-none" />
      <div className="flex gap-4 w-full">
    <button type="button" className="bg-pink-500 w-full text-white">Cancel</button>
    <button type="reset" className="bg-teal-500 w-full text-white">Submit</button>
  </div>
    </div>
  </div>
 

  </div>




        </div>
         {/* Upcoming Events for Mobile View */}
      <div className="p-[10px]  mt-[10px] flex-1 max-sm:hidden lg:hidden">
          <div className="flex w-full justify-between items-center">
          <span className="text-[17px] font-extrabold text-black/70">Upcoming Events</span>
          <div>
            <BsThreeDotsVertical/>
          </div>
          </div>
         {/* Holder */}
      <div className="mt-[20px]">
        {PromptData.map((prompt, index)=>(
             <div className="flex w-full gap-3 items-start " key={index}>
             {/* Circle line Design */}
          <div className="flex flex-col items-center ">
          <div className="w-[14px] h-[14px] rounded-[50%] border-2 flex justify-center items-center border-red-500  ">
            <div className="w-[6px] h-[6px]  rounded-[50%]  bg-red-500"></div>
           </div>
           <div className="border w-[1px] h-[90px]"></div>
          </div>
    
           <div className=" w-full">
              {/* Main Card */}
             <div className="w-full p-[10px] rounded-md h-auto bg-white shadow-[rgba(50,_50,_105,_0.15)_3px_2px_5px_3px,_rgba(0,_0,_0,_0.05)_3px_3px_3px_3px] flex justify- items-start  transform hover:scale-95 transition duration-500 ease-in-out cursor-pointer">
             <div className="flex flex-col ">
             <span className="text-[12px] text-pink-700 font-semibold ">{prompt.date}</span>
              <span className="text-[14px] mt-[8px] font-medium">{prompt.description}</span>
             </div>
    
    </div>
             </div>
    
             </div> 
        ))}
      </div>
      

        </div>

        </div>

       

      <div className="flex w-full justify-between  max-sm:flex-col py-[10px]">
      <div className="flex flex-col rounded-2xl bg-white w-[70%] max-sm:w-full mt-[20px] h-auto shadow-[rgba(50,_50,_105,_0.15)_3px_2px_5px_3px,_rgba(0,_0,_0,_0.05)_3px_3px_3px_3px] p-[15px]">
        <div className="w-full justify-between items-center flex">
        <span className="text-[25px] font-extrabold text-black/70">Recent Journals</span>
        <span className="text-[13px] font-bold text-pink-600 flex items-center cursor-pointer">View All 
        <div className="mx-[10px] text-white bg-pink-600 p-[2px] text-[10px] rounded-[50%]">
        <IoIosArrowForward/>
          </div>
          </span>
         
        </div>
        
        <div className="mt-[10px] flex-col flex gap-[10px]">
           {JournalData.map((data, index)=>(
             <div className="flex items-center cursor-pointer" key={index}>
             {/* First Side */}
             <div className="flex w-full items-center">
             <div className="w-[50px] h-[50px] max-lg:w-[35px] max-lg:h-[35px]">
                <img src={data.img} className="w-full h-full object-cover rounded-md"/>
              </div>
              <div className="flex flex-col ml-[10px]">
                <span className="text-[14px] font-bold max-lg:text-[12px]">{data.title}</span>
                <span className="text-[10px] ">{data.description}</span>
              </div>
             </div>
              <div className="mx-[10px] text-teal-700 bg-teal-600/25 p-[5px] text-[12px] rounded-[50%]">
        <FaArrowRightLong/>
          </div>

            </div>
           ))}
          </div>


       </div>

       {/* Upcoming Events for Mobile View */}
      <div className="p-[10px] bg-teal-50/45 mt-[10px]   sm:hidden">
          <div className="flex w-full justify-between items-center">
          <span className="text-[17px] font-extrabold text-black/70">Upcoming Events</span>
          <div>
            <BsThreeDotsVertical/>
          </div>
          </div>
         {/* Holder */}
      <div className="mt-[20px]">
        {PromptData.map((prompt, index)=>(
             <div className="flex w-full gap-3 items-start " key={index}>
             {/* Circle line Design */}
          <div className="flex flex-col items-center ">
          <div className="w-[14px] h-[14px] rounded-[50%] border-2 flex justify-center items-center border-red-500  ">
            <div className="w-[6px] h-[6px]  rounded-[50%]  bg-red-500"></div>
           </div>
           <div className="border w-[1px] h-[90px]"></div>
          </div>
    
           <div className=" w-full">
              {/* Main Card */}
             <div className="w-full p-[10px] rounded-md h-auto bg-white shadow-[rgba(50,_50,_105,_0.15)_3px_2px_5px_3px,_rgba(0,_0,_0,_0.05)_3px_3px_3px_3px] flex justify- items-start  transform hover:scale-95 transition duration-500 ease-in-out cursor-pointer">
             <div className="flex flex-col ">
             <span className="text-[12px] text-pink-700 font-semibold ">{prompt.date}</span>
              <span className="text-[14px] mt-[8px] font-medium">{prompt.description}</span>
             </div>
    
    </div>
             </div>
    
             </div> 
        ))}
      </div>
      

        </div>

       <div className="flex flex-col rounded-2xl max-sm:w-full bg-white w-[27%] mt-[20px] h-[300px] shadow-[rgba(50,_50,_105,_0.15)_3px_2px_5px_3px,_rgba(0,_0,_0,_0.05)_3px_3px_3px_3px] p-[10px] justify-center items-center" >
        <span className="text-[20px] font-extrabold mb-[10px]">Journal App Visits</span>
       <div className="w-[60%] h-[60%]">
    <Doughnut data={data} />
    </div>
    <div className="flex w-full  justify-between my-[5px]">
      <span className="text-[14px] ">All Journal</span>
      <span className="text-[12px] font-semibold">13K</span>
    </div>
    <div className="flex w-full  justify-between my-[5px]">
      <span className="text-[14px]">All Journal</span>
      <span className="text-[12px] font-semibold">13K</span>
    </div>
    <div className="flex w-full  justify-between my-[5px]">
      <span className="text-[14px]">All Journal</span>
      <span className="text-[12px] font-semibold">13K</span>
    </div>

       </div>

      </div>


       <div>

       </div>
      </div>

        </div>

        {/* Right Side */}
        <div className='h-auto bg-white shadow-lg  max-lg:flex max-lg:flex-col w-[25%] max-lg:order-1 max-lg:w-full'>
        <div className="max-lg:hidden ">
              <DayPicker
              mode="multiple"
              style={{  color: "teal", width: "100%", marginLeft:"0px",}}
              styles={{day:{color: "teal" }, }}
              />
        </div>
        <div className=" hidden">
        <DayPicker
        mode="range"
          ISOWeek= {true}
          numberOfMonths={1}
          className="rounded-lg border h-[40px] border-gray-300 shadow"
          style={{ width: 'fit-content' }}
          showWeekNumber= {true}
          weekStartsOn={1}
          firstWeekContainsDate={1}
          showOutsideDays={true}
        />
        </div>
        {/* Todays Prompt Prayer for Destop View  */}
        <div className="p-[10px] bg-teal-50/45  max-lg:hidden ">
        <div className="flex justify-between items-center ">
        <span className="text-[17px] font-extrabold text-black/70">Todays Prayer Prompt</span>
          <div className="p-[3px] text-[10px]  text-teal-800 rounded-[5px] bg-teal-500/55 flex " >
                 <FaBookJournalWhills/>
               </div>
        </div>
        <div className="mt-[10px] flex flex-col gap-2">

        
            
        <div className="w-full p-[10px] rounded-md h-auto bg-white shadow-[rgba(50,_50,_105,_0.15)_3px_2px_5px_3px,_rgba(0,_0,_0,_0.05)_3px_3px_3px_3px] flex justify- items-start    cursor-pointer">
        
              {/* Text */}
        <div>
       
              <div>
            <label className="text-[11px] font-semibold ml-[10px]">What are u grateful about today <span className="text-red-400">*</span></label>
            <textarea maxLength={1000} placeholder="Note" className="w-full h-[100px] px-[10px] py-[10px] text-[12px] border-2 rounded-[10px] focus:outline-none" />
          </div>
          <div className="flex gap-4 w-full">
    <button type="button" className="bg-pink-500 w-full text-white">Cancel</button>
    <button type="reset" className="bg-teal-500 w-full text-white">Submit</button>
  </div>
        </div>

      

</div>

       

        </div>


        </div>
        <div className="p-[10px] bg-teal-50/45 mt-[10px] max-lg:hidden">
          <div className="flex w-full justify-between items-center">
          <span className="text-[17px] font-extrabold text-black/70">Upcoming Events</span>
          <div>
            <BsThreeDotsVertical/>
          </div>
          </div>
         {/* Holder */}
      <div className="mt-[20px]">
        {PromptData.map((prompt, index)=>(
             <div className="flex w-full gap-3 items-start " key={index}>
             {/* Circle line Design */}
          <div className="flex flex-col items-center ">
          <div className="w-[14px] h-[14px] rounded-[50%] border-2 flex justify-center items-center border-red-500  ">
            <div className="w-[6px] h-[6px]  rounded-[50%]  bg-red-500"></div>
           </div>
           <div className="border w-[1px] h-[90px]"></div>
          </div>
    
           <div className=" w-full">
              {/* Main Card */}
             <div className="w-full p-[10px] rounded-md h-auto bg-white shadow-[rgba(50,_50,_105,_0.15)_3px_2px_5px_3px,_rgba(0,_0,_0,_0.05)_3px_3px_3px_3px] flex justify- items-start  transform hover:scale-95 transition duration-500 ease-in-out cursor-pointer">
             <div className="flex flex-col ">
             <span className="text-[12px] text-pink-700 font-semibold ">{prompt.date}</span>
              <span className="text-[14px] mt-[8px] font-medium">{prompt.description}</span>
             </div>
    
    </div>
             </div>
    
             </div> 
        ))}
      </div>
      

        </div>

        </div>
  
      </div>
      
    </div>
  )
}


export default UserDashboard
