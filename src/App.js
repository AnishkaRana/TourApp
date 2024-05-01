import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Navbar from './components/Navbar/Navbar';
import Account from './components/Account/Account';
import Booking from './components/Bookingpage/Booking';
import { Provider } from 'react-redux';
import store from './components/Reduxstore/store';
import Billingpage from './components/Bookingpage/Billingpage';
import Activity from './components/Activity/Activity';
import Payment from './components/Payment/Payment';
import Paytm from './components/Paytm/Paytm';
import Phonepe from './components/Phonepe/Phonepe';
import Gpay from './components/Gpay/Gpay';
import Cash from './components/Cash/Cash';
import QRCode from './components/QRCode/QRcode';
import UPI from './components/UPI/UPI';
import OTP from './components/Payment/OTP';
import Signup from './components/Payment/Signup';
import SignInSuccess from './components/Payment/SignInSuccess';
import SignUpSuccess from './components/Payment/SignUpSuccess';
import AllowPermission from './components/Payment/AllowPermission';
import MyAccount from './components/MyAccount/MyAccount';
import Setting from './components/Setting/Setting';
import InviteFriends from './components/InviteFriends/InviteFriends';

function App() {
  return <>
  <Provider store={store}>

    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/billing' element={<Billingpage/>}/>
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/paytm' element={<Paytm/>}/>
        <Route path='/phonepe' element={<Phonepe/>}/>
        <Route path='/Gpay' element={<Gpay/>}/>
        <Route path='/qrcode' element={<QRCode/>}/>
        <Route path='/cash' element={<Cash/>}/>
        <Route path='/upi' element={<UPI/>}/>
        <Route path='/OTP' element={<OTP/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/SignInSuccess' element={<SignInSuccess/>}/>
        <Route path='/SignUpSuccess' element={<SignUpSuccess/>}/>
        <Route path='/AllowPermission' element={<AllowPermission/>}/>
        <Route path='/MyAccount' element={<MyAccount/>}/>
        <Route path='/Setting' element={<Setting/>}/>
        <Route path='/InviteFriends' element={<InviteFriends/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </>
}

export default App;
