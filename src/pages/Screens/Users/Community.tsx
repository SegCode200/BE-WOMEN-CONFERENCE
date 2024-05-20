import { FaSearch } from "react-icons/fa"
import Head from "../../../components/Static/Head"
import pics from "../../../assets/Amazing pearls in worship @tcnikejacentre.jpg"
import { FaLocationDot } from "react-icons/fa6"

const Data =[
  {location: "Iganmu, Coastin Lagos", centre: "Iganmu WhatsApp Link", memeber: "300", photo: pics},
  {location: "Ikeja, Coastin Lagos", centre: "Ikeja WhatsApp Link", memeber: "50", photo: pics},
  {location: "Lekki, Coastin Lagos", centre: "Lekki WhatsApp Link", memeber: "100", photo: pics},
  {location: "Isolo, Coastin Lagos", centre: "Isolo WhatsApp Link", memeber: "300", photo: pics},
  {location: "Abuja, Coastin Lagos", centre: "Abuja WhatsApp Link", memeber: "600", photo: pics},
  {location: "Ibadan, Coastin Lagos", centre: "Ibadan WhatsApp Link", memeber: "600", photo: pics},
  {location: "Port-Harc, Coastin Lagos", centre: "Port-Harc WhatsApp Link", memeber: "600", photo: pics},
]


const Community = () => {
  return (

       <div className="bg-teal-50/45 h-screen md:w-[84%] lg:w-[84%] w-[100%]">
      <Head name="Community"/>
      <div className="w-full p-[15px] ">

       <div className="flex w-full justify-between items-center">
        <div className="w-full max-md:text-xs text-lg font-bold">Different TCN Women Whatsapp  Group Link</div>
        <div className="w-auto flex items-center gap-1">
            <FaSearch className="text-teal-500 max-sm:text-[15px]" />
            <input
             className="p-2 bg-transparent outline-none text-teal-500 border-b-2 duration-300 max-sm:placeholder:text-[12px] border-pink-500 placeholder-teal-500"
              placeholder="Search WhatsApp Link..."
            />
          </div>
       </div>
       <div className="w-full h-auto  mt-[10px] ">
             <span className=" text-[20px] flex font-extrabold mb-[10px]">35 Whatsapp Link</span>
   
             <div className="flex gap-4 flex-wrap max-md:justify-between">
      {Data.map((props, index)=>(
           
             <div className="w-[200px] max-md:w-[140px] h-auto bg-gray-50 rounded-md cursor-pointer pb-[10px] " key={index}>
               <div className="w-full h-[120px] max-md:h-[80px] rounded-s-sm overflow-hidden">
                   <img src={props.photo} className="w-full h-full object-fill"/>
                 </div>
                 {/* Text */}
                   <div className="flex ml-[10px]">
                  
                 
                 <div className="flex flex-col text-[13px]">
                   <span className="font-extrabold text-[15px] mt-[3px] mb-[-3px] max-md:text-[13px]">{props.centre}</span>
                   <div className="flex text-black font-bold my-[5px]">
                   <FaLocationDot className="mr-[10px] " size={10}/>
                   <span className="text-[8px]">{props.location}</span>
                   </div>
   
                   <div className="flex gap-[2px]">
                   {/* IMage */}
                 {/* {Data.map((data)=>(
                     <div className="w-[30px] h-[30px] rounded-[50%] object-cover">
                     <img src={data.person} className="border-2 border-gray-100 w-full rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200"/>
                   </div>
                 ))} */}
                 <div className="border-2 border-gray-100 py-[3px] px-[5px] rounded-[6px] bg-gradient-to-r from-teal-500 to-pink-600 text-white shadow-lg cursor-pointer object-cover hover:border-gray-200 max-md:text-[10px]">
                   +{props.memeber} members
                 </div>
                 </div>
                 </div>
                 
                   </div>
                   {/* End of Text */}
   
               </div>
      ))}
      </div>
   </div>

      </div>

    </div>
  )
}

export default Community
