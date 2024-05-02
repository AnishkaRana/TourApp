import React from 'react'
import logoimg from '../images/LogoShort.png';
import rightarrowimg from '../images/Rightarrow.png';


const Logo2 = () => {
  return (
<div className="AndroidLarge26" style={{width: 410, height: 850, position: 'relative', background: '#BCC3E7', overflow: 'hidden'}}>
  <img className="Logoshort2" style={{width: 214, height: 168, left: 96, top: 242, position: 'absolute'}} src={logoimg} />
  <div className="Rectangle42" style={{width: 410, height: 316, left: -2, top: 514, position: 'absolute', background: '#383A69'}}></div>
  <div className="BookARideAnywhereAnytime" style={{width: 660, height: 145, left: -197, top: 601, position: 'absolute', textAlign: 'center', color: '#FFB803', fontSize: 16,  fontWeight: '600', wordWrap: 'break-word'}}>Book a Ride</div>
  <div className="Anytime" style={{width: 660, height: 145, left: -67, top: 601, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16,  fontWeight: '600', wordWrap: 'break-word'}}>Anywhere Anytime!</div>
  <div className="Ellipse15" style={{width: 20, height: 20, left: 163, top: 674, position: 'absolute', background: '#FFB803', borderRadius: 9999}} />
  <div className="Ellipse18" style={{width: 40, height: 40, left: 330, top: 720, position: 'absolute', background: '#FFB800', borderRadius: 9999}} />
  <div className="Ellipse16" style={{width: 10, height: 10, left: 203, top: 679, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }}></div>
  <div className="Ellipse17" style={{width: 10, height: 10, left: 233, top: 679, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
  <div className="Arrow1" style={{width: 40, height: 0, left: 745, top: 0, position: 'absolute', transform: 'rotate(-1.01deg)', transformOrigin: '0 0', border: '6px #383A69 solid'}}></div>
  <img className="Rightarrow1" style={{width: 30, height: 30, left: 335, top: 725, position: 'absolute'}} src={rightarrowimg} />
</div>
  )
}

export default Logo2
