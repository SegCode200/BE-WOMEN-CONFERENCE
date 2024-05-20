import { useEffect, useState } from "react";
import AdminHead from "../../../components/Static/AdminHead"
import "../../../styles/Spinner.css"
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { MdEditDocument, MdDeleteOutline,MdOutlineGroups3 } from "react-icons/md"
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { FaUserPlus } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx";
import pics from "../../../assets/PEARLS CELEBRATION SERVICE @tcnabuja (2).jpg"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { FiPhone } from "react-icons/fi"

const UserManagement = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditingEvent, setIsEditingEvent] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(res.data)
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handleOpenEdit =(content= null)=>{
    setIsEditingEvent(content)
    setIsOpenEdit(true)
  }

  const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination flex gap-3 mt-9'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item cursor-pointer'>
              <a onClick={() => paginate(number)}  className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

 function deletePopup()  {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}
  
  const Posts = ({ posts, loading }) => {
    if (loading) {
      return <span className="loader"></span>;
    }
  
    return (
      <div>
      <ul className='list-group mb-4'>
        <table className=" w-full text-left max-lg:hidden">
            <thead className="">
              <tr className="uppercase text-[14px] max-sm:text-[11px]">
                <th className="px-3.5 py-2 max-sm:p-[1px]">ID</th>
                <th className="px-3.5 py-2 max-sm:p-[1px]">Username</th>
                <th className="px-3.5 py-2 max-sm:p-[1px]">Picture</th>
                <th className="px-3.5 py-2 max-sm:p-[1px]">Email</th>
                <th className="px-3.5 py-2 max-sm:p-[1px]">Phone Number</th>
                <th className="px-3.5 py-2 max-sm:p-[1px]">Center</th>
                <th className="px-3.5 py-2 max-sm:p-[1px]">Actions</th>
              </tr>

            </thead>
        {posts.map((post) => (
            <tbody>
             <tr className="border-4   text-[#046667] cursor-pointer hover:border-pink-500 my-[5px] max-sm:text-[11px]">
              <td className="px-3.5 py-2 max-sm:p-[1px]">{post.id}</td>
              <td className="px-3.5 py-2 max-sm:p-[1px]">{post.username}</td>
              <td className="px-3.5 py-2 max-sm:p-[1px]">{post.name}</td>
              <td className="px-3.5 py-2 max-sm:p-[1px]">{post.address.street}</td>
              <td className="px-3.5 py-2 max-sm:p-[1px]">{post.email}</td>
              <td className="px-3.5 py-2 max-sm:p-[1px]">{post.address.zipcode}</td>
              <td className="px-3.5 py-2 flex gap-2 text-[17px]">
                <MdEditDocument onClick={()=>(handleOpenEdit(post))}/>
                {isOpenEdit?   
                <div className="h-screen object-cover z-[9999] top-0 fixed left-0 bg-teal-200/100 w-full flex bg-scroll">
          <div className="flex justify-center items-center w-full h-full" >
            <div className="h-[90%] w-[380px] p-[20px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              {/* Header */}
             <div className="flex items-center w-full justify-between">
             <span className="text-[25px] font-semibold">Edit User</span>
             <RxCross2 className="text-[30px] border-2  rounded-[50%] p-[5px] cursor-pointer" onClick={()=>(setIsOpenEdit(false))} />
             </div>
             {/* Adding of User part */}
             <div className="mt-[30px] " key={isEditingEvent?.id}>
              <div>
                <label className="text-[14px] font-semibold ml-[10px]">Username</label>
                <input type="text" 
                value={isEditingEvent?.username || ""}
                placeholder="Enter User Name" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
             
              {/* Holding Firstname and LastName */}
            <div className="flex gap-2">
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">FirstName</label>
                <input type="text" placeholder="Enter FirstName" 
                value={isEditingEvent?.name || ""}
                className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
              <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">LastName</label>
                <input type="text" placeholder="Enter LastName" 
                value={isEditingEvent?.username || ""}
                className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
            </div>
            {/* End Holding Firstname and LastName */}

              {/* Holding Password and Confirm Password */}
              <div className="flex gap-2">
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Password</label>
                <input type="password"
                value={isEditingEvent?.address.street || ""}
                placeholder="Enter Password" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
              <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Confirm Password</label>
                <input type="password" placeholder="Enter Confirm Password" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
            </div>
            {/* End Holding Password and Confirm Password */}
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Email</label>
                <input type="text" 
                value={isEditingEvent?.email || ""}
                placeholder="Enter Email" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>

                {/* Holding Password and Confirm Password */}
                <div className="flex gap-2">
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Church Membership</label>
                <input type="text" placeholder="Enter Church Membership" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
              <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Center Affliation</label>
                <input type="text" placeholder="Enter Center Affliation" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
            </div>
            {/* End Holding Password and Confirm Password */}
              {/* Button */}
              <div className="flex w-full justify-end gap-3 mt-[30px] text-white">
                <button className="text-[13px] bg-pink-400 rounded-3xl focus:outline-none" onClick={()=>(setIsOpenEdit(false))}>Cancel</button>
                <button className="text-[13px] bg-teal-400 rounded-3xl focus:outline-none">Save</button>
              </div>

             </div>
               {/* End Adding of User part */}

            </div>
            
          </div>

        </div> : null}
                <MdDeleteOutline onClick={()=>(deletePopup())}/>
                 </td>
            </tr>
            </tbody>
        ))}
        </table>
      </ul>
      <div className="lg:hidden flex flex-col gap-8 flex-wrap ">
        {posts.map((post)=>(
          <div className="border rounded-xl h-[220px] lg:py-[10px] py-[20px] ">
          {/* Image, name,Email and Icon */}
        <div className="flex w-full border-b-2 items-center justify-between">
            {/* Image, name and Email */}
            <div className="flex gap-3 items-center  pb-4 px-4">
             {/* Image */}
          <div className="w-[50px] h-[50px] ">
            <img src={pics} className="w-full h-full rounded-[50%] object-cover"/>
          </div>
          {/* Name and Email */}
          <div className="mt-[10px]">
            <h1 className="text-[20px] font-semibold">{post.name}</h1>
            <h1 className="text-[15px] font-semibold">{post.email}</h1>
            </div>

          </div>
          <div className="px-4 mr-[10px] text-[25px] p-[15px] rounded-[50%] bg-teal-100 hover:bg-teal-600 relative group">
          <HiOutlineDotsVertical/>
          <ul className="absolute top-[60px] right-[0px] w-48 bg-teal-700 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity text-white">
            <li onClick={()=>(handleOpenEdit(post))} className="p-4 w-full hover:bg-teal-500 flex justify-between items-center">Edit 
            <MdEditDocument/>
           
            </li>
            <li onClick={()=>(deletePopup())} className="p-4 w-full hover:bg-teal-500 flex justify-between items-center">Delete
            <MdDeleteOutline/>
            </li>
           
          </ul>
       
          </div>
          {isOpenEdit?   
                <div className="h-screen object-cover z-[9999] top-0 fixed left-0 bg-teal-200/100 w-full flex bg-scroll">
          <div className="flex justify-center items-center w-full h-full" >
            <div className="h-[90%] w-[380px] p-[20px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              {/* Header */}
             <div className="flex items-center w-full justify-between">
             <span className="text-[25px] font-semibold">Edit User</span>
             <RxCross2 className="text-[30px] border-2  rounded-[50%] p-[5px] cursor-pointer" onClick={()=>(setIsOpenEdit(false))} />
             </div>
             {/* Adding of User part */}
             <div className="mt-[30px] " key={isEditingEvent?.id}>
              <div>
                <label className="text-[14px] font-semibold ml-[10px]">Username</label>
                <input type="text" 
                value={isEditingEvent?.username || ""}
                placeholder="Enter User Name" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
             
              {/* Holding Firstname and LastName */}
            <div className="flex gap-2">
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">FirstName</label>
                <input type="text" placeholder="Enter FirstName" 
                value={isEditingEvent?.name || ""}
                className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
              <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">LastName</label>
                <input type="text" placeholder="Enter LastName" 
                value={isEditingEvent?.username || ""}
                className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
            </div>
            {/* End Holding Firstname and LastName */}

              {/* Holding Password and Confirm Password */}
              <div className="flex gap-2">
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Password</label>
                <input type="password"
                value={isEditingEvent?.address.street || ""}
                placeholder="Enter Password" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
              <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Confirm Password</label>
                <input type="password" placeholder="Enter Confirm Password" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
            </div>
            {/* End Holding Password and Confirm Password */}
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Email</label>
                <input type="text" 
                value={isEditingEvent?.email || ""}
                placeholder="Enter Email" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>

                {/* Holding Password and Confirm Password */}
                <div className="flex gap-2">
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Church Membership</label>
                <input type="text" placeholder="Enter Church Membership" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
              <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Center Affliation</label>
                <input type="text" placeholder="Enter Center Affliation" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
            </div>
            {/* End Holding Password and Confirm Password */}
              {/* Button */}
              <div className="flex w-full justify-end gap-3 mt-[30px] text-white">
                <button className="text-[13px] bg-pink-400 rounded-3xl focus:outline-none" onClick={()=>(setIsOpenEdit(false))}>Cancel</button>
                <button className="text-[13px] bg-teal-400 rounded-3xl focus:outline-none">Save</button>
              </div>

             </div>
               {/* End Adding of User part */}

            </div>
            
          </div>

        </div> : null}
        </div>
        {/* End of Image,Name,Email and Icon */}
        {/* Phone Number */}
        <div className="flex px-4 mt-[10px]">
          <FiPhone size={20}/>
          <span className="ml-[10px]">{post.address.zipcode}</span>
        </div>
        <div className="flex px-4 mt-[10px]">
          <MdOutlineGroups3 size={25}/>
          <span className="ml-[10px]">{post.username} </span>
        </div>
        {/* Holder */}
        <div className="flex px-4  bg-[#f3f3f3] rounded-bl-xl rounded-br-xl   justify-between">
          <div className="border-r-2 border-teal-600 p-4">
            <h1 className="text-[13px] font-semibold">Center</h1>
            <h1 className="text-[17px] font-semibold">{post.address.street}</h1>
          </div>
          <div className="border-r-2 p-4  border-teal-600 flex flex-col" >
            <h1 className="text-[13px] font-semibold">Total Journal</h1>
            <h1 className="text-[17px] font-semibold">20</h1>
          </div>
          <div className=" p-4">
            <h1 className="text-[13px] font-semibold">Registration</h1>
            <h1 className="text-[17px] font-semibold">20-10-2004</h1>
          </div>
        </div>

        </div>
        ))}


      </div>
      </div>

    );
  };

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="  h-auto bg-teal-50/45  md:w-[84%] lg:w-[84%] w-[100%]">
      <AdminHead name="User Management"/>
      <div className='container mt-5 px-[15px]'>
      <div className="flex items-center justify-between ">
      <h1 className='text-primary mb-3 max-sm:text-[23px] text-[30px] font-bold'>User Management</h1>

      <div className="flex items-center gap-2  bg-[#046667] rounded-[40px] p-[10px] text-white cursor-pointer  max-sm:text-[13px]  hover:bg-pink-600"
      onClick={()=>(setIsOpen(true))}
      >
        <FaUserPlus/> Add User
      </div>
    
      {isOpen ?(
        <div className="h-screen object-cover z-[9999] top-0 fixed left-0 bg-teal-200/65 w-full flex bg-scroll ">
          <div className="flex justify-center items-center w-full h-full" >
            <div className="h-[90%] w-[380px] p-[20px] max-sm:w-[95%] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              {/* Header */}
             <div className="flex items-center w-full justify-between border-b-2 pb-4">
             <span className="text-[25px] font-semibold">Add User</span>
             <RxCross2 className="text-[30px] border-2  rounded-[50%] p-[5px] cursor-pointer" onClick={()=>(setIsOpen(false))} />
             </div>
             {/* Adding of User part */}
             <div className="mt-[30px]">
              <div>
                <label className="text-[14px] font-semibold ml-[10px]">Username</label>
                <input type="text" placeholder="Enter User Name" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
             
              {/* Holding Firstname and LastName */}
            <div className="flex gap-2">
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">FirstName</label>
                <input type="text" placeholder="Enter FirstName" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
              <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">LastName</label>
                <input type="text" placeholder="Enter LastName" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
            </div>
            {/* End Holding Firstname and LastName */}

              {/* Holding Password and Confirm Password */}
              <div className="flex gap-2">
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Password</label>
                <input type="text" placeholder="Enter Password" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
              <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Confrim Password</label>
                <input type="text" placeholder="Enter Confrim Password" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
            </div>
            {/* End Holding Password and Confirm Password */}
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Email</label>
                <input type="text" placeholder="Enter Email" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>

                {/* Holding Password and Confirm Password */}
                <div className="flex gap-2">
            <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Church Membership</label>
                <input type="text" placeholder="Enter Church Membership" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
              <div className="my-[10px]">
                <label className="text-[14px] font-semibold ml-[10px]">Center Affliation</label>
                <input type="text" placeholder="Enter Center Affliation" className="w-full px-[10px] py-[5px] text-[12px] border-2 border-[#046667] rounded-[40px] focus:outline-none" />
              </div>
            </div>
            {/* End Holding Password and Confirm Password */}
              {/* Button */}
              <div className="flex w-full justify-end gap-3 mt-[30px] text-white">
                <button className="text-[13px] bg-pink-400 rounded-3xl focus:outline-none" onClick={()=>(setIsOpen(false))}>Cancel</button>
                <button className="text-[13px] bg-teal-400 rounded-3xl focus:outline-none">Save</button>
              </div>

             </div>
               {/* End Adding of User part */}

            </div>
            
          </div>

        </div>
      ): null
      }
      </div>
      <div className="my-[20px] flex border-teal-600 border-2  rounded-3xl bg-transparent text-[13px] w-[400px] max-sm:w-auto focus:outline-none text-teal-500 items-center ">
      <input placeholder="Search by Username" className=" max-sm:p-[10px] py-[5px] px-[10px] rounded-3xl bg-transparent text-[13px]  w-[400px] focus:outline-none text-teal-500"/> 
      <IoSearch size={25} className="mr-[10px]"/>
      </div>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        
      />
    </div>
    </div>
    
  )
}

export default UserManagement
