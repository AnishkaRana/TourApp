import React from 'react'
import logoimg from '../images/LogoShort.png';

const Logo = () => {
  return (
<div className="AndroidLarge25" style={{width: 412, height: 870, background: '#BCC3E7', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
  <img className="Logoshort1" style={{width: 250, height: 210, marginTop: 230, marginLeft: -25, alignContent: 'center'}} src={logoimg} />
</div>
  )
}

export default Logo
