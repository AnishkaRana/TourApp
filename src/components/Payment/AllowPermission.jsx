import React from 'react'
import location2 from '../images/download.jpg';

const AllowPermission = () => {
  return (
<div className="AndroidLarge24" style={{width: 412, height: 900, position: 'relative', background: '#BCC3E7', borderRadius: 30, overflow: 'hidden'}}>
  <div className="Rectangle9" style={{width: 390, height: 362, left: 12, top: 209, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
  <div className="PleaseEnterValidOtp" style={{width: 280, height: 52, left: 67, top: 90, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Lora', fontWeight: '400', wordWrap: 'break-word'}}>Please Enter Valid OTP </div>
  <div className="Rectangle16" style={{width: 135, height: 40, left: 134, top: 415, position: 'absolute', background: '#383A69', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset', borderRadius: 29, border: '1px #1B1F79 solid'}} />
  <div className="Rectangle18" style={{width: 135, height: 40, left: 135, top: 484, position: 'absolute', background: '#383A69', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset', borderRadius: 29}} />
  <div className="Rectangle17" style={{width: 366, height: 66, left: 20, top: 61, position: 'absolute', background: '#383A69'}} />
  <div className="AllowPermission" style={{width: 136, height: 29, left: 125, top: 426, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Allow Permission</div>
  <div className="Deny" style={{width: 136, height: 29, left: 114, top: 505, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Deny</div>
  <div className="Location" style={{width: 217, height: 41, left: 145, top: 73, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Lora', fontWeight: '400', wordWrap: 'break-word'}}>Location</div>
  <div className="Rectangle38" style={{width: 412, height: 900, left: 0, top: 0, position: 'absolute', background: 'rgba(56, 58, 105, 0.54)'}} />
  <div className="Rectangle19" style={{width: 297, height: 273, left: 55, top: 254, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
  <div className="AllowMap" style={{width: 245, height: 40, left: 90, top: 287, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Allow map to Access this devices precise location ?</div>
  <img className="Download1" style={{width: 99, height: 49, left: 158, top: 335, position: 'absolute'}} src={location2}/>
  <div className="Rectangle39" style={{width: 140, height: 20, left: 138, top: 405, position: 'absolute', background: '#BCC3E7', borderRadius: 20}} />
  <div className="Rectangle40" style={{width: 140, height: 20, left: 138, top: 441, position: 'absolute', background: '#BCC3E7', borderRadius: 20}} />
  <div className="Rectangle41" style={{width: 140, height: 20, left: 138, top: 474, position: 'absolute', background: '#BCC3E7', borderRadius: 20}} />
  <div className="WhileUsingThisApp" style={{width: 130, height: 16, left: 145, top: 409, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.70)', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>While using this app</div>
  <div className="AllowOnlyThisTime" style={{width: 130, height: 16, left: 148, top: 445, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.70)', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Allow only this time</div>
  <div className="Deny" style={{width: 130, height: 16, left: 143, top: 478, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.70)', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Deny<br/></div>
</div>
  )
}

export default AllowPermission
