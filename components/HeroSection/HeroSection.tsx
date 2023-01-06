import React,{useState,useEffect,useContext} from 'react'
import images from '../../assets/index'
import { IoSettingsOutline } from 'react-icons/io5';
import { SiEthereum } from 'react-icons/si';
import Image from 'next/image';
import { type } from 'os';
import Token from '../Token/Token';
import SearchToken from '../SearchToken/SearchToken';

type Props={
  accounts:string,
  tokenData:string
}

const HeroSection = ({accounts,tokenData}:Props) => {
  const [openSetting, setOpenSetting] = useState(false)
  const [openToken, setOpenToken] = useState<boolean>(false)
  const [openTokenTow, setOpenToopenTokenTow] = useState(false)
 // Token
 const [tokenOne, setTokenOne] = useState({
  name:"",
  image:""
 })
 const [tokenTwo, setTokenTwo] = useState({
  name:"",
  image:""
 })
  return (
    <div className='max-w-7xl my-8  mx-auto flex flex-col items-center justify-center relative hero_section'>
      <div className='mt-[5rem]  bg-[#04293A] p-4 w-11/12 sm:w-[30rem] rounded-lg'>
        <div className='flex items-center justify-between'>
          <p>Swap</p>
          <div className='heading img'>
            <IoSettingsOutline className='text-xl'
            onClick={()=>setOpenSetting(true)}
            />
          </div>
        </div>
        <div className='flex items-center justify-between  border border-blue-400 rounded-lg mt-4 pl-8 '>
          <input type="text"
           placeholder='0'
           className='border-none outline-none bg-transparent text-blue-400 text-lg w-3/5  sm:w-4/5 lg:w-auto'
           />
          <button onClick={()=>setOpenToken(true)} className='flex justify-center items-center gap-1
           bg-blue-400 p-2 font-semibold text-lg rounded-br-lg rounded-tr-lg'>
            <Image 
              src={tokenOne.image || images.etherlogo} alt='ehter'
              width={20} height={20}
             />
                {tokenOne.name || 'ETH'}
              <small>8078</small>
          </button>
        </div>
        
        <div className='flex items-center justify-between border border-blue-400 rounded-lg mt-4 pl-8'>
          <input type="text"
           placeholder='0'
           className='border-none outline-none bg-transparent text-blue-400 text-lg w-3/5 sm:w-4/5 lg:w-auto'
           />
          <button onClick={()=>setOpenToken(true)} className='flex justify-center items-center gap-1
           bg-blue-400 p-2 font-medium text-lg rounded-br-lg rounded-tr-lg'>
            <Image 
              src={tokenTwo.image || images.etherlogo} alt='ehter'
              width={20} height={20}
             />
                {tokenTwo.name || 'ETH'}
              <small>8078</small>
          </button>
        </div>

        {accounts?(
          <button className='bg-blue-400 hover:bg-blue-500 border-0 outline-0 text-lg w-full py-2 mt-4 rounded-full font-semibold'>Connect Wallet</button>
        ):(
          <button className='bg-blue-400 hover:bg-blue-500 border-0 outline-0 text-lg w-full py-2 mt-4 rounded-full font-semibold'>Swap</button>
        )}
      </div>
      {openSetting &&<Token  setOpenSetting={setOpenSetting}/>}
      {openSetting &&
      <SearchToken 
        tokenData={tokenData}
        openToken={setTokenOne}
        tokens = {setTokenOne}
      />}
        {openSetting &&<SearchToken 
        tokenData={tokenData}
        openToken={setTokenTwo}
        tokens = {setTokenTwo}
        />}
    </div>
  )
}

export default HeroSection