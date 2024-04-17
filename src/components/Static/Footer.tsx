
import { BsTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { FaYoutube, FaInstagram,FaLocationDot } from "react-icons/fa6";
import { PiSpotifyLogo } from "react-icons/pi";
import { GrFacebookOption } from "react-icons/gr";
import pics from "../../assets/Radiant pearls from @tcnlekki (1).jpg"
import pics1 from "../../assets/Radiant pearls from @tcnlekki (2).jpg"
import pics2 from "../../assets/Radiant pearls from @tcnlekki (3).jpg"
import pics3 from "../../assets/Radiant pearls from @tcnlekki.jpg"
import pics4 from "../../assets/bewomenconference-05042024-0002.jpg"
import pics5 from "../../assets/bewomenconference-05042024-0013.webp"
import pics6 from "../../assets/bewomenconference-05042024-0009.webp"
import pics7 from "../../assets/bewomenconference-05042024-0013.webp"

const Data = [
  {Photo: pics},
  {Photo: pics1},
  {Photo: pics2},
  {Photo: pics3},
  {Photo: pics4},
  {Photo: pics5},
  {Photo: pics6},
  {Photo: pics7},
]

const Footer = () => {
  
  return (
    <div className="w-full h-[500px] py-[50px] flex items-center  justify-center  bg-teal-700 ">
      <div className="w-[90%] flex flex-col text-white ">
        {/* upper side */}
        <div className="flex w-full items-center justify-between border-b pb-[30px]">
          {/* left side */}
          <div className="w-[50%] flex">
            {/* first row */}
          <div className="flex flex-col w-full"> 
            <span className="uppercase font-semibold text-[18px] mb-[20px]">About TCN BE WOMEN</span>
            <span className="w-[70%] text-teal-100">The world has become so fast paced that people don’t want to stand by reading a page of information, they would much rather look at a presentation and understand the message. It has come to a point</span>

          </div>

          {/* Second  row */}
          <div className="flex flex-col w-[60%]"> 
            <span className="uppercase font-semibold text-[18px] mb-[20px]">Navigation link</span>
            <div className="flex gap-[40px]">
              {/* First side */}
              <div>
                <nav className="cursor-pointer hover:text-pink-500 ">Home</nav>
                <nav className="my-[10px] cursor-pointer hover:text-pink-500 ">Features</nav>
                <nav className="my-[10px] cursor-pointer hover:text-pink-500 ">Services</nav>
              </div>
              {/* Second Side */}
              <div>
                <nav className="cursor-pointer hover:text-pink-500 ">Home</nav>
                <nav className="my-[10px] cursor-pointer hover:text-pink-500 ">Features</nav>
                <nav className="my-[10px] cursor-pointer hover:text-pink-500 ">Services</nav>
              </div>

            </div>

          </div>
          </div>

          {/* Right Side */}
          <div className=" flex w-[40%] items-center ">
              {/* First Row */}
              <div className="flex flex-col w-full ">
                <span className="uppercase font-semibold text-[18px] mb-[20px]">
                  Contact us
                </span>
                <span className="flex  mb-[10px]">
                 <div className="mr-[10px] mt-[5px]">
                      <FaLocationDot/>
                    </div>
                    <span className="">123 BOX Iganmu, Coastin Lagos State</span>
                </span>
                <span className="flex items-center my-[10px]">
                 <div className="mr-[10px]">
                      <BsTelephoneFill/>
                    </div>
                    <span>+2347042604550</span>
                </span>
                <span className="flex items-center my-[10px] ">
                 <div className="mr-[10px]">
                      <MdEmail/>
                    </div>
                    <span>tcnbewomen@gmail.com</span>
                </span>

              </div>

              {/* Second Row */}
              
           
            <div className="flex flex-col  w-[100%] h-full">
                <div >
                <span className="uppercase font-semibold text-[18px] mb-[20px]">
                  Instafeed
                </span>
                </div>

               <div className="flex w-[80%] flex-wrap mt-[10px]">
                {Data.map((props, index)=>(
                   <div className="w-[50px] h-[50px] m-[5px] overflow-hidden" key={index}>
                   <img className="w-full h-full" src={props.Photo} />
                 </div>
                ))}
               </div>

              
            </div>

          </div>


        </div>

        {/* Lower Side */}

        <div className="flex mt-[30px] w-full justify-between items-center">

         <div>
        <span>
        Copyright ©2024 All rights reserved
        </span>
        </div>

        <div>
        <div className="uppercase font-medium text-[18px] mb-[20px] flex items-center gap-[20px]">
          <span>
                Follow us 
          </span>
              <div className="flex gap-3">
                <FaInstagram className="hover:text-pink-500 cursor-pointer"/>
                <FaYoutube className="hover:text-pink-500 cursor-pointer"/>
                <GrFacebookOption className="hover:text-pink-500 cursor-pointer"/>
                <PiSpotifyLogo className="hover:text-pink-500 cursor-pointer"/>
              </div>
        </div>
        </div>   
        </div>





      </div>
      
    </div>
  )
}

export default Footer
