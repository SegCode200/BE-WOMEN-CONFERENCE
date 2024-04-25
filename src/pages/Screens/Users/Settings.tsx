import Head from "../../../components/Static/Head"
import pics from "../../../assets/user.png"

const Settings = () => {
  return (
    <div className="h-screen bg-teal-50/45">
    <Head name="Settings"/>
    <div className="h-[calc(100vh-60px)] w-full p-[10px] ">
      
    <div className=" border-4  bg-white border-gray-50 shrink-0 flex-col w-[30%] rounded-3xl py-[30px] min-w-max flex h-[500px]" style={{width: "45%"}}> 
            <div className='flex-col items-center w-full flex justify-center h-[20px] '>
              <h4 className='text-[23px] font-bold text-center'>Update your Profile</h4>
              <h5 className='py-4 text-xl  text-center '> 
              
              </h5>

            </div>

            {/* <form className='py-1' onSubmit={formik.handleSubmit}> */}
              {/* Avatar Input */}
              <div className='flex justify-center  h-[70px] mb-[10px]'>
                <label htmlFor='profile'>
                <img src={pics} alt="avatar" className="border-4 border-gray-100 w-[60px] rounded-full shadow-lg cursor-pointer object-cover hover:border-gray-200" />
                </label>
                <input className="hidden" type="file" id='profile' name='profile' />

              </div>
              {/* Input Username */}
              <div className="textbox flex flex-col items-center gap-3 ">
                <input className="border-0 px-5 py-2 rounded-[6px] w-3/4 shadow-sm text-[15px]  focus:outline-none" type='text'  placeholder='Email'/>
                <input className="border-0 px-5 py-2 rounded-[6px] w-3/4 shadow-sm text-[15px] focus:outline-none" type='text'  placeholder='Username'/>
                <input className="border-0 px-5 py-2 rounded-[6px] w-3/4 shadow-sm text-[15px] focus:outline-none"type='password'  placeholder='Password'/>
                <input className="border-0 px-5 py-2 rounded-[6px] w-3/4 shadow-sm text-[15px] focus:outline-none"type='text'  placeholder='Phone Number'/>
                <input className="border-0 px-5 py-2 rounded-[6px] w-3/4 shadow-sm text-[15px] focus:outline-none"type='text'  placeholder='Church Membership'/>
                <input className="border-0 px-5 py-2 rounded-[6px] w-3/4 shadow-sm text-[15px] focus:outline-none"type='text'  placeholder='Centre Affilation'/>
                <button className="border bg-teal-500 hover:bg-gradient-to-br hover:from-teal-600 hover:to-pink-500  w-3/4 py-2 rounded-md text-gray-50 text-xs shadow-sm text-center" type='submit'>Update</button>
              </div>

              {/*  */} 
              {/* <div className="text-center py-4 text-gray-500">  
                <span>Already Register?<Link className='text-red-500' to='/'>Login Now</Link></span>
              </div> */}

   

          </div>

    </div>
  </div>
  )
}

export default Settings
