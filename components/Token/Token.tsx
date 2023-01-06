import { type } from 'os'
import React from 'react'

type Props={
  openSetting:boolean;
}

const Token = ({openSetting}:Props) => {
  return (
    <div className='fixed bg-[#04293A] bg-opacity-0 
    transform duration-300  w-screen h-screen inset-0 shadow-xl grid justify-center items-center z-50'>
      
    </div>
  )
}

export default Token