import React,{useState,useEffect,useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/uniswap-uni-icon.png'
import {Modal,TokenList} from '../index'
import { BiSearchAlt2 } from 'react-icons/bi';
import { SiEthereum } from 'react-icons/si';
// import Identicon from 'react-identicons'

const NavBar = () => {
  const menuItems = [
    {
      name:"Swap",
      link:'/',
    },
    {
      name:"Tokens",
      link:'/',
    },
    {
      name:"Pools",
      link:'/',
    },
  ]
  const [connectedAccount, setConnectedAccount] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openTokenBox, setOpenMTokenBox] = useState<boolean>(false)
  function connectWallet(){
    console.log("Soon"!);
    
  }
  
  return (
    <div className='max-w-7xl mx-auto my-8 navbar' >
      {/* grid-cols-1 lg:grid-cols-4  */}
      <div className='grid  md:grid-cols-3 items-center justify-between gap-1'>
        {/* left */}
        <div className='flex gap-16 items-center'>
          {/* uniswap logo */}
          <div className=''>
            <Image src={logo} width={50} height={50} alt="uniswap"/>
          </div>
          {/* menu items */}
          <div className='flex items-center gap-8'>
              {
                menuItems.map((item,i)=>(
                  <Link key={i+1} href={{pathname:`${item.name}`,query:`${item.link}`}}>
                    <p className='text-blue-300 font-normal'>
                      {item.name}
                    </p>
                  </Link>
                ))
              }
          </div>
        </div>
        {/* middle */}
        <div className='w-4/5 bg-[#04293A] my-0 mx-auto py-3 px-2.5 rounded-md shadow-lg'>
            <div className='flex items-center justify-center gap-6 cursor-pointer'>
              <div className='text-2xl'>
                <BiSearchAlt2/>
              </div>
              {/*search input */}
              <input
               type="text" 
              placeholder='Search Token...'
              className='bg-transparent outline-none w-4/5
               border-none text-base text-blue-300 '
              />
            </div>
        </div>
        {/* right */}
        <div className='flex items-center justify-end gap-4'>
          <div className='flex items-center gap-4 hover:bg-[#04293A] shadow-lg py-2 px-2.5  rounded-md cursor-pointer  capitalize'>
              <div className='right-icon-ether bg-blue-300 rounded-full p-[4px]'>
                <SiEthereum className='text-xl'/>
              </div>
              <p className='text-lg text-blue-300'>Network</p>
          </div>
          {connectedAccount?(
             <button className='outline-none border-nom text-blue-300 font-medium bg-[#04293A] shadow-lg
             py-2 px-4  rounded-md cursor-pointe' onClick={()=>setOpenMTokenBox(true)}>OXk9a...93SQK</button>
          ):(
            <button className='outline-none border-nom text-blue-300 font-medium bg-[#04293A] shadow-lg
            py-2 px-4  rounded-md cursor-pointe' onClick={()=>setOpenModal(true)}>Connect</button>
          )}
         
          {
            openModal&&(
              <Modal setOpenModal={setOpenModal} connectWallet={connectWallet}/>
            )
          }
        </div>
      </div>
      {/* tokenList */}
      {
        openTokenBox&&(
          <TokenList tokenDate='hey' setOpenMTokenBox={setOpenMTokenBox}/>
        )
      }
    </div>
  )
}

export default NavBar