
import pics from "../../assets/bewomenconference-05042024-0002.jpg"
// import pics1 from "../../assets/PEARLS CELEBRATION SERVICE @tcnabuja (2).jpg"
// import pics2 from "../../assets/PEARLS CELEBRATION SERVICE @tcnabuja (2).jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from "../../assets/be logo.png"
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Password = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    const Photo = [
        {imageg : pics},
        {imageg : pics},
        {imageg : pics}
    ]
  return (

    <div >
        <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full h-auto overflow-hidden flex bg-gradient-to-br from-teal-500 to-pink-500  max-lg:h-screen" >
            {/* Right Side */}
                <div className="w-[50%] flex flex-col justify-center  px-[40px]">
                    {/* Logo */}
                    <div className="w-[60px]">
                        <img src={logo} className="w-full"/>
                    </div>
                    <div className="mt-[20px]">
                        <span className="text-teal-300 uppercase font-medium text-[20px] ">Welcome Back TO tcn be woman</span>
                    </div>
                    {/* Input and button */}
                    <div className="flex flex-col mt-[40px]">
                        {/* First Input */}
                    <div className="flex gap-[20px]">
                        <div className="flex flex-col mt-[20px]">
                            <label className="uppercase  font-semibold ">ENTER Password</label>
                            <input className="w-[250px] h-[50px] border-teal-500 outline-teal-400 px-[5px] "/>
                        </div>
                       
                    </div>

                      

                       
                    </div>
                    <div className="flex mt-[50px]">
               <Link to='/login'>
               <button className="transform hover:translate-x-10 transition duration-500 ease-in-out text-white font-bold py-2 px-4 rounded-3xl flex items-center bg-gradient-to-r from-teal-600 to-pink-600">Move to next  <HiArrowSmRight size={20} className="mx-2"/></button>
               </Link>
    </div>
                    
                </div>
                    {/* End of Right Side */}


            {/* Left Side */}
            <div className="w-[50%] h-screen relative flex justify-center ">
                <div className="w-full bg-teal-400  h-[0%] absolute z-10">
                        <Slider {...settings}>
              
                        {Photo.map((kin, index)=>(
                            
                            <div key={index} className="w-full h-auto">
                            <img src={kin.imageg} alt="slider" />
                        </div>
                        ))}
                  
                        </Slider>
                        </div>
                </div>
                {/* End Of Left Side */}
        </div>
        </div>
      
    </div>
  )
}

export default Password
