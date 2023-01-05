import React from 'react'
type Props={
  setOpenMTokenBox:(openTokenBox: boolean) => void;
}

const TokenList = ({setOpenMTokenBox}:Props) => {
  return (
    <div className='TokenList'>
      <div className='TokenList_box'>
        <div></div>
      </div>
    </div>
  )
}

export default TokenList