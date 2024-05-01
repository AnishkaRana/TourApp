import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const Billingpage = () => {
    const bookingtype=useSelector(state=>state.user.bookingtype);
    const from=useSelector(state=>state.user.from);
    const to=useSelector(state=>state.user.to);
    const navigate=useNavigate();

    const handlefinalbooking=()=>{
        navigate('/activity');
    }
  return <>
  <div className='billingcontainer'>
    <div className='billinghead'>BILLING</div>
    <div className='bill'>
    <table>
      <thead>
        <tr >
          <th colSpan={2}>BLL DETAILS</th>
          {/* <th>Column 2</th> */}
        </tr>
      </thead>
      <tbody>

          <tr>
            <td>BOOKING TYPE</td>
            <td>{bookingtype.toUpperCase()}</td>
          </tr>
          <tr>
            <td>PICKUP</td>
            <td>{from.toUpperCase()}</td>
          </tr>
          <tr>
            <td>DESTINATION</td>
            <td>{to.toUpperCase()}</td>
          </tr>
          <tr>
            <td>PRICE BREAKUP</td>
            <td>Rs. 7 / minute</td>
          </tr>
   
      </tbody>
    </table>
    </div>
    <div className='bookingbtn2'
    onClick={handlefinalbooking}
    >Book Ride</div>

  </div>
   
  </>
}

export default Billingpage
