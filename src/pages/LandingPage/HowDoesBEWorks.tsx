import logo from "../../assets/be logo.png"
import {FaChurch, FaPersonPraying,FaHeart} from "react-icons/fa6"
const HowDoesBEWorks = () => {
  return (
    <div className="flex w-full h-[550px] bg-gradient-to-br from-teal-500 to-pink-500 justify-center items-center">
        <div className="w-[90%] flex flex-col items-center">
            <div className="uppercase text-white text-[25px] font-semibold">How does BE WOMEN APP WORKS</div>

            <div className="flex items-center my-[40px]">
                {/* Logo */}
                <div className="w-[100px] p-[10px] bg-gray-300/50 rounded-[50%] flex items-center">
                    <img src={logo} alt='logo' />
                </div>

                <div className="text-white text-[30px] font-medium mx-[20px]">
                +
            </div>

            <div className=" p-[15px] bg-gray-300/50 rounded-[50%]  text-white">
                    <FaChurch size={70}/>
                </div>
                <div className="text-white text-[30px] font-medium mx-[20px]">
                +
            </div>

            <div className=" p-[15px] bg-gray-300/50 rounded-[50%]  text-white">
                    <FaPersonPraying size={70}/>
                </div>

                <div className="text-white text-[30px] font-medium mx-[20px]">
                =
            </div>


            <div className=" p-[15px] bg-gray-300/50 rounded-[50%]  text-white">
                    <FaHeart size={70}/>
                </div>
        
            </div>

            <div className="flex flex-col items-center">
                <span className="text-center text-[17px] my-3 text-white">When a Woman members participates with BEWOMANCONFERENCE.org, the members are given acess to videos, making weekly journals, attending prayer directly from the App and getting sermons from BE Women </span>
                <span className="text-center text-[17px] my-3 text-white"> Implementation is easy. You need to register with BEWOMEN and and get awesome journal, meeting with other BE WOMEN from your center and other centre and it's from anywhere in the World</span>
            </div>

          

        </div>
   
    </div>
  )
}

export default HowDoesBEWorks
