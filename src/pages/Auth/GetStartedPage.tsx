import MobileCarousel from "../Others/SliderLogin";
import logo from "../../assets/be logo.png"
import pics from "../../assets/20 Ways Churches can Encourage Prayer_1619798433_600x400.webp"
import pics1 from "../../assets/The+Power+of+Prayer+for+Women_+Strengthening+Your+Faith+and+Finding+Peace.jpeg"
import illustration from "../../assets/3321041.jpg"
import { HiArrowSmRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";


export default function App() {
  return (
    <>
     
      <MobileCarousel>
        <div className="flex w-full items-center justify-center h-screen bg-gray-200">
          <div className="w-full h-full flex flex-col p-4 justify-center items-center">
            <div className="w-[200px] h-[200px]">
                <img src={logo}/>
            </div>
            <div className="text-[25px] font-bold uppercase mt-[60px]">
                BE WOMEN Journal App
            </div>
           
          </div>
        </div>
        {/* Second Slide */}
        <div  className="flex items-center justify-center   h-screen w-full " >
          <div style={{backgroundImage: `url(${pics})`}} className="flex items-center justify-center object-cover h-screen w-full bg-cover bg-no-repeat ">
            {/* BackDrop */}
           <div className="bg-teal-700/35 h-screen w-full p-4 flex flex-col justify-end ">
         
                <div className="mb-[100px] flex flex-col justify-center items-center">
                <div className="text-[28px]   font-extrabold text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.teal.400),theme(colors.teal.100),theme(colors.pink.700),theme(colors.teal.700),theme(colors.pink.400),theme(colors.teal.100),theme(colors.teal.400))] bg-[length:200%_auto] animate-gradient">Create your Daily Journal with BE WOMEN APP</div>
                <div className="text-[13px] text-center text-white/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quo at dolorum.</div>
                <button className="w-[90%] text-[19px] gap-5 mt-9 items-center text-white justify-center bg-teal-600 cursor-pointer flex rounded-[40px] p-[10px] hover:translate-x-5 transition duration-500 ease-in-out ">Get Started
                <HiArrowSmRight size={30}/>
                </button>
                </div>
           </div>
          </div>
        </div>
        {/* Third Slide */}
        <div  className="flex items-center justify-center   h-screen w-full " >
          <div style={{backgroundImage: `url(${pics1})`}} className="flex items-center justify-center object-contain h-screen w-full bg-cover bg-no-repeat ">
            {/* BackDrop */}
           <div className="bg-teal-700/35 h-screen w-full p-4 flex flex-col justify-end ">
         
                <div className="mb-[100px] flex flex-col justify-center items-center">
                <div className="text-[28px]   font-extrabold text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.teal.400),theme(colors.teal.100),theme(colors.pink.700),theme(colors.teal.700),theme(colors.pink.400),theme(colors.teal.100),theme(colors.teal.400))] bg-[length:200%_auto] animate-gradient">Daily Prayer Prompt made for you, for BE WOMEN</div>
                <div className="text-[13px] text-center text-white/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quo at dolorum.</div>
                <button className="w-[90%] text-[19px] gap-5 mt-9 items-center text-white justify-center bg-teal-600 cursor-pointer flex rounded-[40px] p-[10px] hover:translate-x-5 transition duration-500 ease-in-out ">Get Started
                <HiArrowSmRight size={30}/>
                </button>
                </div>
           </div>
          </div>
        </div>

        {/* Last Slide */}
        <div className="flex items-center justify-center h-screen p-4 ">
        <div className="flex items-center mb-5">
            <div className="rounded-sm mx-[10px] bg-gradient-to-r from-teal-600 to-pink-600  w-[70px] h-[4px]"></div><span className="text-teal-600 text-center">Join Us Today and get all features of BE WOMEN</span>
            <div className="rounded-sm mx-[10px] bg-gradient-to-r from-teal-600 to-pink-600  w-[70px] h-[4px]"></div>
          </div>
            {/* Image */}
          <div className="w-full h-auto flex justify-center items-center">
            <img src={illustration} className="w-[300px]"/>
          </div>
          {/* Other Text */}
          <div className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel provident distinctio, reprehenderit nostrum odit dignissimos saepe praesentium qui tempore.
          </div>
            <div>
            <button className="w-[90%] text-[19px] gap-5 mt-9 items-center text-white justify-center bg-teal-600 cursor-pointer flex rounded-[40px] p-[10px] hover:translate-x-5 transition duration-500 ease-in-out ">Create Account
                <HiArrowSmRight size={30}/>
                </button>
                <div className="flex justify-center mt-[10px]">
                    Already have an Account?  <NavLink to="/login">
                    <span className="ml-[10px] decoration-teal-300 text-pink-600">Login</span>
                    </NavLink>
                </div>
            </div>
        </div>
      </MobileCarousel>
    </>
  );
}
