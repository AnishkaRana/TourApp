import React from 'react'
import SignInSuccessimg from '../images/icons8-check-mark-94.png';

const SignInSuccess = () => {
  return (
<div style={{width: 366, height: 670, background: 'white'}}>
  <div className="AndroidLarge10" style={{width: 412, height: 900, left: 0, top: 0, position: 'absolute', background: '#BCC3E7', overflow: 'hidden'}}>
    <div className="Rectangle9" style={{width: 342, height: 202, left: 40, top: 227, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
    <img className="Icons8CheckMarkButton481" style={{width: 67, height: 70, left: 174, top: 270, position: 'absolute'}} src={SignInSuccessimg}/>
    <div className="SignInSuccessfully" style={{width: 199, height: 31, left: 128, top: 368, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Lora', fontWeight: '400', wordWrap: 'break-word'}}>Sign In Successfully</div>
  </div>
</div>

  )
}

export default SignInSuccess
