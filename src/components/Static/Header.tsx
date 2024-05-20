import { Link } from "react-router-dom"
import img from "../../assets/be logo.png"
import { HiArrowSmRight } from "react-icons/hi"

const Header = () => {
  return (
    <div>
      <div className="flex w-full justify-center items-center h-22">
        <div className="logo flex w-[90%] justify-between items-center border-b-2 border-b-teal-600">
            <img src={img} className="w-[80px]"/>
            <div className="flex gap-10">
                <nav className="cursor-pointer py-[10px] px-[20px] text-white  text-lg   hover:bg-gradient-to-r hover:from-teal-600 rounded-3xl hover:to-pink-600  transition-all duration-[300ms]" >HOME</nav>
                <nav className="cursor-pointer py-[10px] px-[20px] text-white  text-lg   hover:bg-gradient-to-r hover:from-teal-600 rounded-3xl hover:to-pink-600  transition-all duration-[300ms]">ABOUT</nav>
                <nav className="cursor-pointer py-[10px] px-[20px] text-white  text-lg   hover:bg-gradient-to-r hover:from-teal-600 rounded-3xl hover:to-pink-600  transition-all duration-[300ms]">PODCASTS</nav>
                <nav className="cursor-pointer py-[10px] px-[20px] text-white  text-lg   hover:bg-gradient-to-r hover:from-teal-600 rounded-3xl hover:to-pink-600  transition-all duration-[300ms] ">CONTACT US</nav>
            </div>
            {/* Get Started  */}
            <div className="flex gap-10">
               <Link to='/getstarted'>
               <button className="transform hover:translate-x-10 transition duration-500 ease-in-out text-white font-bold py-2 px-4 rounded-3xl flex items-center bg-gradient-to-r from-teal-600 to-pink-600">Get Started  <HiArrowSmRight size={20} className="mx-2"/></button>
               </Link>
    </div>

        </div>

      </div>
    </div>
  )
}

export default Header
