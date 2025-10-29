import React from 'react'
import assets, { messagesDummyData } from '../assets/assets'
import { useEffect, useRef } from 'react'
import { formatMessageTime } from '../lib/utils'

const ChatContainer = ({selectedUser, setselectedUser}) => {
  const scrollEnd = useRef();

  useEffect(()=> {
    if(scrollEnd.current){
      scrollEnd.current.scrollIntoView({behavior: 'smooth'});
    }
  })
  return selectedUser ? (
    <div className='border-x-2 border-white h-full overflow-hidden relative bg-white/10'>

        {/* -- header -- */}

        <div className='border-b-2 border-white flex items-center gap-4 py-3 px-4  bg-blue-900 '>
          <img src={assets.profile_martin} alt="avatar" className='w-10 h-10 rounded-full object-cover' />

          <h2 className='flex flex-1 text-white text-lg font-semibold items-center gap-2'>
            The User
          </h2>

          <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5'/>

        </div>



        {/* --chat area-- */}

        <div className='flex flex-col h-[calc(100%-120px)] p-6 gap-4 overflow-y-auto scrollbar-hide pb-28'>

          {
            messagesDummyData.map((msg,index) => (
              <div key={index} className={`flex items-end gap-5 justify-end
                  ${msg.senderId === '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}>
                  {msg.image? (
                    <img src={msg.image}  className={`max-w-[350px] border border-grey-700 rounded-lg cursor-pointer mb-8 ${msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'bg-pink-900/70 rounded-bl-none' : 'bg-yellow-800/90 rounded-br-none'}`}/>
                  )
                  : (
                      <p
                        className={`p-2 max-w-[280px] md:text-[18px] font-light rounded-lg mb-8 break-all  text-white
                          ${msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'bg-pink-900/70 rounded-bl-none' : 'bg-yellow-800/90 rounded-br-none'}
                        `}
                      >
                        {msg.text}
                      </p>
                  )}

                  <div className='text-center text-m'>
                    <img src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? assets.avatar_icon : assets.profile_martin} alt=""  className='w-7 rounded-full'/>

                    <p className='pt-3  text-grey-500'>{formatMessageTime(msg.createdAt)}</p>
                  </div>
              </div>
            ))
          }
          <div ref={scrollEnd}></div>
        </div>


        {/* --input area-- */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3 bg-transparent">
            {/* Input container */}
            <div className="flex flex-1 items-center bg-gray-800/40 px-4 py-2 rounded-full backdrop-blur-md">
              {/* Text input */}
              <input
                type="text"
                placeholder="Send a message..."
                className="flex-1 text-sm md:text-base p-2 bg-transparent text-white
                          placeholder-gray-400 outline-none border-none"
              />

              {/* Image upload */}
              <input
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                hidden
              />
              <label htmlFor="image" className="cursor-pointer">
                <img
                  src={assets.gallery_icon}
                  alt="Upload"
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition"
                />
              </label>
            </div>

            {/* Send button */}
            <img
              src={assets.send_button}
              alt="Send"
              className="w-7 h-7 cursor-pointer opacity-80 hover:opacity-100 transition"
            />
          </div>
    </div>
  )  : (
    <div className='flex flex-col justify-center items-center gap-2 max-md:hidden h-full bg-white/10'>
        <h2 className='text-black text-2xl font-medium text-semibold'>Select a user to start chat</h2>
    </div>
  )
}

export default ChatContainer