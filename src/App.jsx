import React from 'react';
import Tags from './components/Tags';
import Filters from './components/Filters';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='text-3xl flex justify-center p-8 items-center w-full bg-gradient-to-b from-blue-100 to-blue-0'>
      <div className='flex flex-col rounded-[20px] w-[360px] mt-16 bg-white p-2'>
        <section className='flex bg-[#EFF3FD] justify-between items-center h-[80px] rounded-t-[20px] rounded-tr-[20px]'>
          <div className='flex items-center relative gap-2 h-[60px] px-4 '>
            <img className='w-[50px] h-[50px] ' src="/assest1.png" alt="" />
            <p className='absolute bg-green-500 h-2 w-2 rounded-[50%] bottom-[8px] left-[55px]'></p>
            <div className='flex flex-col py-1 h-full'>
              <p className='flex tracking-wide leading-[27px] items-center gap-2 text-[20px] text-[#4C82EF] h-1/2 font-semibold font-poppin'>Timpu <span><img src="/Vector.png" alt="" /></span></p>
              <p className='text-[17px] tracking-wide leading-[22.5px] text-[#4C82EF] h-1/2 font-normal font-poppin'>Chat Assistant</p>
            </div>
          </div>
          <div className='flex items-center p-2 px-4 gap-1'>
            <p className='flex bg-green-500 h-2 w-2 rounded-[50%]'></p>
            <p className='text-[17px] leading-[27px] tracking-wide font-poppin text-[#4C82EF] font-semibold'>Online</p>
          </div>
        </section>
        <section className='w-full flex flex-col mt-[50px] p-2'>
          <div className='flex flex-col justify-start w-[70%] '>
            <p className='text-[15px] font-sans bg-gradient-to-r tracking-wide from-[#E5EEFF] to-[#FFFFFF] leading-[19.5px] p-2 rounded-[15px] '>Hi Sam! I am your personal shopping assistant , how can i help you today ?</p>
            <p className='px-2 py-1 font-sans text-[12px] leading-[15px] font-normal'>4:45 PM</p>
          </div>
          <div className='flex flex-col ml-[30%] w-[70%] my-4'>
            <p className='text-[15px] font-sans tracking-wide bg-[#DCF7C5] text-[#333333] leading-[19.5px] p-2 rounded-[15px] '>I am looking for a hand bag, with long strap .</p>
            <p className='px-2 py-1 font-sans text-[12px] leading-[15px] font-normal text-end'>4:46 PM</p>
          </div>
          <Tags />
          <div className='flex flex-col bg-gradient-to-r mt-[10px] rounded-[20px] from-[#E5EEFF] to-[#FFFFFF] w-[75%] p-2'>
            <div className='flex bg-white items-center rounded-[10px] px-2 gap-2'>
              <img className='flex w-[70px] h-[50px] rounded-[5px]' src="/bag.png" alt="" />
              <div className='flex flex-col gap-2 py-2 items-center justify-center'>
                <p className='text-[14px] font-semibold leading-[10px]'>Bags on Timpu</p>
                <p className='text-[14px] text-gray-500 font-poppin leading-[10px] py-2'>1123 products <span className='text-end'> {'>'}</span></p>
              </div>
            </div>
            <p className='text-[15px] font-poppin leading-[19.5px] p-2 tracking-wide'>Or set filter and help us choose the best bag for you.
            </p>
          </div>
          <Filters />
        </section>
        <Footer />
      </div>

    </div>
  )
}

export default App
