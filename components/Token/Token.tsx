import { type } from 'os'
import React from 'react'
import { IoMdClose } from 'react-icons/io';
import { HiOutlineLockClosed } from 'react-icons/hi';
import Toggle from '../Toggle/Toggle';
import images from "../../assets/index"
import Image from 'next/image';

type Props={
  setOpenSetting:(openSetting:boolean)=>void;
}

const Token = ({setOpenSetting}:Props) => {
  return (
    <div className='fixed bg-[#508ca7] bg-opacity-0 
    transform duration-300  w-screen h-screen inset-0 shadow-xl grid justify-center items-center z-50 '>
      <div className='w-11/12  m-4 px-6 py-4 rounded-lg bg-[#04293A] h-8/12 sm:w-[25rem] h-25rem shadow-lg'>
          <div className='flex items-center justify-between pb-2'>
              <h2 className='text-lg font-semibold'>Setting</h2>
              <div className=''>
                  <IoMdClose className='text-2xl cursor-pointer' onClick={()=>setOpenSetting(false)}/>
              </div>
          </div>
          <p className='flex gap-4 items-center mb-2'>
            Splippage tolerance{""}
            <Image src={images.lock} height={25} width={25} alt='lock'/>
          </p>
          <div className='flex gap-4 items-center '>
            <button
             className='bg-blue-400 border-none outline-none py-1
              px-1.5 rounded-lg text-base font-semibold cursor-pointer'
              >auto</button>
            <input 
            className='bg-transparent border border-blue-400 text-right outline-0 w-full py-1 px-1.5 rounded-lg '
            type="text" 
            placeholder='0.10%'/>
          </div>
          <p className='flex gap-4 items-center my-2'>
            Splippage tolerance{""}
            <Image src={images.lock}  height={25} width={25} alt='lock'/>

          </p>
          <div className='flex gap-4 items-center '>
            <input
            className='bg-transparent border border-blue-400 text-right outline-0 w-full py-1 px-1.5 rounded-lg '
            type="text" placeholder='0.10%'/>
            <button
             className='bg-blue-400 border-none outline-none py-1
             px-1.5 rounded-lg text-base font-semibold cursor-pointer'
            >munite</button>
          </div>
          <h2 className='text-lg font-medium my-2'>Interface Setting</h2>
          <div className='flex items-center justify-between'>
             <p className='box_pare'>
              Transction deadline
             </p>
             <Toggle label='No'/>
          </div>
       </div>
    </div>
  )
}

export default Token