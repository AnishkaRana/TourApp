import React from 'react'
import hawamahal from '../images/hawamahal.jpg';
import backimg from '../images/Backimg.png';
import pickup from '../images/drop.png';
import droplocation from '../images/droplocation.png';
import Datetime from '../images/Datetime.png';
import cab from '../images/cab.png';
import down from '../images/down.png';



const PackageDetail = () => {
  return (
<div className="AndroidLarge73" style={{width: 360, height: 740, position: 'relative', background: '#536396', overflow: 'hidden'}}>
  <img className="PexelsAxpPhotography500641970191495952" style={{width: 299, height: 214, left: 32, top: 131, position: 'absolute', borderRadius: 30}} src={hawamahal}/>
  <div className="HawaMahal" style={{width: 142, height: 41, left: 36, top: 362, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Hawa Mahal</div>
  <div className="Rajasthan" style={{width: 81, height: 42, left: 32, top: 403, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Rajasthan</div>
  <div className="Rectangle50" style={{width: 339, height: 143, left: 13, top: 453, position: 'absolute', background: '#383A69', borderRadius: 30}} />
  <div className="PickupLocation" style={{width: 156, height: 21, left: 31, top: 473, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Pickup Location</div>
  <div className="DropLocation" style={{width: 156, height: 20, left: 26, top: 501, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Drop Location</div>
  <div className="SelectDateTime" style={{width: 157, height: 21, left: 39, top: 529, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Select Date & Time</div>
  <div className="SelectCab" style={{width: 157, height: 21, left: 17, top: 557, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Select Cab</div>
  <img className="Icons8Pickup1001" style={{width: 15, height: 16, left: 32, top: 471, position: 'absolute'}} src={pickup} />
  <img className="Icons8Location10011" style={{width: 15, height: 17, left: 32, top: 499, position: 'absolute'}} src={droplocation}/>
  <img className="Icons8TimeMachine1001" style={{width: 15, height: 17, left: 32, top: 529, position: 'absolute'}} src={Datetime}/>
  <img className="Icons8Location641" style={{width: 15, height: 17, left: 33, top: 555, position: 'absolute'}} src={cab}/>
  <img className="Icons8PickupPoint481" style={{width: 15, height: 14, left: 308, top: 473, position: 'absolute'}} src={down} />
  <img className="Icons8MyLocation801" style={{width: 15, height: 14, left: 308, top: 501, position: 'absolute'}} src={down}/>
  <img className="Icons8Schedule1001" style={{width: 15, height: 14, left: 308, top: 529, position: 'absolute'}} src={down}/>
  <img className="Icons8ChevronDown641" style={{width: 15, height: 14, left: 308, top: 557, position: 'absolute'}} src={down}/>
  <div className="Rectangle76" style={{width: 141, height: 36, left: 110, top: 640, position: 'absolute', background: '#383A69', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 100, border: '0.10px black solid'}} />
  <div className="BookNow" style={{width: 126, height: 25, left: 119, top: 651, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Book Now</div>
  <img className="Icons8Back524" style={{width: 30, height: 28, left: 8, top: 64, position: 'absolute'}} src={backimg}/>
</div>
  )
}

export default PackageDetail
