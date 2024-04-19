import Head from "../../components/Static/Head"
import {FaClock, FaTimeline} from "react-icons/fa6"
// import { MdOutlineBookmarkAdd } from "react-icons/md"
// import { FaDeleteLeft } from "react-icons/fa6"
// import pics from "../../assets/20 Ways Churches can Encourage Prayer_1619798433_600x400.webp"


const HomeScreen = () => {
  const [journal, setJournal] = useState('')
  return (
    <div className="h-screen bg-teal-50/45">
      <Head name="Dashboard"/>
      <div className="px-[15px] flex">
           
            
   <div className="h-[calc(100vh-60px)] border-r-[3px] border-r-teal-600 w-[250px] overflow-y-scroll">
    {/* Holder */}
    <h1 className="text-2xl font-bold text-gray-900">List of all Journal </h1>
    <div className=" bg-teal-100 border-y-[1px] flex flex-col border-y-slate-400 cursor-pointer">
      <span className="text-pink-500 font-semibold">My Biggest Dream</span>
      <span className="text-[13px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo magnam commodi!</span>
      <div className="text-[12px] font-bold mt-[5px] flex ">
        <span className="flex items-center mr-[5px]"> <FaClock className="mr-[5px]"/>9:38am</span>
        <span className="flex items-center "> <FaTimeline className="mr-[5px]"/>Nov 4 2024</span>
      </div>
    </div>
    <div className=" bg-teal-100 border-y-[1px] my-[3px] flex flex-col border-y-slate-400 cursor-pointer">
      <span className="text-pink-500 font-semibold">My Biggest Dream</span>
      <span className="text-[13px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque explicabo magnam commodi!</span>
      <div className="text-[12px] font-bold mt-[5px] flex ">
        <span className="flex items-center mr-[5px]"> <FaClock className="mr-[5px]"/>9:38am</span>
        <span className="flex items-center "> <FaTimeline className="mr-[5px]"/>Nov 4 2024</span>
      </div>
    </div>
   </div>
      </div>
      {/* Journal View */}
      <div>
        <div>
          const [journal, setJournal] = useState('')

        </div>
      </div>

    </div>
  )
}

export default HomeScreen
