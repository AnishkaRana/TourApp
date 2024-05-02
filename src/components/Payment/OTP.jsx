import React from 'react'
import Backimg from '../images/Backimg.png';

const OTP = () => {
  return (
<div className="AndroidLarge31" style={{width: 360, height: 720, position: 'relative', background: '#536396', overflow: 'hidden'}}>
  <div className="VerifyCode" style={{width: 150, height: 65, left: 102, top: 172, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Verify Code</div>
  <div className="Rectangle49" style={{width: 125, height: 35, left: 125, top: 470, position: 'absolute', background: '#383A69', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 50, border: '1px #DADFF3 solid'}} />
  <div className="Verify" style={{width: 79, height: 22, left: 146, top: 480, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Verify</div>
  <div className="PleasEnterTheCodeWeJustSendToYourNumber" style={{width: 550, height: 89, left: -89, top: 232, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Inknut Antiqua', fontWeight: '500', wordWrap: 'break-word'}}>Pleas enter the code we just send to your number</div>
  <div className="Rectangle51" style={{width: 60, height: 35, left: 30, top: 306, position: 'absolute', background: '#DADFF3', borderRadius: 20}} />
  <div className="Rectangle52" style={{width: 60, height: 35, left: 112, top: 306, position: 'absolute', background: '#DADFF3', borderRadius: 20}} />
  <div className="Rectangle53" style={{width: 60, height: 35, left: 190, top: 306, position: 'absolute', background: '#DADFF3', borderRadius: 20}} />
  <div className="Rectangle54" style={{width: 60, height: 35, left: 270, top: 306, position: 'absolute', background: '#DADFF3', borderRadius: 20}} />
  <div className="DidnTReceiveOtp" style={{width: 299, height: 63, left: 41, top: 373, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inknut Antiqua', fontWeight: '500', wordWrap: 'break-word'}}>Didn;t receive OTP?</div>
  <div className="ResendCode" style={{width: 286, height: 26, left: 41, top: 416, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Inder', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>Resend code</div>
  <img className="Icons8Back521" style={{width: 32, height: 30, left: 29, top: 69, position: 'absolute'}} src={Backimg} />
</div>
  )
}

export default OTP
