import React from 'react'
import backimg from '../images/Backimg.png';

const CompleteProfile = () => {
  return (
<div className="AndroidLarge32" style={{width: 360, height: 740, position: 'relative', background: '#536396', overflow: 'hidden'}}>
  <div className="CompleteYourProfile" style={{width: 222, height: 22, left: 65, top: 127, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Complete Your Profile</div>
  <div className="Rectangle49" style={{width: 145, height: 33, left: 105, top: 613, position: 'absolute', background: '#383A69', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 50, border: '1px black solid'}} />
  <div className="CompleteProfile" style={{width: 125, height: 25, left: 112, top: 621, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Complete Profile</div>
  <div className="DonTWorryOnlyYouCanSeeYourPersonalDataNoOneElseWillBeAbleToSeeIt" style={{width: 470, height: 26, left: -51, top: 170, position: 'absolute', textAlign: 'center', color: '#FBFAFA', fontSize: 10, fontFamily: 'Inria Sans', fontWeight: '400', wordWrap: 'break-word'}}>Don’t worry, only you can see your personal data. <br/>No one else will be able to see it.</div>
  <div className="Ellipse19" style={{width: 120, height: 116, left: 120, top: 217, position: 'absolute', background: '#DADFF3', borderRadius: 9999}} />
  <div className="Name" style={{width: 129, height: 28, left: 6, top: 370, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Name</div>
  <div className="PhoneNumber" style={{width: 192, height: 42, left: -10, top: 451, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Phone Number</div>
  <div className="Gender" style={{width: 129, height: 39, left: 3, top: 531, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Gender</div>
  <div className="Rectangle50" style={{width: 280, height: 30, left: 38, top: 389, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
  <div className="Rectangle51" style={{width: 280, height: 30, left: 38, top: 472, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
  <div className="Rectangle52" style={{width: 280, height: 30, left: 38, top: 553, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
  <img className="Icons8Back522" style={{width: 32, height: 30, left: 22, top: 68, position: 'absolute'}} src={backimg}/>
</div>
  )
}

export default CompleteProfile
