import { FaScroll } from "react-icons/fa"

const Quote = () => {
  return (
    <div className="w-full h-[500px] py-[40px] bg-background1 flex justify-center items-center bg-no-repeat bg-cover ">
        <div className="w-[90%] flex flex-col items-center">
            {/* Left Side */}
            <div className="mb-[30px] flex flex-col items-center">
              <div className="text-[60px] text-pink-500  ">
                <FaScroll/>
                 </div>
              <span className="text-[40px] font-bold text-teal-400/100">Quote of the Day</span>
            </div>

            <div className="text-white text-center text-[18px]">
            A good woman is hard to find, and worth far more than diamonds. Her husband trusts her without reserve, and never has reason to regret it. Never spiteful, she treats him generously all her life long. She shops around for the best yarns and cottons, and enjoys knitting and sewing.

            </div>

            {/* Right side  */}
            <div className="text-pink-500 font-semibold text-[17px] mt-[20px]">
            Proverbs 31:10-31
            </div>

        </div>
      
    </div>
  )
}

export default Quote
