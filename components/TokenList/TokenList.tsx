import React from 'react'
import { FaChevronCircleDown,FaChevronCircleUp } from 'react-icons/fa';

type Props={
  setOpenMTokenBox:(openTokenBox: boolean) => void;
  tokenDate:string
}

const TokenList = ({setOpenMTokenBox,tokenDate}:Props) => {
  const data = [1,2,3,4,5,6,7,]
  return (
    <div className=' fixed bg-[#04293A] bg-opacity-0 overflow-hidden sm:justify-end max-w-[1330px] top-4 
    transform duration-300  w-screen h-screen inset-0 shadow-xl grid justify-center items-center z-40 '>
      <div className='w-[20rem] sm:w-[14.5rem] mx-4 px-6 py-4 rounded-lg bg-[#04293A] h-7/12 overflow-hidden'>
        <div className='flex justify-end'>
            <p className=' cursor-pointer top-2 z-50' onClick={()=>setOpenMTokenBox(false)}>
              <FaChevronCircleDown className='text-xl'/>
            </p>
        </div>

          <div className='text-lg font-bold w-full mb-4'>
            <h2>Your Token List</h2>
          </div>
          {
            data.map((item,i)=>(    
              <div className=' relative cursor-pointer border-b border-[#A2D2FF] text-sm'>
                <div className='tokenList_info '>
                  <p className=' bg-blue-400 py-.5 px-1.5 rounded-sm '>
                    DAI
                  </p>
                  <p>
                    <span className='font-bold text-blue-300 mr-2'>800</span>GOLDEN COIN
                  </p>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default TokenList