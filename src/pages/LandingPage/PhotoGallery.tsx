import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/Amazing pearls in worship @tcnikejacentre.jpg"
import img1 from "../../assets/Pastor toyin.webp"
import pics from "../../assets/Radiant pearls from @tcnlekki (1).jpg"
import pics1 from "../../assets/Radiant pearls from @tcnlekki (2).jpg"
import pics2 from "../../assets/Radiant pearls from @tcnlekki (3).jpg"
import pics3 from "../../assets/bewomenconference-05042024-0004.webp"
import pics4 from "../../assets/bewomenconference-05042024-0005.webp"
import pics5 from "../../assets/bewomenconference-05042024-0011.webp"
import pics6 from "../../assets/bewomenconference-05042024-0007.webp"
import pics7 from "../../assets/bewomenconference-05042024-0008.webp"
import pics8 from "../../assets/bewomenconference-05042024-0013.webp"
import pics9 from "../../assets/bewomenconference-05042024-0006.webp"
import pics10 from "../../assets/bewomenconference-05042024-0012.webp"
import pics11 from "../../assets/bewomenconference-05042024-0010.webp"
import pics12 from "../../assets/bewomenconference-05042024-0009.webp"

const Photo = [
    {picture: pics},
    {picture: pics1},
    {picture: pics2},
    {picture: pics3},
    {picture: pics4},
    {picture: pics5},
    {picture: pics6},
    {picture: pics7},
    {picture: pics8},
    {picture: pics9},
    {picture: pics10},
    {picture: pics11},
    {picture: pics12},
]

const Data = [
    {name: "John Smith", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolores maxime animi ipsa maiores perspiciatis, harum officia! Ex non inventore incidunt at praesentium officiis sit. Nisi, iste? Aspernatur, quis quaerat.", photo: img},
    {name: "Segun", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolores maxime animi ipsa maiores perspiciatis, harum officia! Ex non inventore incidunt at praesentium officiis sit. Nisi, iste? Aspernatur, quis quaerat.", photo: img1},
    {name: "Tope", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolores maxime animi ipsa maiores perspiciatis, harum officia! Ex non inventore incidunt at praesentium officiis sit. Nisi, iste? Aspernatur, quis quaerat.", photo: pics1},
    {name: "Sade", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolores maxime animi ipsa maiores perspiciatis, harum officia! Ex non inventore incidunt at praesentium officiis sit. Nisi, iste? Aspernatur, quis quaerat.", photo: pics3},
]

const PhotoGallery = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      const settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    
  return (
    <div className="overflow-hidden w-full h-auto">
      <Slider {...settings}>
       
        {Photo.map((props, index)=>(
            <div className="w-full h-auto" key={index}>
            <img src={props.picture} alt="..." />
        </div>
        ))}
      </Slider>
      <div className="w-full h-screen flex items-center justify-center  bg-teal-400/80 ">
      <div className="w-full h-screen py-[40px] flex flex-col items-center">
            <div className="w-[90%] flex flex-col items-center">
                <div className="text-[30px] text-white uppercase font-semibold">
                    INSPIRATIONAL TESTIMONY
                </div>

                {/* image part */}
                <div className=" w-full h-auto">
                <Slider {...settings1}>
             {Data.map((props,index)=>(
                <div key={index} className="w-full h-auto">

                    <div>
                   <div className="flex flex-col relative mt-[80px] items-center justify-center" >

                   <div className="rounded-[50%] w-[150px] h-[150px] overflow-hidden relative ">
                       <img src={props.photo} className="w-full object-cover h-full"/>
                         </div>
                   </div>


                   <div className="flex flex-col items-center">
                   <div className="text-white font-semibold mt-[40px] w-[80%] text-center flex justify-center items-center">
                       {props.description}
                   </div>
                   
                   <div className="flex flex-col mt-[30px] items-center">
                   <span className="text-white text-[20px]">
                       {props.name}
                   </span>
                   <span className="text-white">
                       Members
                   </span>
                   </div>
                   </div>
                   </div>
                   </div>
             ))}
             </Slider>

                {/* Second  */}
                
                
        
                </div>


            </div>
            </div>
      </div>
    </div>
  )
}

export default PhotoGallery
