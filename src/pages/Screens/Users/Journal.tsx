import { useEffect, useState } from "react";
import Head from "../../../components/Static/Head"
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReactQuill from "react-quill";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import pics from "../../../assets/Sea-with-the-ship-sunset-.png"
import 'react-day-picker/dist/style.css';
import { FaClock } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Journal = () => {
  const { quill, quillRef } = useQuill();
  const [image, setImage] = useState(null);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    // Check if an image is selected
    if (selectedImage) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onloadend = () => {
        // Set the image in state
        setImage(reader.result);
      };
    }
  };
  const [state, setState] = useState("");
  const [OpenPreView, setOpenPreview] = useState(false);
  const [content, setContent] = useState("");
  const [selected, setSelected] = useState<Date>();
  let toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["link", "image"],
    [{ size: ["small", false, "large", "huge"] }],

    // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  useEffect(() => {
    if (quill) {
      quill.on("selection-change", () => {
        setContent(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  let footer = <p>Pick a date for your journal</p>;
  if (selected) {
    footer = <p> {format(selected, 'PP')}.</p>;
  }
  return (
    <div className="h-auto bg-teal-50/45 md:w-[84%] lg:w-[84%] w-[100%] ">
    <Head name="Journal"/>
       
      <div className="p-[10px] flex max-md:flex-col  gap-[10px]">
        <div className=" flex flex-col">
          <div>
            <div className="flex flex-col my-[10px]">
              <label className="text-[17px] font-semibold ">Enter the Title of your Journal</label>
            <input  placeholder="My biggest dreams " className="h-[50px] border-2 border-teal-500 px-[10px] placeholder-gray-700 focus:outline-none ] bg-transparent"  />
            </div>
            <div className="flex flex-col max-md:justify-center  w-full h-auto my-[10px]">
            {image ? (
        <div>
          <img src={image || pics}  alt="Uploaded" className="max-w-48 max-h-48" />
        </div>
      ) : <div>
      <img src={pics}  alt="Uploaded" className="max-w-48 max-h-48" />
    </div>}
            <input
                className='hidden'
                type='file'
                accept='image/png, image/jpg, image/jpeg'
                id="imageTitle"
                multiple
                onChange={handleImageUpload}
            />
             <label className='bg-teal-700 text-white py-2 px-8 rounded hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all mt-3 w-[200px] text-[13px] justify-center items-center  flex'
                htmlFor='imageTitle'
            >Upload Image</label>
            </div>
          </div>
          <p className="p-[10px] text-pink-500 font-semibold">{footer}</p>
        <div className="flex ">
        <ReactQuill
            modules={module}
            theme="snow"
            value={state}
            onChange={setState}
            className=" outline-[0px] border-none"
            style={{
              height: "30vh" , border: "none", outline: "none"
            }}
          />
        </div>
           {/* Button */}
        <div className="xl:mt-[70px]  max-lg:mt-[140px] flex gap-5">
           <button className="bg-pink-500 text-white py-2 px-8 rounded hover:scale-[1.02] cursor-pointer duration-300 transition-all mt-3 w-[200px] text-[13px] justify-center items-center focus:outline-none  flex " onClick={()=>(setOpenPreview(true))}>Preview
          
           </button>
           <button className="bg-teal-700 text-white py-2 px-8 rounded hover:scale-[1.02] cursor-pointer duration-300 transition-all mt-3 w-[200px] text-[13px] justify-center items-center focus:outline-none  flex">Submit</button>
         </div>
        
        </div>
       


        <div className="bg-white p-[10px] order ">
              <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              style={{ backgroundColor: "white"}}
              footer= {footer}
              />
        </div>

      </div>

      {OpenPreView &&
             <div className="max-sm:h-[160%] h-[118vh]  z-[9999]  top-0 absolute left-0 bg-teal-200/65 w-full flex  justify-center items-center">
               <div className="bg-white p-4 w-[50%] max-md:w-[90%]  ">
               <div>
              <RxCross2 className="text-[30px] text-white  absolute max-md:right-[5%]  max-md:top-[23%] sx: right-[20%] top-16  rounded-[50%]  p-[5px] cursor-pointer bg-pink-500" onClick={()=>(
                setOpenPreview(false)
              )}/>
              </div>
              <div className="flex items-center  mb-4 w-full justify-between">
              <h2 className="text-xl font-bold max-sm:text-base bg-teal-700 text-white p-[5px] ">My Biggest Dream</h2>
              <div className="flex font-semibold text-[12px] text-pink-500 items-center gap-[5px]">
                <FaClock className=""/>
                <span className="">Nov 2 2024</span>
                <span>5:30am</span>
              </div>
              </div>
              <div className="max-sm:w-[97%] w-[300px] h-[200px] mb-[10px]">
              {image ? (
        <div>

          <img src={image} className="w-full h-full"/>
        </div>
      ) : 
      <div>
      <img src={pics}  alt="Uploaded" className="w-[100%] h-[200px]" />
    </div>
      }
              </div>
              <p className="text-teal-500 font-normal mt-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos itaque dolor, vero, perspiciatis quae autem beatae expedita quam, perferendis distinctio cumque ipsum. Voluptates itaque inventore quas exercitationem alias a consectetur.Debitis eius ipsum accusantium reprehenderit quidem vitae reiciendis id assumenda. Quisquam pariatur maxime quibusdam sint iste velit molestias corrupti deserunt soluta nobis nihil temporibus tempore veritatis architecto, mollitia qui! Optio!</p>
             
            
            </div>
             </div>
            }
      {/* <div>Second try</div> */}
      {/* <div ref={quillRef} /> */}
      {/* <p>{state}</p> */}
      {/* <p className="mt-48" dangerouslySetInnerHTML={{ __html: state }} /> */}
  </div>
   

  )
}

export default Journal
