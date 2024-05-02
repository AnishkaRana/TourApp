import React from 'react'
import backimg from '../images/Backimg.png';
import Customer from '../images/Customer.png';
import Notification from '../images/Notificationnew.png';
import PrebookedRides from '../images/PrebookedRides.png';
import RideHistory from '../images/RideHistory.png';
import InviteFriends from '../images/InviteFriends.png';
import Setting from '../images/Setting.png';
import Logout from '../images/Logout.png';
import OnlineSupport from '../images/OnlineSupport.png';

const Profile = () => {
  return (
<div className="AndroidLarge42" style={{width: 360, height: 740, position: 'relative', background: '#536396',overflow: 'hidden'}}>
  <div className="Profile" style={{width: 539, height: 71, left: -95, top: 96, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Profile</div>
  <div className="Ellipse21" style={{width: 111, height: 104, left: 121, top: 172, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
  <div className="EstherHoward" style={{width: 240, height: 46, left: 55, top: 292, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Esther Howard</div>
  <div className="YourProfile" style={{width: 266, height: 63, left: 70, top: 372, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Your profile</div>
  <div className="RideHistory" style={{width: 325, height: 63, left: 70, top: 412, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Ride History</div>
  <div className="Notification" style={{width: 325, height: 63, left: 70, top: 452, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Notification</div>
  <div className="InviteFriends" style={{width: 325, height: 63, left: 70, top: 492, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Invite Friends</div>
  <div className="PreBookedRides" style={{width: 325, height: 63, left: 70, top: 532, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Pre-Booked Rides</div>
  <div className="Settings" style={{width: 325, height: 63, left: 70, top: 572, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Settings</div>
  <div className="OnlineSupport" style={{width: 325, height: 63, left: 70, top: 612, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Online Support</div>
  <div className="Logout" style={{width: 106, height: 63, left: 70, top: 652, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Logout</div>
  <img className="Icons8Customer9011" style={{width: 22, height: 22, left: 31, top: 367, position: 'absolute'}} src={Customer} />
  <img className="Icons8History901" style={{width: 22, height: 22, left: 31, top: 410, position: 'absolute'}} src={RideHistory} />
  <img className="Icons8Notification1002" style={{width: 23, height: 22, left: 31, top: 450, position: 'absolute'}} src={Notification} />
  <img className="Icons8Friends1001" style={{width: 23, height: 22, left: 31, top: 490, position: 'absolute'}} src={InviteFriends} />
  <img className="Icons8Ride1001" style={{width: 23, height: 22, left: 31, top: 530, position: 'absolute'}} src={PrebookedRides}/>
  <img className="Icons8Setting10011" style={{width: 17, height: 19, left: 35, top: 572, position: 'absolute'}} src={Setting}/>
  <img className="Icons8Support1001" style={{width: 14, height: 16, left: 35, top: 612, position: 'absolute'}} src={OnlineSupport}/>
  <img className="Icons8Logout1001" style={{width: 14, height: 13, left: 36, top: 652, position: 'absolute'}} src={Logout} />
  <img className="Icons8Back524" style={{width: 29, height: 27, left: 13, top: 74, position: 'absolute'}} src={backimg}/>
</div>
  )
}

export default Profile
