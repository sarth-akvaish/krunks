import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Footer = () => {
    return (
        <div className='w-full flex flex-col bg-gradient-to-r justify-center items-center rounded-b-[5px] from-[#EFF3FD] to-[#EFF3FD]'>
            <div className='flex p-2 w-full relative items-center gap-1'>
                <input className='font-poppin text-[16px] rounded-[10px] w-[80%] px-3' type="text" placeholder='Type your message' />
                <img className='absolute left-[70%]' src="/paperclip.png" alt="" />
                <button className='bg-blue-700 px-4 rounded-[5px] py-[2px]'><MdOutlineKeyboardArrowRight className='text-white' /></button>
            </div>
            <div className='flex items-center gap-1'>
                <p className='text-[13px] text-[#B1B1B1]'>Powered by</p>
                    <p className='text-[13px] text-[#7A7F8C] font-semibold'>Krunk.ai</p>
                <img className='border border-[#7A7F8C] w-[13px] h-[13px]' src="/Logo.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
