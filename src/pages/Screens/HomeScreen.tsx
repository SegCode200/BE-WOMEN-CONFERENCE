import Head from "../../components/Static/Head"
import { MdOutlineBookmarkAdd } from "react-icons/md"
import { FaDeleteLeft } from "react-icons/fa6"
import pics from "../../assets/20 Ways Churches can Encourage Prayer_1619798433_600x400.webp"


const HomeScreen = () => {
  return (
    <div className="h-screen bg-teal-50/45">
      <Head name="Dashboard"/>
      <div className="p-[15px]">
            <h1 className="text-2xl font-bold text-gray-900">List of your favourite Journal </h1>
   <div className="flex gap-10px">
    {/* Holder */}
           <div>
            <div className="w-[350px] h-[250px]">
            <img src={pics} className="w-full h-full"/>
            </div>
            <div className="w-[72%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, impedit est. 
            </div>
            <div className="text-[14px] text-pink-600 font-semibold">
              Sept,20th 2024
            </div>
            <div className="flex items-center mt-[10px]">
              <input placeholder="Prayer requests " className="focus:outline-none h-[40px] bg-slate-100 px-[10px] rounded-md"/>
              <div className="text-[30px] text-teal-600 mx-[10px]">
                <MdOutlineBookmarkAdd/>
              </div>
              <div className="text-[30px] text-teal-600 mx-[10px]">
                <FaDeleteLeft/>
              </div>
            </div>
           
          </div>
          {/* Holder 2 */}
          <div>
            <div className="w-[350px] h-[250px]">
            <img src={pics} className="w-full h-full"/>
            </div>
            <div className="w-[72%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, impedit est. 
            </div>
            <div className="text-[14px] text-pink-600 font-semibold">
              Sept,20th 2024
            </div>
            <div className="flex items-center mt-[10px]">
              <input placeholder="Prayer requests " className="focus:outline-none h-[40px] bg-slate-100 px-[10px] rounded-md"/>
              <div className="text-[30px] text-teal-600 mx-[10px]">
                <MdOutlineBookmarkAdd/>
              </div>
              <div className="text-[30px] text-teal-600 mx-[10px]">
                <FaDeleteLeft/>
              </div>
            </div>
           
          </div>
   </div>
      </div>
    </div>
  )
}

export default HomeScreen
