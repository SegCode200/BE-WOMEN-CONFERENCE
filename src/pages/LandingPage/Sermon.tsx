import { HiArrowSmRight } from "react-icons/hi"
import pics from "../../assets/sermns.jpg.webp"

const Sermon = () => {
  return (
    <div className="w-full h-auto py-[40px] flex items-center justify-center bg-teal-50">

      <div className="w-[90%] h-[full] flex flex-col ">
        <div className="upside flex flex-col items-center mb-[40px]">
          <span className="text-[40px] font-bold">Sermons This week </span>
          <span className="text-[16px] text-teal-400/100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, minima?</span>
        </div>

        <div className="downside flex w-full">
          <div className="w-[90%] flex flex-col items-center">
            <img src={pics}/>
            <span className="mt-[30px] w-[95%] text-black-400/100 font-light">
            "The heart of Christ is not only the heart of a man but has in it also the tenderness and gentleness of a woman. Jesus was not a man in the rigid sense of manhood as distinct from womanhood, but, as the Son of Man, the complete Head of Humanity. This is, indeed, an insightful observation."
            </span>
          </div>

          <div className="flex flex-col  ml-[20px] w-[50%]">
            <span className="text-[30px] font-semibold">What TCN WOMEN are to know as a woman</span>
            <span className="text-[16px] my-[10px] text-gray-500 flex items-center ">Sermon From: <span className="text-black ml-[10px]">Godwin Elizabeth</span></span>
            <span className="text-[16px] my-[10px] text-gray-500 flex items-center ">Categories: <span className="text-teal-500 font-medium ml-[10px]">God, Pray</span></span>
            <span className="text-[16px] my-[10px] text-pink-500 flex items-center ">On Sunday 13th 2024</span>

            <div className="flex gap-10">
                <button className="transform hover:translate-x-10 transition duration-500 ease-in-out text-white font-bold py-2 px-4 rounded-3xl flex items-center bg-gradient-to-r from-teal-600 to-pink-600 mt-[30px]">View Sermon  <HiArrowSmRight size={20} className="mx-2"/></button>
                <button className="transform hover:translate-x-10 transition duration-500 ease-in-out text-white font-bold py-2 px-4 rounded-3xl flex items-center bg-gradient-to-r from-teal-600 to-pink-600 mt-[30px]">Watch Sermon  <HiArrowSmRight size={20} className="mx-2"/></button>
    </div>

          </div>  
        </div>


      </div>
      
    </div>
  )
}

export default Sermon
