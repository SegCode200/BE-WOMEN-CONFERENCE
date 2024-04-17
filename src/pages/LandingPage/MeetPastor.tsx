import pics from "../../assets/Amazing pearls in worship @tcnikejacentre.jpg"
import pics1 from "../../assets/PEARLS CELEBRATION SERVICE @tcnabuja (2).jpg"
import pics2 from "../../assets/PEARLS CELEBRATION SERVICE @tcnabuja (4).jpg"
import pics3 from "../../assets/PEARLS CELEBRATION SERVICE @tcnabuja.jpg"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6"

const MeetPastor = () => {

    const Data =[
        {name: "Pastor Toyin", title: "Leader Pastor", photo: pics},
        {name: "Pastor Tope", title: "Speaker", photo: pics1},
        {name: "Pastor Blessing", title: "Women Leader", photo: pics2},
        {name: "Pastor Esther", title: "Worship Pastor", photo: pics3}
    ]
  return (
    <div className="w-full h-auto py-[40px] flex items-center justify-center bg-teal-50">

        <div className="w-[90%] flex flex-col items-center">
            {/* Top */}
                <div className="flex flex-col items-center">
                    <span className="text-[30px] font-semibold">Team</span>
                    <div className="rounded-sm mx-[10px] bg-gradient-to-r from-teal-600 to-pink-600  w-[200px] h-[4px]"></div>

                    <div className="text-[30px] mt-[10px]">
                        Meet Our Pastors
                    </div>
                </div>

        {/* Down  */}

        <div className="flex">
       {Data.map((props, index)=>(
         <div className="flex flex-col items-center bg-white mx-[20px]" key={index}>
         <div className="w-[250px] h-[200px]">
             <img src={props.photo} className="object-cover w-full h-full "/>
         </div>

         <div className="flex flex-col mt-[30px] items-center">
             <span className="text-teal-500 font-medium">{props.name}</span>
             <span className="text-pink-400 text-[14px]">{props.title}</span>
         </div>
         <div className="flex gap-4 my-[10px]" >
             <FaFacebook/>
             <FaInstagram/>
             <FaTwitter/>
         </div>
     </div>
       ))}
       </div>

        </div>
      
    </div>
  )
}

export default MeetPastor
