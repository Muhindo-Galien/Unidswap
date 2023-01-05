import React from 'react'
import { FaChevronCircleDown,FaChevronCircleUp } from 'react-icons/fa';

type Props={
  setOpenMTokenBox:(openTokenBox: boolean) => void;
  tokenDate:string
}

const TokenList = ({setOpenMTokenBox,tokenDate}:Props) => {
  return (
    <div className='TokenList'>
      <div className='TokenList_box'>
        <div></div>
      </div>
    </div>
  )
}

export default TokenList