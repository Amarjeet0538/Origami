import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { userDummyData } from '../assets/assets'

const LeftSideBar = ({selectedUser, setselectedUser}) => {
    const navigate = useNavigate();

  return (
    <div className={`bg-green-700 h-full p-5 rounded-r-xl overflow-y-scroll text-white
    ${selectedUser ? 'max-md:hidden' : '' }`}>

    <div className='pb-5'>
        <div className='flex justify-between items-center'>
            <h1 className='text-white text-[28px] font-semibold'>Chats </h1>

            <div className='py-2 relative group'>
                <img src={assets.menu_icon} className='max-w-5 cursor-pointer'/>
                 <div className='absolute top-full right-0 z-20 w-32 p-5 border border-white \
                 rounded-md bg-[#282130] group-hover:block hidden'>
                    <p onClick={() => {navigate('/profile')}}
                     className='cursor-pointer text-m text-white'>Edit Profile</p>
                    <hr className='my-2 border-t border-white'/>
                    <p className='cursor-pointer text-m text-white'>Logout</p>
                 </div>
            </div>
        </div>

        <div className='bg-[#282130] rounded-full flex items-centre justify-content
        gap-2 py-3 px-4 mt-5'>
            <img src={assets.search_icon} alt="search icon" className='w-5 h-5'/>
            <input type="text" placeholder='Search' className=' w-full
            bg-transparent text-white  outline-none border-none text-xl'/>
        </div>

            <div className='flex flex-col'>
                {userDummyData.map((user,index) => (
                    <div key= {index} className='relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm
                    '>
                        <img src={user?.profilePic || assets.avatar_icon} alt="" className='w-[35px]
                        rounded-full aspect-[1/1]'/>


                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default LeftSideBar