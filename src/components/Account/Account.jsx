import React from 'react'
import Logo from '../Homepage/Logo'
import Login from '../Auth/Login'
import { auth } from '../Firebase/firebase'
import Accountnavbar from './Accountnavbar'
import './Account.css';

const Account = () => {
  return <>
   {!auth.currentUser && 
    <Login/>
   }
    {auth.currentUser && <>
      <Accountnavbar/>
    </>
    
   }

   

  </>
}

export default Account
