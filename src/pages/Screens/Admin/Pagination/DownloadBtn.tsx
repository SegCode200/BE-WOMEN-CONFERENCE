
import * as XLSX from "xlsx/xlsx.mjs";
import { FaDownload } from "react-icons/fa"

const DownloadBtn = ({ data = [], fileName }) => {
  return (
   <div className="">
     <button
      className="download-btn flex items-center text-white bg-gradient-to-r from-teal-600 to-pink-600 transform hover:-translate-x-5 transition duration-500 ease-in-out"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
    >
     <FaDownload className="text-white mr-[10px]"/>
      <span>Download</span>
    </button>
   </div>
  );
};

export default DownloadBtn;
