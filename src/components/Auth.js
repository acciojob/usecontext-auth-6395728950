import React, { useContext } from 'react'
import { AuthContext } from './App';

const Auth = () => {

    const data = useContext(AuthContext)
    
  return (
    <div className='authText'>
    {
        data?<p>You are now authenticated,you can proceed</p>:<p>you are not authenticated</p>
    }
    </div>
  )
}

export default Auth