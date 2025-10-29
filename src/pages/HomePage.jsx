import React ,{useState}from 'react'
import LeftSideBar from '../components/LeftSideBar'
import ChatContainer from '../components/ChatContainer'
import RightSideBar from '../components/RightSideBar'

const HomePage = () => {

  const [selectedUser, setselectedUser] = useState(false);


  return (

    <div className='h-[96%] w-full sm:px-[2%] sm:py-[1%] '>
      <div className={` bg-black grid grid-cols-1 relative  border-4
       border-black-600 h-[96%] w-full rounded-xl overflow-hidden
        ${
          selectedUser
            ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]':
              'md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr]'
        }
      `}>

        <LeftSideBar/>
        <ChatContainer/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default HomePage

// backdrop-blur-2xl