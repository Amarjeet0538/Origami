import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { userDummyData } from '../assets/assets'

const LeftSideBar = ({selectedUser, setselectedUser}) => {
    const navigate = useNavigate();

  return (
    <div className={`bg-green-700 h-full p-5 rounded-r-xl overflow-y-auto scrollbar-hide text-white
    ${selectedUser ? 'max-md:hidden' : '' }`}>

        <div className='pb-5'>
            {/*  --header-- */}
            <div className='flex justify-between items-center'>
                <h1 className='text-white text-[28px] font-semibold'>Chats </h1>

                <div className='py-2 relative group'>
                    <img src={assets.menu_icon} className='max-w-5 cursor-pointer'/>
                    <div className='absolute top-full right-0 z-20 w-32 p-5 border border-white rounded-md bg-[#282130] group-hover:block hidden'>
                        <p onClick={() => {navigate('/profile')}}
                           className='cursor-pointer text-m text-white'>
                            Edit Profile
                        </p>
                        <hr className='my-2 border-t border-white'/>
                        <p className='cursor-pointer text-m text-white'>Logout</p>
                    </div>
                </div>
            </div>

            {/* --search bar-- */}
            <div className='bg-[#282130] rounded-full flex items-centre justify-content gap-4 py-3 px-5 mt-5 '>
                <img src={assets.search_icon} alt="search icon" className='w-5 h-6 pt-1 '/>
                <input type="text" placeholder='Search' className=' w-full bg-transparent text-white  outline-none border-none text-xl'/>
            </div>

            {/* --user list-- */}
            <div className='flex flex-col mt-5 gap-3'>
                {userDummyData.map((user,index) => (
                    <div
                    onClick={() => {setselectedUser(user)}}
                    key={index}
                    className={`relative flex items-center gap-3 p-2 pl-4 rounded cursor-pointer
                    max-sm:text-m ${selectedUser?._id === user._id && 'bg-purple-900'}`}
                    >
                        {/* profile pic */}
                        <div className='flex flex-col leading-5'>
                            <img src={user?.profilePic || assets.avatar_icon}  alt="" className='w-[45px] aspect-[1/1] rounded-full'/>
                            {
                                index < 3
                                // add green dot
                                ? <span className='absolute top-10 left-13 text-s h-3 w-3 flex
                                justify-center items-center rounded-full bg-blue-500'></span>
                                // add red dot
                                : <span className='absolute top-10 left-13 text-s h-3 w-3 flex
                                justify-center items-center rounded-full bg-red-600'></span>
                            }
                        </div>

                        {/* name */}
                        <div className='flex flex-col leading-5'>
                            <p className='text-[18px]'>{user.fullName}</ p>
                        </div>


                        {/* Number of messages */}
                        {
                            index >2 && <p className='absolute top-4 right-4 text-s h-5 w-5 flex
                            justify-center items-center rounded-full bg-yellow-500'>{index}</p>
                        }
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default LeftSideBar