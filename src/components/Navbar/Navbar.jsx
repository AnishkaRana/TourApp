import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [active,setactive]=useState('home');
  const navigate=useNavigate();

  return <>

  <div className='navbarcontainer'>
    <div className="navitems"
    onClick={()=>{
      setactive('home');
      navigate('/')
    }}
    style={active==='home'?{backgroundColor:'#9be3ff',borderRadius:'2vw'}:{}}
    >
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24"
style={{fill:"#052634"}}
className='navicons'
>
    <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path>
</svg>
<span className='naviconinfo'>
    Home
    </span>
    </div>


    <div className="navitems"
    onClick={()=>{
      setactive('services')
    }}
    style={active==='services'?{backgroundColor:'#9be3ff',borderRadius:'2vw'}:{}}
    >
    <img width="50" height="50" src="https://img.icons8.com/ios/50/052634/circled-menu.png" alt="circled-menu" className='navicons'/>
    <span className='naviconinfo'>
    Services
    </span>
    </div>


    <div className="navitems"
    onClick={()=>{
      setactive('activity')
    }}
    style={active==='activity'?{backgroundColor:'#9be3ff',borderRadius:'2vw'}:{}}
    >
    <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/052634/price-tag--v1.png" alt="price-tag--v1" className='navicons'/>
    <span className='naviconinfo'>
    Activity
    </span>
    </div>


    <div className="navitems"
    onClick={()=>{
      navigate('/account')
      setactive('account')
    }}
    style={active==='account'?{backgroundColor:'#9be3ff',borderRadius:'2vw'}:{}}
    >
    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/052634/user--v1.png" alt="user--v1" className='navicons'/>
    <span className='naviconinfo'>
    Account
    </span>
    </div>

  </div>

  <Outlet/>
  
  </>
}
export default Navbar
