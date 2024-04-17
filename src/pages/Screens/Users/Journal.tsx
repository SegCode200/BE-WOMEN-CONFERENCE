import { useEffect, useState } from "react";
import Head from "../../../components/Static/Head"
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import 'react-day-picker/dist/style.css';

const Journal = () => {
  const { quill, quillRef } = useQuill();

  const [state, setState] = useState("");
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
    <div className="h-screen bg-teal-50/45 ">
    <Head name="Journal"/>
       
      <div className="p-[10px] flex gap-[10px]">
        <div className="">
          <div>
            <div className="flex flex-col my-[10px]">
              <label className="text-[17px] font-semibold ">Enter the Title of your Journal</label>
            <input  placeholder="My biggest dreams " className="h-[50px] bg-teal-300 text-white px-[10px] placeholder-gray-700 focus:outline-none ]" />
            </div>
            <div className="flex flex-col my-[10px]">
              <label className="text-[17px] font-semibold ">Add Image for better view</label>
            <input  placeholder="My biggest dreams " className="h-[50px] bg-teal-300 text-white px-[10px] placeholder-gray-700 focus:outline-none " type="" />
            </div>
          </div>
          <p className="p-[10px] text-pink-500 font-semibold">{footer}</p>
          <ReactQuill
            modules={module}
            theme="snow"
            value={state}
            onChange={setState}
            className=" outline-[0px]"
            style={{
              height: "30vh", outline: "none"
            }}
          />
        </div>
        <div className="bg-white p-[10px]">
              <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              style={{ backgroundColor: "white"}}
              footer= {footer}
              />
        </div>
      </div>
      {/* <div>Second try</div> */}
      {/* <div ref={quillRef} /> */}
      {/* <p>{state}</p> */}
      {/* <p className="mt-48" dangerouslySetInnerHTML={{ __html: state }} /> */}
  </div>
   

  )
}

export default Journal
