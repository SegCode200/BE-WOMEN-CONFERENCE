import { useState } from "react";
import Head from "../../components/Static/Head"
import pics from "../../assets/20 Ways Churches can Encourage Prayer_1619798433_600x400.webp"
import { FaClock, FaTimeline } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
// import { RiTimerFlashLine } from "react-icons/ri"






const Data =[
  {id:1, title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "9:38am", date: "Nov 4 2024", photo: pics},
  {id:2,title: "Frontend Topic", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "9:18am", date: "Nov 4 2024", photo: pics},
  {id:3,title: "Make a good choice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "5:30am", date: "Nov 2 2024", photo: pics},
  {id:4,title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
  {id:5,title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
  {id:6,title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
]


const HomeScreen = () => {

  const [selectedJournal, setSelectedJournal] = useState(null);

  const handleSelectJournal = (Journal) => {
    setSelectedJournal(Journal);
  };
  const JournalList = ({ Journal, onSelectJournal })  => {
    return (
      <div className="h-[calc(100vh-90px)] border-r-[3px] border-r-teal-600 w-[450px] overflow-y-scroll">
        <h2 className="text-2xl font-bold text-gray-900">List of all Journal </h2>
      {/* Holder */}
      
   
         {Journal.map((Journal)=>(
      <div className=" bg-teal-100 border-y-[1px] flex flex-col border-y-slate-400 cursor-pointer mt-[1px] " key={Journal.id} onClick={() => onSelectJournal(Journal)} >
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
      <div className="bg-white p-4 h-[calc(100vh-80px)]">
        <div className="flex items-center  mb-4 w-full justify-between">
        <h2 className="text-xl font-bold bg-teal-700 text-white p-[5px] ">{Journal.title}</h2>
        <div className="flex font-semibold text-[12px] text-pink-500 items-center gap-[5px]">
          <FaClock className=""/>
          <span className="">{Journal.date}</span>
          <span>{Journal.time}</span>
        </div>
        </div>
        <div className="w-[300px] h-[200px] mb-[10px]">
          <img src={Journal.photo} className="w-full h-full"/>
        </div>
        <p className="text-teal-500 font-normal">{Journal.description}</p>
        <div className="text-pink-800 flex mt-[20px] cursor-pointer">
          <FaRegEdit size={30}/>
        </div>
      
      </div>
    );
  };
  return (
    <div className="h-screen bg-teal-50/45">
    <div>
    <Head name="Journal"/>
    </div>
    <div className="flex justify-center items-start h-[calc(100vh-60px)] bg-gray-100">
      <div className="flex-1 max-w-4xl p-4">
        <JournalList Journal={Data} onSelectJournal={handleSelectJournal} />
      </div>
      <div className="flex justify-start w-full max-w-7xl p-4">
        {selectedJournal ? <JournalDetails Journal={selectedJournal} /> : <p>Select a Journal to view</p>
        }
      </div>
    </div>
  </div>
  )
}

export default HomeScreen

