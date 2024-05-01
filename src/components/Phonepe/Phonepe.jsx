import React from 'react'
import Phonepeimg from '../images/Phonepe.png';

const Phonepe = () => {
  return (
<div className="AndroidLarge3" style={{width: 412, height: 870, position: 'relative', background: '#BCC3E7', borderRadius: 30, overflow: 'hidden'}}>
  <div className="Rectangle1" style={{width: 412, height: 400, left: 0, top: 31, position: 'absolute', background: '#E3E5F5', borderRadius: 30}} />
  <div className="Rectangle2" style={{width: 136, height: 39, left: 130, top: 350, position: 'absolute', background: '#383A69', borderRadius: 29}} />
  <div className="Phonepe" style={{width: 140, height: 75, left: 128, top: 49, position: 'absolute', color: 'black', fontSize: 40, fontFamily: 'Lora', fontWeight: '400', wordWrap: 'break-word'}}>Phonepe</div>
  <div className="Ellipse11" style={{width: 63, height: 40, left: 168, top: 11, position: 'absolute', background: '#E3E5F5', borderRadius: 9999}} />
  <img className="Icons8Phonepe482" style={{width: 63, height: 58, left: 164, top: 105, position: 'absolute', marginBottom:5,}} src={Phonepeimg}/>
  <div className="Rectangle10" style={{width: 395, height: 120, left: 7, top: 186, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}></div>
  <div className="EnterPaytmNumber" style={{width: 227, height: 30, left: 33, top: 209, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'Lora', fontWeight: '400', wordWrap: 'break-word'}}>Enter Phonepe Number</div>
  <input className="Rectangle13" style={{width: 201, height: 34, left: 25, top: 250, position: 'absolute', background: '#BCC3E7', borderRadius: 30}} placeholder='+91'/>
  <div className="PayNow" style={{width: 136, height: 29, left: 130, top: 360, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Pay Now</div>
</div>
  )
}

export default Phonepe
