import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";

const Filters = () => {
    const [clicked, setClicked] = useState('button1');
    return (
        <div className='flex flex-col w-full font-poppin'>
            <div className='flex w-full justify-between p-2'>
                <p className='text-[15px] text-[#949494]'>Select Filters</p>
                <div className='flex items-center gap-2'>
                    <img className='w-[20px] h-[20px]' src="/slider.png" alt="" />
                    <p className='text-[15px] text-[#949494]'>Filters</p>
                </div>
            </div>
            <div className='flex flex-wrap w-full p-2 gap-2'>
                <button onClick={() => setClicked('button1')} className={`flex px-1 items-center border ${clicked === 'button1' ? 'border-[#4C82EF]' : ''} bg-[#F6F9FF] rounded-[5px] leading-0`}>
                    <p className={`text-[15px] ${clicked === 'button1'? 'text-[#4C82EF]' : 'text-[#737373]'} tracking-wide `}>Strap - long</p>
                    <IoIosClose className={`${clicked === 'button1'? 'text-[#4C82EF]' : 'text-[#737373]'} text-[23px]`} />
                </button>
                <button onClick={() => setClicked('button2')} className={`flex px-1 items-center border ${clicked === 'button2' ? 'border-[#4C82EF]' : ''} bg-[#F6F9FF] rounded-[5px] leading-0`}>
                    <p className={`text-[15px] ${clicked === 'button2'? 'text-[#4C82EF]' : 'text-[#737373]'} tracking-wide `}>Colour</p>
                    <IoIosClose className={`${clicked === 'button2'? 'text-[#4C82EF]' : 'text-[#737373]'} text-[23px]`} />
                </button>
                <button onClick={() => setClicked('button3')} className={`flex px-1 items-center border ${clicked === 'button3'? 'border-[#4C82EF]' : ''} bg-[#F6F9FF] rounded-[5px] leading-0`}>
                    <p className={`text-[15px] ${clicked === 'button3'? 'text-[#4C82EF]' : 'text-[#737373]'} tracking-wide `}>Size</p>
                    <IoIosClose className={`${clicked === 'button3'? 'text-[#4C82EF]' : 'text-[#737373]'} text-[23px]`} />
                </button>
                <button onClick={() => setClicked('button4')} className={`flex px-1 items-center border ${clicked === 'button4' ? 'border-[#4C82EF]' : ''} bg-[#F6F9FF] rounded-[5px] leading-0`}>
                    <p className={`text-[15px] ${clicked === 'button4'? 'text-[#4C82EF]' : 'text-[#737373]'} tracking-wide `}>Brand</p>
                    <IoIosClose className={`${clicked === 'button4'? 'text-[#4C82EF]' : 'text-[#737373]'} text-[23px]`} />
                </button>
                <button onClick={() => setClicked('button5')} className={`flex px-1 items-center border ${clicked === 'button5' ? 'border-[#4C82EF]' : ''} bg-[#F6F9FF] rounded-[5px] leading-0`}>
                    <p className={`text-[15px] ${clicked  === 'button5' ? 'text-[#4C82EF]' : 'text-[#737373]'} tracking-wide `}>Material</p>
                    <IoIosClose className={`${clicked === 'button5'  ? 'text-[#4C82EF]' : 'text-[#737373]'} text-[23px]`} />
                </button>

            </div>

        </div>
    )
}

export default Filters
