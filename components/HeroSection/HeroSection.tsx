import React,{useState,useEffect,useContext} from 'react'
import { IoSettingsOutline } from 'react-icons/io5';
import { SiEthereum } from 'react-icons/si';



const HeroSection = () => {
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
    <div className='HeroSection'>
      <div className='HeroSection_box'>
        <div className='HeroSection_heading'>
          <p>Swap</p>
          <div className='heading img'>
            <IoSettingsOutline className='text-xl'
            onClick={()=>setOpenSetting(true)}
            />
          </div>
        </div>
        <div className='Hero_input'>
          <input type="text" placeholder='0'/>
          <button onClick={()=>setOpenToken(true)}>
              <div className='right-icon-ether bg-blue-300 rounded-full p-[4px]'>
                <SiEthereum className='text-xl'/>
              </div>
                {tokenOne.name || 'ETH'}
          </button>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection