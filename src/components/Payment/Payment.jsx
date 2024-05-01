import React from 'react'
import './Payment.css'
import { Link } from 'react-router-dom'
import Phonepe from '../images/Phonepe.png';
import Gapy from '../images/Gpay.png';
import Paytm from '../images/Paytm.png';
import Cash from '../images/Cash.png';
import UPI from '../images/UPI.png';
import QRcode from '../images/QRcode.png';
import Rightarrow from '../images/Rightarrow.png';

const Payment = () => {
  return (
    <div className="androidLarge">
      <div className="header">
        <h1>Payment Method</h1>
        <div className="dots">...</div>
      </div>
      
      <div className="inputGroup">
        <div className="inputRow">
        <img className="locationIcon" src={Paytm} alt="Location" />
          <span>Paytm</span>
          <div className="iconRight">
          <Link to={'/paytm'}><img className="locationIcon2" src={Rightarrow} alt="select" /></Link>
         </div>
        </div>
        <div className="inputRow">
          <img className="locationIcon" src={Phonepe} alt="locationIcon2" />
          <span>Phonepe</span>
          <div className="iconRight">
          <Link to={'/phonepe'}><img className="locationIcon2" src={Rightarrow} alt="up" /></Link>
          </div>
        </div>
        <div className="inputRow">
        <img className="locationIcon" src={Gapy} alt="Calender" />
          <span>Gpay</span>
          <div className="iconRight">
          <Link to={'/Gpay'}><img className="locationIcon2" src={Rightarrow} alt="select" /></Link>
          </div>
        </div>
        <div className="inputRow">
        <img className="locationIcon" src={UPI} alt="Cab" />
          <span>UPI</span>
          <div className="iconRight">
          <Link to={'/upi'}><img className="locationIcon2" src={Rightarrow} alt="select" /></Link>
          </div>
        </div>
        <div className="inputRow">
        <img className="locationIcon" src={Cash} alt="Cab" />
          <span>Cash</span>
          <div className="iconRight">
          <Link to={'/cash'}><img className="locationIcon2" src={Rightarrow} alt="select" /></Link>
          </div>
        </div>
        <div className="inputRow">
        <img className="locationIcon" src={QRcode} alt="Cab" />
          <span>QR Code</span>
          <div className="iconRight">
          <Link to={'/qrcode'}><img className="locationIcon2" src={Rightarrow} alt="select" /></Link>
          </div>
        </div>
      </div>
      
      <div className="infoSectionPaytm">
          <Link to={'/paytm'}><div className="PayNowButton">Pay Now</div></Link>
          
      </div>

    
    </div>
  
  )
}

export default Payment
