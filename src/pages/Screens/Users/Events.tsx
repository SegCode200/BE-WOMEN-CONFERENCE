import Head from "../../../components/Static/Head"
import pics from "../../../assets/Prayer Flyer.jpg"
import pics1 from "../../../assets/bewomenconference-05042024-0005.webp"
import person from "../../../assets/pastor toyin poju.webp"
const Data =[
  {person},
  {person},
  {person},
 
]

const Events = () => {
  return (
 
       <div className="h-screen bg-teal-50/45">
      <Head name="Events"/>
      <div className="h-[calc(100vh-60px)] p-[15px] w-full">
        {/* Ongoing Events */}
        <div className="bg-gray-100 px-[20px] py-2 mb-[10px] ">
          <div className="">
            <span className="text-[25px] font-semibold ">Ongoing Events</span>
          {/* Holder */}
            <div className="w-[220px] h-[220px] bg-white rounded-md cursor-pointer pb-[10px] ">
              <div className="w-full h-[160px] rounded-s-sm overflow-hidden">
                <img src={pics} className="w-full h-full object-fill"/>
              </div>

              <div className="flex flex-col px-[5px]">
                <span className="text-[13px] font-semibold capitalize text-pink-400">TCN women global prayer</span>
                <div className="flex justify-between">
                  <span className="text-[10px] font-semibold my-[5px]">@Zoom</span>
                  <span className="text-[10px] font-semibold my-[5px]"> 300 members</span>
                </div>
                <div className="text-[11px] text-teal-400">
                  <span>18th Apr. 2024</span>
                  <span className="mx-[10px]">:</span>
                  <span>11:00am - 12:30pm</span>
                </div>
              </div>

            </div>
          </div>

        </div>
        {/* Upcoming Events */}
        <div className="bg-gray-100 px-[20px] py-2 ">
          <div className="">
            <span className="font-semibold">Upcoming Events</span>
            <div className="w-[200px] h-[200px] bg-white rounded-md cursor-pointer pb-[10px] ">
            <div className="w-full h-[120px] rounded-s-sm overflow-hidden">
                <img src={pics1} className="w-full h-full object-fill"/>
              </div>
              {/* Text */}
                <div className="flex">
                <div className="flex flex-col  px-[10px]">
                <span className="text-[12px] font-normal mb-[-10px]">APR</span>
                <span className="font-extrabold text-[24px] m-[0]">12</span>
              </div>
              
              <div className="flex flex-col text-[13px]">
                <span className="font-extrabold text-[18px] mb-[-3px]">TCN WOMEN</span>
                <div className="flex text-black font-bold mb-[5px]">
                <span className="text-[8px]">THUR. 10:10AM</span>
                <span className="text-[8px] mx-[4px]">-</span>
                <span className="text-[8px]">Iganmu, Coastin Lagos</span>
                </div>

                <div className="flex gap-[2px]">
                {/* IMage */}
              {Data.map((data)=>(
                  <div className="w-[30px] h-[30px] rounded-[50%] object-cover">
                  <img src={data.person} className="border-2 border-gray-100 w-full rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200"/>
                </div>
              ))}
              <div className="border-2 border-gray-100 py-[3px] px-[5px] rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200">
                +9
              </div>
              </div>
              </div>
              
                </div>
                {/* End of Text */}

            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Events
