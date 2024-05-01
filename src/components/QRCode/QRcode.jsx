import React from 'react'
import QRcodeimg from '../images/QRcode.png';

const QRcode = () => {
  return (
<div className="AndroidLarge6" style={{width: 420, height: 850, position: 'relative', background: '#BCC3E7', overflow: 'hidden'}}>
  <div className="Rectangle1" style={{width: 420, height: 550, left: 0, top: 27, position: 'absolute', background: '#E3E5F5', borderRadius: 30}} />
  <div className="Rectangle14" style={{width: 136, height: 39, left: 125, top: 500, position: 'absolute', background: '#383A69', borderRadius: 29}} />
  <div className="Pay1500" style={{width: 136, height: 29, left: 125, top: 510, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Pay Now</div>
  <div className="UpiId" style={{width: 2003, height: 45, left: 113, top: 53, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Lora', fontWeight: '400', wordWrap: 'break-word'}}>Scan QR Code</div>
  <div className="Ellipse11" style={{width: 63, height: 40, left: 175, top: 7, position: 'absolute', background: '#E3E5F5', borderRadius: 9999}} />
  <div className="Rectangle9" style={{width: 402, height: 296, left: 7, top: 120, position: 'absolute', background: '#DADFF3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
  <img className="Icons8Qrcode502" style={{width: 177, height: 169, left: 120, top: 127, position: 'absolute'}} src="https://via.placeholder.com/137x119" />
  <div className="Rectangle15" style={{width: 220, height: 35, left: 98, top: 333, position: 'absolute', background: '#BCC3E7', borderRadius: 30}} />
  <div className="DownloadQrCode" style={{width: 203, height: 29, left: 115, top: 336, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'KyivType Sans', fontWeight: '350', wordWrap: 'break-word'}}>Download QR Code</div>
</div>
  )
}

export default QRcode
