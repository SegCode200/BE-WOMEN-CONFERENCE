import { FaJournalWhills } from "react-icons/fa"
import { PiHandsPrayingLight } from "react-icons/pi";
import { GrAnnounce } from "react-icons/gr"
import { PiChurchLight } from "react-icons/pi"
import pics from "../../assets/bewomenconference-05042024-0002.jpg"
import pics1 from "../../assets/Amazing pearls in worship @tcnikejacentre.jpg"




const Data = [
    {title: "Journal", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea nulla excepturi dignissimos in earum minima quo debitis inventore dolor error aspernatur, tempora culpa deserunt dolorum omnis officiis numquam fugiat.", icon: <FaJournalWhills/> },
    {title: "Prayer", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea nulla excepturi dignissimos in earum minima quo debitis inventore dolor error aspernatur, tempora culpa deserunt dolorum omnis officiis numquam fugiat.", icon: <PiHandsPrayingLight/> },
    {title: "Events", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea nulla excepturi dignissimos in earum minima quo debitis inventore dolor error aspernatur, tempora culpa deserunt dolorum omnis officiis numquam fugiat.", icon: <GrAnnounce/> },
    {title: "Church Community", description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea nulla excepturi dignissimos in earum minima quo debitis inventore dolor error aspernatur, tempora culpa deserunt dolorum omnis officiis numquam fugiat.", icon: <PiChurchLight/> },
]
const TheAboutPage = () => {

  return (
    <div className="w-full h-auto py-[30px] flex items-center justify-center">
        <div className="w-[90%] flex">


                {/* Main  */}
            <div className="main  w-full" >
                <div className="upside flex">

                    <div className="leftside flex flex-col w-[50%] justify-center">
                        {Data.map((props,index)=>(
                            <div className="group flex items-center cursor-pointer hover:bg-teal-400 p-[15px]  hover:text-white" key={index}>
                            <div className="flex flex-col hover:text-white  items-end ">
                            <span className="text-[20px] uppercase font-semibold mb-[10px] ">{props.title}</span>
                            <span className="group-hover:text-white text-justify text-gray-400 font-medium">{props.description}</span>
                            </div>

                            {/* Icon */}
                            <div className="bg-teal-400 p-[25px] rounded-[50%] text-[50px] text-white mx-[20px] group-hover:bg-white group-hover:text-teal-400">
                                {props.icon}
                            </div>
                        </div>

                        ))}
                        

                    </div>

                    <div className="rightside">
                        <img src={pics}/>

                    </div>

                </div>


                <div className="downside flex w-full">
                    <div className="leftside w-[50%]">
                        <img src={pics1}/>

                    </div>

                    <div className="rightside flex justify-center ml-[25px] w-[50%] flex-col">
                        <span className="text-[30px] mb-[20px] uppercase font-semibold">Welcome to TCN BE WOMEN</span>
                        <span>The TCN Women's group was birthed with a vision to create avenues for women to grow in their relationship with God, whilst also forming bonds with one another and finding a place to thrive.</span>
                        <div className="flex items-center mt-[20px]">

                        <div className="members flex flex-col items-center   ">
                            <span className="text-teal-500 text-[25px] font-semibold">40,000</span>
                            <span className="text-[14px]">Members</span>
                        </div>
                        <div className="members flex flex-col ml-[60px] items-center">
                            <span className="text-teal-500 text-[25px] font-semibold">7000</span>
                            <span className="text-[14px]">Pastors</span>
                        </div>
                        <div className="members flex flex-col items-center ml-[60px]">
                            <span className="text-teal-500 text-[25px] font-semibold">100</span>
                            <span className="text-[14px]">Community</span>
                        </div>
                        <div className="members flex flex-col items-center ml-[60px]">
                            <span className="text-teal-500 text-[25px] font-semibold">90</span>
                            <span className="text-[14px]">Church</span>
                        </div>


                        </div>

                    </div>


                </div>


            </div>






        </div>
      
    </div>
  )
}

export default TheAboutPage
