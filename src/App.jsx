import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='main'>
      <div className='leftside'>
        

          <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77"/></svg></div>
      <div className='description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus magni veritatis? Totam magni mollitia sint perferendis porro placeat. Modi tempora, eveniet nostrum deserunt voluptate iste nisi velit. Ipsam, perspiciatis.
      </div>
      <button className="button">readmore</button>
      </div>

      <div className='rightside'>
        

        <div className='signup'>
          SignUp
        </div>

        <div className="input1">
      <input type="text" id="username" placeholder="username"/>
      <input type="password" id="password" placeholder="password"/>
      </div>
      <button className='submit'>Submit</button>
      </div>
     </div>
    </>
  )
}

export default App
