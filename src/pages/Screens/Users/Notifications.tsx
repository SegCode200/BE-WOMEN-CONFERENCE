import { useState } from "react";
import Head from "../../../components/Static/Head"
import pics from "../../../assets/20 Ways Churches can Encourage Prayer_1619798433_600x400.webp"
import { FaClock } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useParams } from "react-router-dom";




const Data =[
  {id:1, title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "9:38am", date: "Nov 4 2024", photo: pics},
  {id:2,title: "Frontend Topic", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "9:18am", date: "Nov 4 2024", photo: pics},
  {id:3,title: "Make a good choice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "5:30am", date: "Nov 2 2024", photo: pics},
  {id:4,title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
  {id:5,title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
  {id:6,title: "My Biggest Dream", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!", time: "10:10pm", date: "Nov 1 2024", photo: pics},
]


const Notifications = () => {

  const {id} = useParams()
  
  const [selectedNotifications, setSelectedNotifications] = useState(null);

  const handleSelectNotifications = (Notifications) => {
    setSelectedNotifications(Notifications);
  };

  const LinktotheNotification= (id)=>{

    return (
      <NavLink to="/">
        <RxCross2 className="text-red-500" />
      </NavLink>

    ) 
  }


  const NotificationsList = ({ Notifications, onSelectNotifications })  => {
    return (
      <div className="h-[calc(100vh-90px)]  w-full flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900"> NOTIFICATIONS </h2>
      {/* Holder */}
      
   
      <div className="flex bg-white flex-col py-[10px] px-[20px] w-full h-auto overflow-y-scroll">
         {Notifications.map((Notifications)=>(
      
              <div className="  border-b-[1px] bg-teal-900/5  flex flex-col border-y-slate-400 cursor-pointer  w-full p-[20px] mt-[2px] decoration-black" key={Notifications.id} onClick={() => (
        onSelectNotifications(Notifications)
      
      )
       
      } >
        <div className="flex">
          {/* Icon */}
          <div className="mr-[30px] w-[30px] h-[30px] cursor-pointer flex justify-center items-center  bg-pink-300 rounded-[5px] text-white text-[25px]">
            <RxCross2/>
          </div>
          {/* Text */}
          <div className="flex flex-col w-full">
            {/* First Text */}
            <div className="flex w-full justify-between text-pink-400 items-center">
              <div className="text-white p-[5px]  rounded-[3px] font-semibold text-[13px] bg-teal-700 mb-[10px]">Prayer Meeting</div>
              <div className="flex items-center text-[13px]">
                {/* Time Icon */}
                <div>
                  <FaClock className="mr-[5px]"/>
                </div>
                <span className="mx-[5px]">{Notifications.date}</span>
                <span className="mx-[5px]">at</span>
                <span>{Notifications.time}</span>
              </div>

            </div>

            {/* Second text */}
            <div className="flex flex-col">
              <span className="font-semibold text-black uppercase">{Notifications.title}</span>
              <span className="font-light my-[5px] text-teal-900">{Notifications.description.substring(0,250)}</span>
              <span className="text-pink-600 text-[12px] font-semibold">Pastor Toyin in Lead</span>
            </div>

          </div>

        </div>
    </div>

  ))}
  </div>
      </div>
    );
  };
  // const NotificationsDetails = ({ Notifications }) => {
  //   return (
  //     <div className="bg-white p-4">
  //       <h2 className="text-xl font-bold mb-4">{Notifications.title}</h2>
  //       <p className="text-gray-700">{Notifications.description}</p>
  //       <div className="w-[100px] h-[100px]">
  //         <img src={Notifications.photo}/>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="h-screen bg-teal-50/45">
    <Head name="Notifications"/>
     
    <div className="flex  items-start w-full h-[calc(100vh-60px)] bg-gray-100">
      <div className=" w-full p-4">
        <NotificationsList Notifications={Data} onSelectNotifications={handleSelectNotifications} />
     
      </div>
    
  
    </div>
  </div>
  )
}

export default Notifications
