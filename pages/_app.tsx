import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components'

const App=({ Component, pageProps }: AppProps) =>{
  return(
    <div>
      <NavBar/>
       <Component {...pageProps} />
    </div>
  )
}

export  default App