import React, { useState } from 'react'
import './Booking.css'
import locationIcon from '../images/icons8-location-90.png';
import locationIcon2 from '../images/icons8-location-100.png';
import Calender from '../images/icons8-time-span-100.png';
import Cab from '../images/icons8-cab-90.png';
import dots from '../images/threedotblue.png';
import uparrow from '../images/uparrowblue.png';
import select from '../images/icons8-select-90.png';
import stand from '../images/icons8-cab-stand-100.png';
import moneyIcon from '../images/icons8-amount-96.png';
import distanceIcon from '../images/icons8-distance-48.png';
import { Link } from 'react-router-dom';


const Booking = () => {
  
  return <>
<div className="androidLarge">
      <div className="header">
        <h1>Enter Your Destination</h1>
        <div className="dots">...</div>
      </div>
      
      <div className="inputGroup">
        <div className="inputRow">
        <img className="locationIcon" src={locationIcon} alt="Location" />
          <span>Pickup Location</span>
          <div className="iconRight">
              <img className="locationIcon2" src={dots} alt="dots" />
         </div>
        </div>
        <div className="inputRow">
        <img className="locationIcon" src={locationIcon2} alt="locationIcon2" />
          <span>Drop Location</span>
          <div className="iconRight">
          <img className="locationIcon2" src={uparrow} alt="up" />
          </div>
        </div>
        <div className="inputRow">
        <img className="locationIcon" src={Calender} alt="Calender" />
          <span>Select Date & Time</span>
          <div className="iconRight">
          <img className="locationIcon2" src={select} alt="select" />
          </div>
        </div>
        <div className="inputRow">
        <img className="locationIcon" src={Cab} alt="Cab" />
          <span>Select Cab</span>
          <div className="iconRight">
          <img className="locationIcon2" src={stand} alt="stand" />
          </div>
        </div>
      </div>
      
      <div className="infoSection">
        <div className="infoRow">
        <img className="icon" src={moneyIcon} alt="Money" />
          <span className="infoText">Total Amount</span>
        </div>
        <div className='infoRow'>
          <span className="infoValue">Rs 1500 </span>
          </div>
          <Link to={'/payment'}><div className="bookNowButton">Book Now</div></Link>
          
      </div>

    
    </div>
  
  </>
}

export default Booking
