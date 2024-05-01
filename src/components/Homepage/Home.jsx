import React from 'react'

import Logo from './Logo'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { setbookingtype } from '../Reduxstore/store';
import { useDispatch,useSelector } from 'react-redux';
const Home = () => {
   const navigate=useNavigate();
   const dispatch=useDispatch();

   const handlebooking=(type)=>{
      dispatch(setbookingtype(type))
      navigate('/booking');
   }

  return <>
      <div className='mainhomecontainer' >
        <Logo/>
     <div className='destinationinput'>
     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,300,150"
style={{fill:"#052634;"}}
className='searchicon'
>
<g fill="#052634" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path></g></g>
</svg>
   <span className='inputquestion'>Destination?</span>
   <div className='nowwatch'>

   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,300,150"
style={{fill:"#052634"}}
className='clock'
>
<g fill="#052634" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM16,16h-8.005c-0.55,0 -0.995,-0.445 -0.995,-0.995v-0.011c0,-0.549 0.445,-0.994 0.995,-0.994h6.005v-8.005c0,-0.55 0.445,-0.995 0.995,-0.995h0.011c0.549,0 0.994,0.445 0.994,0.995z"></path></g></g>
</svg>
  <span className='now'> For Now</span>
   </div>
     </div>

     <div className='suggestions'>
        <div className='suggestionshead'>Suggestions <span className='seeall'>See all</span></div>
        <div className='seggestionsbox'>
            <div className='suggest'
            onClick={()=>{handlebooking('trip')}}
            >
            <img width="64" height="64" src="https://i.postimg.cc/QCCV4HyB/67528-camaro-car-sports-car-icon.png" alt="car--v1" className='servicetrip' />
            <div className='serviceinfo'>Trip</div>
            </div>
            <div className='suggest'
            onClick={()=>{handlebooking('intercity')}}
            >
            <img width="64" height="64" src="https://i.postimg.cc/PJ7JBTgS/1988882-car-public-transport-taxi-vehicle-icon.png" alt="taxi" className='servicetrip'/>
            <div className='serviceinfo'>Intercity</div>
            </div>
            <div className='suggest'
            onClick={()=>{handlebooking('Rentals')}}
            >
            <img width="50" height="50" src="https://i.postimg.cc/zGKvcm0k/1988884-car-front-vehicle-icon.png" alt="car-sale" className='servicetrip intercity'/>
            <div className='serviceinfo'>Rentals</div>
            </div>
            <div className='suggest'
            onClick={()=>{handlebooking('Reserve')}}
            >
            <img width="64" height="64" src="https://i.postimg.cc/m2xyz4zY/1988880-car-front-vehicle-icon.png" alt="car-rental" className='servicetrip'/>
            <div className='serviceinfo'>Reserve</div>
            </div>
        </div>
    
     </div>

     <div className='promos'>
     <div className='seepromosinfo'>You have multiple promos </div>
     <div className='applypromos'>Terms apply 
     <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/16aee8/long-arrow-right.png" alt="long-arrow-right" className='rightarrow'/>
     </div>
     <div className='promodesign'></div>
     {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/16aee8/discount--v1.png" alt="two-tickets" className='promosicon'/>
     <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/16aee8/discount--v1.png" alt="discount--v1" className='promoicon2'/> */}
     </div>
     
        <div className='reservehead'>Reserve ahead</div>
     <div className='reserveblock'>
        <div className='reserveshowcontainer'>
            <div className="reserves">
             <img src="https://i.postimg.cc/MTsjw62M/Screenshot-2024-04-17-231535.png" alt="" className='reserveimagefly' style={{borderRadius:'6vw'}}/>
             <div className='reserveinfohead'>Plan for Outings &nbsp;<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right" className='reservearraow'/></div>
             <div className='reserveinfo'>Reserve a trip ahead of time</div>
            </div>
            <div className="reserves">
             <img src="https://i.postimg.cc/X7BhkNfN/Screenshot-2024-04-18-002255.png" alt="" className='reserveimagefly' style={{borderRadius:'6vw'}}/>
             <div className='reserveinfohead'>Fly with ease &nbsp;<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right" className='reservearraow'/></div>
             <div className='reserveinfo'>Book airport trips 90 days ahead</div>
            </div>
            <div className="reserves">
             <img src="https://i.postimg.cc/G2g634CY/Screenshot-2024-04-18-003109.png" alt="" className='reserveimagefly' style={{borderRadius:'6vw'}}/>
             <div className='reserveinfohead'>Reserve work trips &nbsp;<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right" className='reservearraow'/></div>
             <div className='reserveinfo'>Perfect for business meetings</div>
            </div>
            <div className="reserves">
             <img src="https://i.postimg.cc/3xHfTP63/Screenshot-2024-04-18-003505.png" alt="" className='reserveimagefly' style={{borderRadius:'6vw'}}/>
             <div className='reserveinfohead'>Reserve for events &nbsp;<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right" className='reservearraow'/></div>
             <div className='reserveinfo'>Meet up at the tim you've</div>
            </div>

        </div>
     </div>
     
     <div className='savehead'>Save every day</div>
     <div className='reserveblock nowsave'>
        <div className='reserveshowcontainer'>
        <div className="reserves">
             <img src="https://i.postimg.cc/02dtfVWj/Screenshot-2024-04-18-004420.png" alt="" className='reserveimagefly' style={{borderRadius:'6vw'}}/>
             <div className='reserveinfohead'>Try a group trip &nbsp;<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right" className='reservearraow'/></div>
             <div className='reserveinfo'>Seamless trips,together</div>
            </div>
            <div className="reserves ">
             <img src="https://i.postimg.cc/Z5bNhHTW/Screenshot-2024-04-18-004221.png" alt="" className='reserveimagefly' style={{borderRadius:'6vw'}}/>
             <div className='reserveinfohead'>Shuttle rides &nbsp;<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right" className='reservearraow'/></div>
             <div className='reserveinfo'>Low fares,premimum A/C buses</div>
            </div>
            <div className="reserves"></div>
            <div className="reserves"></div>

        </div>
     </div>

     <div className='planhead '>Plan your next trip</div>
     <div className='reserveblock nowplan'>
        <div className='reserveshowcontainer'>
        <div className="reserves">
             <img src="https://i.postimg.cc/NjGksBg7/Screenshot-2024-04-18-004855.png" alt="" className='reserveimagefly' style={{borderRadius:'6vw'}}/>
             <div className='reserveinfohead'>Travel intercity &nbsp;<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right" className='reservearraow'/></div>
             <div className='reserveinfo'>Go to remote locations with ease</div>
            </div>
            <div className="reserves">
             <img src="https://i.postimg.cc/6qjbw3DS/Screenshot-2024-04-18-005127.png" alt="" className='reserveimagefly' style={{borderRadius:'6vw'}}/>
             <div className='reserveinfohead'>Reserve and relax &nbsp;<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/long-arrow-right.png" alt="long-arrow-right" className='reservearraow'/></div>
             <div className='reserveinfo'>Book upto 90 days in advance</div>
            </div>
            <div className="reserves"></div>
            <div className="reserves"></div>

        </div>
     </div>
      </div>
  </>
}

export default Home
