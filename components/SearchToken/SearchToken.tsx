import React from 'react'

type ITokensArgs = {
  name:string,
  image:string
}
type Props={
  tokenData:string;
  openToken:({name,image}:ITokensArgs)=>void
  tokens:({name,image}:ITokensArgs)=>void
}
const SearchToken = ({tokenData,tokens,openToken}:Props) => {
  return (
    <div>SearchToken</div>
  )
}

export default SearchToken