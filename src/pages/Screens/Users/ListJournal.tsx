import { useState } from "react";
import Head from "../../../components/Static/Head"
import pics from "../../../assets/20 Ways Churches can Encourage Prayer_1619798433_600x400.webp"
import { FaClock, FaTimeline } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
// import { RiTimerFlashLine } from "react-icons/ri"






const Data =[
  {id:1, title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "9:38am", date: "Nov 4 2024", photo: pics},
  {id:2,title: "Frontend Topic", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "9:18am", date: "Nov 4 2024", photo: pics},
  {id:3,title: "Make a good choice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "5:30am", date: "Nov 2 2024", photo: pics},
  {id:4,title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
  {id:5,title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
  {id:6,title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
]


const ListJournal = () => {

  const [selectedJournal, setSelectedJournal] = useState(null);
  const [openJournal, closeJournal] = useState(false);

  const handleSelectJournal = (Journal) => {
    setSelectedJournal(Journal);
  };


  const JournalList = ({ Journal, onSelectJournal })  => {
    return (
      <div className=" border-r-[3px] lg:border-r-teal-600 sm:w-[300px]  lg:w-[450px]  sm:overflow-y-scroll">
        <h2 className="text-2xl font-bold text-gray-900">List of all Journal </h2>
      {/* Holder */}
      
   
         {Journal.map((Journal)=>(
      <div className=" bg-teal-100 border-y-[1px] flex flex-col border-y-slate-400 cursor-pointer mt-[1px] " key={Journal.id} onClick={()=>{
        onSelectJournal(Journal)
        closeJournal(true)
      }} >
      <span className="text-pink-500 font-semibold">{Journal.title}</span>
      <span className="text-[13px]">{Journal.description.substring(0,90)}</span>
      <div className="text-[12px] font-bold mt-[5px] flex text-teal-700 ">
        <span className="flex items-center mr-[5px]"> <FaClock className="mr-[5px]"/>{Journal.time}</span>
        <span className="flex items-center "> <FaTimeline className="mr-[5px]"/>{Journal.date}</span>
      </div>
    </div>
  ))}
      </div>
    );
  };
  const JournalDetails = ({ Journal }) => {
    return (
      <div className="bg-white p-4">
        <div className="flex items-center  mb-4 w-full justify-between">
        <h2 className="text-xl max-md:text-sm font-bold bg-teal-700 text-white p-[5px] ">{Journal.title}</h2>
        <div className="flex font-semibold text-[12px] text-pink-500 items-center gap-[5px]">
          <FaClock className=""/>
          <span className="">{Journal.date}</span>
          <span>{Journal.time}</span>
        </div>
        </div>
        <div className="w-[300px] h-[200px] max-md:w-[99%] max-md:h-[150px] mb-[10px]">
          <img src={Journal.photo} className="w-full h-full"/>
        </div>
        <p className="text-teal-500 font-normal">{Journal.description}</p>
        <div className="text-pink-800 flex mt-[20px] cursor-pointer">
          <FaRegEdit size={30}/>
        </div>
      
      </div>
    );
  };
  const JournalDetails1 = ({ Journal }) => {
    return (
        <div className="h-screen object-cover z-[9999] top-0 absolute left-0 bg-teal-200/65 w-full flex justify-center items-center">
          <div>
              <RxCross2 className="text-[30px] text-white  absolute right-[5%]  top-[12%]    rounded-[50%]  p-[5px] cursor-pointer bg-pink-500" onClick={()=>(
                closeJournal(false)
              )}/>
              </div>
             <div className="bg-white p-4 w-[80%]">
        <div className="flex items-center  mb-4 w-full justify-between">
        <h2 className="text-xs  font-bold bg-teal-700 text-white p-[5px] ">{Journal.title}</h2>
        <div className="flex font-semibold text-[12px] text-pink-500 items-center gap-[5px]">
          <FaClock className=""/>
          <span className="">{Journal.date}</span>
          <span>{Journal.time}</span>
        </div>
        </div>
        <div className="w-[230px] h-[150px] mb-[10px]">
          <img src={Journal.photo} className="w-full h-full"/>
        </div>
        <p className="text-teal-500 font-normal text-[13px]">{Journal.description}</p>
        <div className="text-pink-800 flex mt-[20px] cursor-pointer">
          <FaRegEdit size={30}/>
        </div>
      
      </div>

        </div>
    );
  };
  return (
    <div className=" bg-teal-50/45 h-screen md:w-[84%] lg:w-[84%] w-[100%]">
    <div>
    <Head name="Journal"/>
    </div>
    <div className="flex justify-between w-full items-start max-sm:flex-col ">
      <div className=" max-w-4xl p-4 ">
        <JournalList Journal={Data} onSelectJournal={handleSelectJournal} />
      </div>
      <div className="flex justify-start max-sm:hidden max-2xl:flex-2  p-4">
        {selectedJournal ? <JournalDetails Journal={selectedJournal} /> : <p>Select a Journal to view</p>
        }
      </div>
      <div className="flex justify-start sm:hidden max-2xl:flex-2 p-4">
        {selectedJournal ? (openJournal? <JournalDetails1 Journal={selectedJournal} /> :null) : <p>Select a Journal to view</p>
        }
      </div>
      
    </div>
  </div>
  )
}

export default ListJournal

