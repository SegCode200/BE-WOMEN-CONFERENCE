import { HiArrowSmRight } from "react-icons/hi"
import pics from "../../assets/pastor toyin poju.webp"

const AboutComponents = () => {
  return (
    <div className="h-[550px] w-full flex justify-center items-center">
        <div className="w-[90%]">
                
            <div className="flex w-full justify-between items-center">
                <div className="w-[500px] h-[500px] rounded-[14px] overflow-hidden relative">
                    <img src={pics} alt="pastor" className="w-full h-full"/>
                    <span className="absolute text-pink-500 uppercase font-semibold  bottom-10 left-4 ">Pastor Toyin Oyemade Poju</span>
                </div>

              
                <div className="w-[40%]">

            
                <div className="flex items-center mb-5">
            <div className="rounded-sm mx-[10px] bg-gradient-to-r from-teal-600 to-pink-600  w-[60px] h-[4px]"></div><span className="text-teal-500 uppercase font-bold  text-[20px]">About BE WOMEN</span>
          </div>
                    <span className="text-pink-700 font-medium text-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit alias sit nam modi adipisci odio. Accusantium laudantium vel quibusdam reiciendis magni sint, nostrum rem sunt tenetur, vero, at aliquam?
                        Ducimus, quae, cum fugit error incidunt repellendus, asperiores aliquam ex nesciunt nam minus doloremque 
                        <br/><br/>illum dignissimos amet quisquam saepe consectetur? Minima, illo. Quaerat et optio quo nostrum repudiandae veniam magnam.
                        Quaerat aliquid, dolore officia excepturi deleniti vitae voluptas odio, temporibus quo amet minima voluptatum debitis quasi quam distinctio ducimus libero ut possimus, sequi mollitia iste soluta quas! Ab, et tenetur.
                        Cupiditate explicabo quos suscipit dignissimos error excepturi adipisci iusto, dolorum ullam aspernatur, consequuntur ea mollitia soluta corrupti quae. Eum voluptatum dolorem sequi doloribus nesciunt ratione eaque non porro sed sapiente.
                    </span>

                    <button className="transform hover:translate-x-10 transition duration-500 ease-in-out bg-transparent text-white font-bold py-2 px-4 rounded-3xl flex items-center bg-gradient-to-r from-teal-600 to-pink-600 my-[20px]">Get Started <HiArrowSmRight size={20} className="mx-2"/></button>
             
                </div>

            </div>

        </div>


      
    </div>
  )
}

export default AboutComponents
