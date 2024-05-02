import React from 'react'

const PasswordManager = () => {
  return (
<div className="AndroidLarge70" style={{width: 360, height: 740, position: 'relative', background: '#536396', overflow: 'hidden'}}>
  <div className="NewPassword" style={{width: 160, height: 81, left: 100, top: 155, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>New Password</div>
  <div className="Password" style={{width: 169, height: 50, left: -15, top: 236, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Password</div>
  <div className="ConfirmPassword" style={{width: 169, height: 50, left: 7, top: 333, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Confirm Password</div>
  <div className="Rectangle46" style={{width: 320, height: 35, left: 25, top: 266, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
  <div className="Rectangle47" style={{width: 320, height: 35, left: 25, top: 363, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
  <div className="Rectangle49" style={{width: 170, height: 35, left: 98, top: 480, position: 'absolute', background: '#383A69', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 50, border: '1px black solid'}}></div>
  <div className="CreatrNewPassword" style={{width: 180, height: 18, left: 98, top: 492, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Creatr New Password</div>
</div>
  )
}

export default PasswordManager
