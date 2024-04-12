import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Tags = () => {
    return (
        <div className='flex flex-col gap-2 w-[100%]'>
            <h1 className='text-gray-500 text-[15px]'>Popular Tags for Handbag</h1>
            <div className='flex relative w-full overflow-x-scroll overflow-y-hidden gap-4 '>
                <button className='bg-[#F2F7FF] flex items-center rounded-[5px] font-semibold w-[63px] h-[30px] border border-[#4C82EF] text-[#4C82EF] px-2 text-[13px]'>Clutch</button>
                <button className='bg-[#F2F7FF] flex items-center rounded-[5px] font-semibold h-[30px] border border-[#4C82EF] text-[#4C82EF] px-2 text-[13px]'>Baggit</button>
                <button className='bg-[#F2F7FF] flex items-center rounded-[5px] font-semibold h-[30px] border border-[#4C82EF] text-[#4C82EF] px-2 text-[13px]'>Mulitwear</button>
                <button className='bg-[#F2F7FF] flex items-center rounded-[5px] font-semibold h-[30px] border border-[#4C82EF] text-[#4C82EF] px-2 text-[13px]'>Clutch</button>
                <button className='bg-[#F2F7FF] flex items-center rounded-[5px] font-semibold h-[30px] border border-[#4C82EF] text-[#4C82EF] px-2 text-[13px]'>Baggit</button>
                <MdOutlineKeyboardArrowRight className='w-8 h-8 bg-white text-blue-600 cursor-pointer absolute z-10 right-0' />
            </div>
        </div>
    )
}

export default Tags
