import React from 'react'
import SignUpSuccessimg from '../images/icons8-check-mark-94.png';

const SignUpSuccess = () => {
  return (
<div style={{width: 366, height: 670, background: 'white'}}>
  <div className="AndroidLarge11" style={{width: 412, height: 900, left: 0, top: 0, position: 'absolute', background: '#BCC3E7', overflow: 'hidden'}}>
    <div className="Rectangle10" style={{width: 342, height: 202, left: 35, top: 228, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
    <img className="Icons8CheckMarkButton481" style={{width: 67, height: 70, left: 170, top: 270, position: 'absolute'}} src={SignUpSuccessimg}/>
    <div className="SignUpSuccessfully" style={{width: 199, height: 31, left: 124, top: 368, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Lora', fontWeight: '400', wordWrap: 'break-word'}}>Sign Up Successfully</div>
  </div>
</div>

  )
}

export default SignUpSuccess
