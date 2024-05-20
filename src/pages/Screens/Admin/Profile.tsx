import pics from "../../../assets/user.png"
import AdminHead from "../../../components/Static/AdminHead"

const Profile = () => {

  return (
    <div className="bg-teal-50/45  md:w-[84%] lg:w-[84%] w-[100%]">
    <AdminHead name="Profile"/>
    <div className="h-[calc(100vh-60px)] w-full px-[10px] py-[15px] flex flex-col ">
       <h4 className='text-[23px] font-bold '>Profile</h4>
      
        <div className="flex justify-between w-full max-lg:flex-col  gap-[30px]"> 
          {/* First Side */}
          <div className="bg-white border-gray-50 shrink-0 flex-col max-lg:w-full w-[30%]  py-[30px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  p-[15px] flex h-[300px] items-center">
          <div className='flex mb-[10px] items-center gap-3 mt-[10px]'>
                  <img src={pics} alt="avatar" className=" w-[90px] rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200" />
                  </div>
                  <div className="w-full flex flex-col ">
                    <div className="w-full flex  justify-start gap-11 max-lg:justify-between">
                       {/* Profile name */}
                    <div className="flex flex-col w-full">
                      <span className="text-[12px] font-normal ">Profile Name</span>
                      <span className="text-[14px]">SegCode</span>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col w-full  ">
                      <span className="text-[12px] font-normal">Email</span>
                      <span className="text-[14px]  ">Beconference@gmail.com</span>
                    </div>
                    </div>

                    {/* lastname and FirstName */}
                    <div className="w-full flex  justify-start max-lg:justify-between gap-14 mt-[10px]">
                       {/* FirstName */}
                    <div className="flex flex-col w-full ">
                      <span className="text-[12px] font-normal">FirstName</span>
                      <span className="text-[14px]">Ajayi</span>
                    </div>
                       {/* LastName */}
                    <div className="flex flex-col w-full">
                      <span className="text-[12px] font-normal">LastName</span>
                      <span className="text-[14px]">Segun</span>
                    </div>

                    </div>
              {/* Church Membership and Ceter Affliation */}
                    <div className="w-full flex max-lg:justify-between justify-start gap-11 mt-[10px]">
                       {/* FirstName */}
                    <div className="flex flex-col w-full">
                      <span className="text-[12px] font-normal">Church Mem.</span>
                      <span className="text-[14px]">Ajayi</span>
                    </div>
                       {/* LastName */}
                    <div className="flex flex-col w-full">
                      <span className="text-[12px] font-normal">Center Affliation</span>
                      <span className="text-[14px]">Segun</span>
                    </div>

                    </div>
                  </div>

          </div>

          {/* other Side */}
        <div className="   bg-white border-gray-50 max-lg:w-full  flex-col w-[60%] flex-1 py-[40px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-sm:px-[20px] px-[30px] flex h-[490px]" > 
              <form>
              <div className='flex-col  w-full flex  '>
                <span className= "font-bold text-[20px]">Profile Picture</span>
                   <div className='flex mb-[10px] items-center gap-3 mt-[10px]'>
                  <img src={pics} alt="avatar" className=" w-[90px] rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200" />
                
                  <input className="file:p-[8px]  file:bg-teal-500 file:border-none"  accept="image/*" type="file" id='profile' name='profile'  />
  
                </div>

                <div className="mt-[20px]">
                  <div className=" flex w-full justify-between gap-1 max-sm:flex-col">
                  <div className="flex flex-col" >
                  <label className="text-[14px] font-semibold ml-[10px]">Profile Name <span className="text-red-400">*</span></label>
                <input type="text" placeholder="Enter Username" className="w-[300px] max-sm:w-auto px-[10px] py-[10px] text-[13px] border-2   focus:outline-none " />
              </div>
              <div className="flex flex-col">
                  <label className="text-[14px] font-semibold ml-[10px]">Email <span className="text-red-400">*</span></label>
                <input type="text" placeholder="BeConference@gmail.com" className="w-[300px] max-sm:w-auto px-[10px] py-[10px] text-[13px] border-2   focus:outline-none " />
              </div>
                  </div>
                 
                </div>

                {/* LastName and FirstName */}
                <div className="mt-[30px]">
                  <div className=" flex w-full justify-between gap-1 max-sm:flex-col">
                  <div className="flex flex-col" >
                  <label className="text-[14px] font-semibold ml-[10px]">FirstName <span className="text-red-400">*</span></label>
                <input type="text" placeholder="Travis" className="w-[300px] px-[10px] py-[10px] max-sm:w-auto text-[13px] border-2   focus:outline-none " />
              </div>
              <div className="flex flex-col ">
                  <label className="text-[14px] font-semibold ml-[10px]">LastName <span className="text-red-400">*</span></label>
                <input type="text" placeholder="Godwin" className="w-[300px] px-[10px] py-[10px] max-sm:w-auto text-[13px] border-2   focus:outline-none " />
              </div>
                  </div>
                 
                </div>
                {/* Church Membership and Center Affliation */}
                <div className="mt-[30px]">
                  <div className=" flex w-full justify-between gap-1 max-sm:flex-col">
                  <div className="flex flex-col" >
                  <label className="text-[14px] font-semibold ml-[10px]">Church Membership <span className="text-red-400">*</span></label>
                <input type="text" placeholder="Church" className="w-[300px] px-[10px] py-[10px] max-sm:w-auto  text-[13px] border-2   focus:outline-none " />
              </div>
              <div className="flex flex-col">
                  <label className="text-[14px] font-semibold ml-[10px]">Center Affliation <span className="text-red-400">*</span></label>
                <input type="text" placeholder="Center" className="w-[300px] px-[10px] py-[10px] text-[13px] border-2 max-sm:w-auto  focus:outline-none " />
              </div>
                  </div>
                 
                </div>
          
  
              </div>
              {/* Button */}
                <div className="flex w-full mt-[30px] gap-7">
                  <button type="reset" className="bg-teal-400 focus:outline-none w-full text-white">Reset</button>
                  <button type="submit" className="bg-pink-400 focus:outline-none w-full text-white">Update</button>

                </div>
              </form>
            </div>



        </div>
  
      </div>
 
    
    
  </div>
  )
}

export default Profile
