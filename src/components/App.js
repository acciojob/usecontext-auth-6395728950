
import React, { createContext, useState } from "react";
import './../styles/App.css';
import Auth from "./Auth";

export const AuthContext = createContext();
const App = () => {
  const[click,setClick]= useState(false);
   

  return (
    <AuthContext.Provider value={click}>
         <div>
         
       <h1>Click on the checkbox to get authenticated</h1>
       <Auth></Auth>
        <input type="checkbox" onChange={()=>setClick(!click)} id="check"></input>
        <label htmlFor="check">I'm not a robot</label>
         
    </div>

    </AuthContext.Provider>
  )
}

export default App
