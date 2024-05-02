import React from 'react'
import Audi from '../Car Images/Audi.png';
import baleno2 from '../Car Images/baleno 2.png';
import BMW from '../Car Images/BMW.png';
import Baleno from '../Car Images/Baleno.png';
import Crysta from '../Car Images/Crysta.png';
import Dzire from '../Car Images/Dzire.png';
import Etios from '../Car Images/Etios.png';
import harrier from '../Car Images/Harrier.png';
import Innova from '../Car Images/innova 2.png';
import i30 from '../Car Images/i30.png';
import Hyundai from '../Car Images/Hyundai Santa Fe Sport 2017.jpeg';
import Thar from '../Car Images/Thar.png';
import Venue from '../Car Images/venue.png';
import Verna from '../Car Images/Verna.png';
import backimg from '../images/Backimg.png';




const Cabs = () => {
  return (
<div className="AndroidLarge76" style={{width: 360, height: 740, position: 'relative', background: '#536396', borderRadius: 30, overflow: 'hidden'}}>
  <img className="Kindpng17510361" style={{width: 100, height: 55, left: 50, top: 170, position: 'absolute'}} src={Venue}/>
  <img className="Kindpng47896181" style={{width: 100, height: 55, left: 220, top: 170, position: 'absolute'}} src={Etios}/>
  <img className="Kindpng21897021" style={{width: 100, height: 55, left: 50, top: 270, position: 'absolute'}} src={Innova} />
  <img className="Kindpng72261551" style={{width: 100, height: 55, left: 50, top: 470, position: 'absolute'}} src={Crysta} />
  <img className="Kindpng74676701" style={{width: 100, height: 55, left: 220, top: 270, position: 'absolute'}} src={Verna}/>
  <img className="Kindpng21898111" style={{width: 100, height: 55, left: 50, top: 370, position: 'absolute'}} src={Thar}/>
  <img className="Kindpng21898131" style={{width: 100, height: 55, left: 220, top: 370, position: 'absolute'}} src={Baleno}/>
  <img className="Kindpng21898132" style={{width: 100, height: 55, left: 220, top: 470, position: 'absolute'}} src={harrier} />
  <img className="Kindpng21898132" style={{width: 100, height: 55, left: 50, top: 570, position: 'absolute'}} src={i30} />
  <img className="Kindpng21898132" style={{width: 100, height: 55, left: 220, top: 570, position: 'absolute'}} src={Audi} />
  <div className="ChooseYourCab" style={{width: 263, height: 37, left: 55, top: 98, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Choose Your Cab</div>
  <img className="Icons8Back525" style={{width: 28, height: 28, left: 33, top: 55, position: 'absolute'}} src={backimg}/>
</div>
  )
}

export default Cabs
