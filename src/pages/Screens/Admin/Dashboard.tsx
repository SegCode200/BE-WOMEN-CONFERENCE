import AdminHead from "../../../components/Static/AdminHead"
import { Line } from 'react-chartjs-2';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
  } from 'chart.js';
  import { Chart } from 'react-chartjs-2';
  import {faker} from '@faker-js/faker';
  
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );
  import { USERS } from "../Admin/Pagination/Data";
  import { useState } from "react";
  import DownloadBtn from "../Admin/Pagination/DownloadBtn";
  import DebouncedInput from "../Admin/Pagination/DebouncedInput";
  import { FaSearch } from "react-icons/fa"



const Dashboard = ()=>{
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
     const data1 = {
        labels,
        datasets: [
          {
            type: 'line' as const,
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          },
          {
            type: 'bar' as const,
            label: 'Dataset 2',
            backgroundColor: 'rgb(15, 133, 133)',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'white',
            borderWidth: 2,
          },
          {
            type: 'bar' as const,
            label: 'Dataset 3',
            backgroundColor: 'rgb(180, 0, 60)',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          },
        ],
      };
    const columnHelper = createColumnHelper();
  
    const columns = [
      columnHelper.accessor("", {
        id: "S.No",
        cell: (info) => <span>{info.row.index + 1}</span>,
        header: "S.No",
      }),
      columnHelper.accessor("profile", {
        cell: (info) => (
          <img
            src={info?.getValue()}
            alt="..."
            className="rounded-full w-10 h-10 object-cover"
          />
        ),
        header: "Profile",
      }),
      columnHelper.accessor("firstName", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "First Name",
      }),
      columnHelper.accessor("lastName", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Last Name",
      }),
    
      columnHelper.accessor("visits", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Visits",
        
      }),
      columnHelper.accessor("progress", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Progress",
      }),
    ];
    const [data] = useState(() => [...USERS]);
    const [globalFilter, setGlobalFilter] = useState("");
  
    const table = useReactTable({
      data,
      columns,
      state: {
        globalFilter,
      },
      getFilteredRowModel: getFilteredRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
return (
    <div className="h-screen bg-teal-50/45">
      <AdminHead name="Dashboard"/>
      <div className="flex justify-start">
      <div className="p-2 max-w-5xl min-h-[calc(100vh-60px)] mx-auto text-white fill-pink-400">
        <div className="flex justify-between mb-2">
          <div className="w-full flex items-center gap-1">
            <FaSearch className="text-teal-500" />
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 bg-transparent outline-none text-teal-500 border-b-2 w-1/5 focus:w-1/3 duration-300 border-pink-500 placeholder-teal-500"
              placeholder="Search all columns..."
            />
          </div>
          <DownloadBtn data={data} fileName={"peoples"} />
        </div>
        <table className="border border-pink-700 w-full text-left">
          <thead className="bg-pink-600">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-3.5 py-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`
                  ${i % 2 === 0 ? "bg-teal-900" : "bg-teal-800"}
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Recoard Found!</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* pagination */}
        <div className="flex items-center justify-end mt-2 gap-2 text-teal-600">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {">"}
          </button>
  
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select
          
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 bg-teal-500 text-white focus:outline-none"
          >
            {[6, 12, 18, 24].map((pageSize) => (
              <option key={pageSize} value={pageSize} className="text-white">
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-[50%] h-[60vh] m-[0px]">
      <Chart type='bar' data={data1}  className="w-full"/>
      </div>
      </div>
      
    </div>
)
}


export default Dashboard