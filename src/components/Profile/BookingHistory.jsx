import React from 'react'
import backimg from '../images/Backimg.png';
import Man from '../images/Man 2.png';

const BookingHistory = () => {
  return (
<div className="AndroidLarge75" style={{width: 360, height: 740, position: 'relative', background: '#536396', overflow: 'hidden'}}>
  <div className="Booking" style={{width: 278, height: 41, left: 43, top: 90, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Booking</div>
  <div className="Active" style={{width: 103, height: 34, left: 4, top: 155, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Active</div>
  <div className="Completed" style={{width: 103, height: 34, left: 130, top: 155, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Completed</div>
  <div className="Cancelled" style={{width: 103, height: 34, left: 251, top: 155, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Cancelled</div>
  <img className="Man24" style={{width: 54, height: 57, left: 29, top: 204, position: 'absolute', borderRadius: 1000}} src={Man}/>
  <div className="John" style={{width: 116, height: 26, left: 59, top: 215, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>John </div>
  <div className="Delhi" style={{width: 66, height: 14, left: 84, top: 239, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Delhi</div>
  <img className="Man25" style={{width: 54, height: 57, left: 29, top: 286, position: 'absolute', borderRadius: 1000}} src={Man}/>
  <div className="John" style={{width: 116, height: 24, left: 59, top: 295, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>John </div>
  <div className="Delhi" style={{width: 66, height: 15, left: 84, top: 319, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Delhi</div>
  <div className="Line19" style={{width: 53, height: 0, left: 29, top: 176, position: 'absolute', border: '2px #BCC3E7 solid'}}></div>
  <img className="Icons8Back525" style={{width: 27, height: 26, left: 16, top: 64, position: 'absolute'}} src={backimg}/>
</div>
  )
}

export default BookingHistory
