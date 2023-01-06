import Image, { StaticImageData } from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import images from '../../assets/index'

type ITokensArgs = {
  name:string,
  image:string |StaticImageData
}
type Props={
  tokenData:string;
  openToken:Dispatch<SetStateAction<boolean>>;
  tokens:({name,image}:ITokensArgs)=>void
}
const SearchToken = ({tokenData,tokens,openToken}:Props) => {
    //USESTATE
    const [active, setActive] = useState(1);

    let tokenList = [];
    for (let i = 0; i < tokenData.length; i++) {
      if (i % 2 == 1) tokenList.push(tokenData[i]);
    }
    const coin = [
    {
      img: images.ether,
      name: "ETH",
    },
    {
      img: images.ether,
      name: "DAI",
    },
    {
      img: images.ether,
      name: "DOG",
    },
    {
      img: images.ether,
      name: "FUN",
    },
    {
      img: images.ether,
      name: "WETH",
    },
    {
      img: images.ether,
      name: "UNI",
    },
    {
      img: images.ether,
      name: "TIME",
    },
    {
      img: images.ether,
      name: "LOO",
    },
    {
      img: images.ether,
      name: "OOO",
    },
    {
      img: images.ether,
      name: "HEY  ",
    },
    {
      img: images.ether,
      name: "OOO",
    },
    {
      img: images.ether,
      name: "HEY  ",
    },
    {
      img: images.ether,
      name: "OOO",
    },
    {
      img: images.ether,
      name: "HEY  ",
    }
  ];
  return  (
    <div className='SearchToken'>
      <div className='SearchToken_box bg-[#04293A]'>
        <div className='SearchToken_box_heading'>
          <h4 className='text-lg font-normal'>Select a token</h4>
          <IoMdClose className='text-2xl cursor-pointer' onClick={() => openToken(false)}/>
        </div>

        <div className='SearchToken_box_search my-4 border border-sky-300'>
            <div className='text-2xl'>
                <BiSearchAlt2/>
            </div>
          <input type="text" placeholder="Search name and past the address" />
        </div>
        {/* without scrool */}
        <div className='SearchToken_box_tokens'>
          {(coin.slice(0,3)).map((el, i) => (
            <span
              key={i + 1}
              className={active == i + 1 ? 'bg-blue-400' : ""}
              onClick={() => (
                openToken(false),
                setActive(i + 1),
                tokens({
                  name: el.name,
                  image: el.img,
                })
              )}
            >
              <Image
                src={el.img || images.ether}
                alt="image"
                width={30}
                height={30}
              />
              {el.name}
            </span>
          ))}
        </div>
        {/*-------end without scrool-----*/}
        <hr  className='my-4 sep'/>

        <div className=' overflow-y-scroll h-32 scrollbar'>
          {coin.map((el, i) => (
            <div
              key={i}
              className='flex justify-start items-center border-b border-gray-400 pb-1 cursor-pointer'
              onClick={() => (
                openToken(false),
                setActive(i + 1),
                tokens({
                  name: el.name,
                  image: el.img,
                })
              )}
            >
              <Image
                src={el.img || images.ether}
                alt="image"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className='flex flex-col h-8 text-gray-100'>
                  <p className='text-sm font-medium'>
                    {el.name}
                  </p>
                  <p  className='text-xs text-gray-300'>Ether</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchToken

