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
import Logo from './components/MainPage/Logo';
import Logo2 from './components/MainPage/Logo2';
import DoubleSignin from './components/MainPage/DoubleSignin';
import CreateAccount from './components/NewAccount/CreateAccount';
import SignIn from './components/NewAccount/SignIn';
import PasswordManager from './components/NewAccount/PasswordManager';
import CompleteProfile from './components/Profile/CompleteProfile';
import EditProfile from './components/Profile/EditProfile';
import Profile from './components/Profile/Profile';
import Packages from './components/Tours/Packages';
import PackageDetail from './components/Tours/PackageDetail';
import Cabs from './components/Tours/Cabs';
import HelpCenter from './components/Help/HelpCenter';
import BookingHistory from './components/Profile/BookingHistory';

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
        <Route path='/logo' element={<Logo/>}/>
        <Route path='/logo2' element={<Logo2/>}/>
        <Route path='/login' element={<DoubleSignin/>}/>
        <Route path='/CreateAccount' element={<CreateAccount/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/PasswordManager' element={<PasswordManager/>}/>
        <Route path='/CompleteProfile' element={<CompleteProfile/>}/>
        <Route path='/EditProfile' element={<EditProfile/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Packages' element={<Packages/>}/>
        <Route path='/PackageDetail' element={<PackageDetail/>}/>
        <Route path='/Cabs' element={<Cabs/>}/>
        <Route path='/Help' element={<HelpCenter/>}/>
        <Route path='/BookingHistory' element={<BookingHistory/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </>
}

export default App;
