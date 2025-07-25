import React, { useContext } from 'react'
import { AuthContext } from './App';

const Auth = () => {

    const data = useContext(AuthContext)
    
  return (
    <div>
    {
        data?<p className='authText'>You are now authenticated,you can proceed</p>:<p className='authText'>you are not authenticated</p>
    }
    </div>
  )
}

export default Auth