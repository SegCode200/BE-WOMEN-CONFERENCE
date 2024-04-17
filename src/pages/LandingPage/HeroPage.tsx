import Header from "../../components/Static/Header"
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi"
import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { PiSpotifyLogo } from "react-icons/pi";
import { GrFacebookOption } from "react-icons/gr";

const HeroPage = () => {
  return (
    <div className="w-full h-screen bg-hero-pattern bg-fixed bg-cover bg-no-repeat flex flex-col items-center" >
      <div className="w-full h-screen  flex flex-col items-center bg-gradient-to-b from-teal-400/10 to-pink-400/20">

      {/* Holding Header */}
      <div className=" w-full">
      <Header/>
      </div>

      <div className="w-[90%] h-full ">
        {/* left side of the text */}
        <div className="flex justify-end h-full flex-col">

          <div className="flex items-center mb-5">
            <div className="rounded-sm mx-[10px] bg-gradient-to-r from-teal-600 to-pink-600  w-[50px] h-[4px]"></div><span className="text-white">Welcome to the site offically</span>
          </div>
              {/* Next text */}
              <div className="flex items-center">
            <h1 className=" md:text-[60px] w-[40%]  font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.teal.400),theme(colors.teal.100),theme(colors.pink.700),theme(colors.teal.700),theme(colors.pink.400),theme(colors.teal.100),theme(colors.teal.400))] bg-[length:200%_auto] animate-gradient ">BE Women Conference</h1>

      </div>

      {/* Last text */}
      <div className="mt-4">
        <h4 className="text-white uppercase font-semibold w-[40%] bg-gradient-to-l from-teal-500 to-pink-500 bg-clip-text text-transparent ">Every woman will be strengthened and encouraged in her walk with God in a tribe she can trust and lean on.</h4>
      </div>

      {/* Button below */}

      <div className="flex mt-4">
                <button className="transform hover:translate-x-10 transition duration-500 ease-in-out bg-transparent text-white font-bold py-2 px-4 rounded-3xl flex items-center bg-gradient-to-r from-teal-600 to-pink-600">Watch Live <HiArrowSmRight size={20} className="mx-2"/>
                {/* instagram icon */}
                <div className="flex mx-[5px] rounded-[50%] border p-[3px]">
                <FaInstagram/>
                </div>
                {/* Youtube icon */}
                <div className="flex mx-[5px] rounded-[50%] border p-[3px]">
                <FaYoutube/>
                </div>

                {/* Spotify Icon */}
                <div className="flex mx-[5px] ">
                  <PiSpotifyLogo size={27}/>
                </div>

                </button>
    </div>

       {/* the last part of the text */}
       <div className="flex mt-[20px] mb-[20px] w-full justify-between items-center">

        {/* Left Arrow */}
          <div className="flex items-center">
          <div className="transform text-white hover:-translate-x-5 transition duration-500 ease-in-out rounded-[50%] border-[2px] mx-2 cursor-pointer p-[5px]  hover:text-teal-600">
            <HiArrowSmLeft size={30}/>
          </div>
          {/* Right Arrow */}
          <div className="text-white hover:translate-x-5 transition duration-500 ease-in-out rounded-[50%] border-[2px] mx-2 cursor-pointer p-[5px]  hover:text-teal-600">
            <HiArrowSmRight size={30}/>
          </div>
          </div>


          <div className="flex items-center mb-5">
          <span className="text-white">Social Platform</span>
            <div className="rounded-sm mx-[10px] bg-gradient-to-r from-teal-600 to-pink-600  w-[100px] h-[4px]"></div>
            {/* Icons */}
            <div className="flex gap-[10px] text-white items-center">
             <div>
             <GrFacebookOption size={22} className="cursor-pointer"/>
             </div>
              <div>
              <FaInstagram size={22} className="cursor-pointer"/>
              </div>
             <div>
             <FaYoutube size={22}  className="cursor-pointer"/>
             </div>
              <div>
              <PiSpotifyLogo size={24} className="cursor-pointer" />
              </div>

            </div>
          </div>


        </div>

      

        </div>

     

      </div>
      </div>
    </div>
  )
}

export default HeroPage
