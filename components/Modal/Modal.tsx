import { connected } from 'process';
import React from 'react'
import { IoMdClose } from 'react-icons/io';


type Props={
  setOpenModal:(openModal: boolean) => void;
  connectWallet:()=>void

}
const Modal = ({setOpenModal,connectWallet}:Props) => {
  const walletMenu = ['MetaMask','Coinbase','Wallet','WalletConnect']

  return (
    <div className='absolute bg-[#04293A] bg-opacity-0 
    transform duration-300  w-screen h-screen inset-0 shadow-xl grid justify-center items-center z-50'>
      <div className='m-4 px-6 py-4 rounded-lg bg-[#04293A] h-7/12'>
        <div className='flex items-center justify-between pb-2'>
          <p className='text-lg font-medium'>Connect Wallet</p>
          <div className='Modal_box_img'>
              <IoMdClose className='text-2xl cursor-pointer' onClick={()=>setOpenModal(false)}/>
          </div>
        </div>
          <div className='setOpenModal_wallet'>
              {walletMenu.map((item,i)=>(
                <p
                className='p-4 bg-[#041C32] my-2 rounded-lg font-semibold cursor-pointer '
                 key={i+1} onClick={()=>connectWallet()}>
                  {item}
                </p>
              ))}
          </div>
          <p 
          className='py-4 leading-4 text-gray-100'
          >By connecting a wallet, you agree to Uniswap Labs’ <br />
             Terms of Service and consent to its Privacy Policy.</p>
        
      </div>
    </div>
  )
}

export default Modal