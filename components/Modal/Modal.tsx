import { connected } from 'process';
import React from 'react'
import { IoMdClose } from 'react-icons/io';

type Props={
  setOpenModal:(openModal: boolean) => void;
  connectWallet:string

}
const Modal = ({setOpenModal,connectWallet}:Props) => {
  const walletMenu = ['MetaMask','Coinbase','Wallet','WalletConnect']
  return (
    <div className='absolute bg-[#04293A] bg-opacity-40 
    transform duration-300  w-screen h-screen inset-0 shadow-xl grid justify-center items-cente z-50'>
      <div className='p-8 rounded-lg bg-[#04293A]'>
        <div className='flex items-center justify-between'>
          <p>Connect Wallet</p>
          <div className='Modal_box_img'>
              <IoMdClose className='text-2xl' onClick={()=>setOpenModal(false)}/>
          </div>
        </div>
          <div className='setOpenModal_wallet'>
              {walletMenu.map((item,i)=>(
                <p key={i+1} onClick={()=>connectWallet()}>
                  {item}
                </p>
              ))}
          </div>
          <p 
          className=''
          >By connecting a wallet, you agree to Uniswap Labs’ <br />
             Terms of Service and consent to its Privacy Policy.</p>
        
      </div>
    </div>
  )
}

export default Modal