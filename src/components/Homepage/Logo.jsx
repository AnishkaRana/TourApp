import React from 'react'
import { Outlet } from 'react-router-dom'

const Logo = () => {
  return <>
    <div className='homelogo'>Trove</div>
    <Outlet/>
  </>
}

export default Logo
