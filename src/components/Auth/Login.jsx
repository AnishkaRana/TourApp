import React, { useState,useRef } from 'react'
import {signInWithPhoneNumber,RecaptchaVerifier} from "firebase/auth";
import { auth } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import './auth.css'
const Login = () => {
    const [phonenumber,setphonenumber]=useState('+91');
    const [iscodesend,setiscodesend]=useState(false);
    const [code,setcode]=useState('');
    const [error,seterror]=useState(false);
    const [confermationResult,setconfirmationResult]=useState(null);
    const [otp, setOtp] = useState(Array(6).fill(""));
    const navigate=useNavigate();
   
    const handlesignin=()=>{
       if(phonenumber===''){
        seterror(true);
       }
       else{
         if(error===true){
             seterror(false);
         }
         window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {'size': 'invisible','callback': (response) => {} });
          const appVerifier = window.recaptchaVerifier;
         signInWithPhoneNumber(auth, phonenumber,appVerifier)
    .then((confirmationResult) => {
        console.log(confirmationResult)
        setconfirmationResult(confirmationResult);
       // setiscodesend(true);
      window.confirmationResult = confirmationResult;

    }).catch((error) => {
        console.log(error);
    });
       }
    }

    const handleotpverification=()=>{
      console.log(code);
      confermationResult.confirm(code).then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/');
        console.log('loged in successfully');
        
      }).catch((error) => {
        console.log(error);
      });
    }
    const handleChange = (index, e) => {
      const newOtp = [...otp];
   //   console.log(newOtp)
      newOtp[index] = e.target.value;
      setOtp(newOtp);
      if (e.target.value !== "" && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      } else if (e.target.value === "" && index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
      let fullotp='';
      newOtp.forEach(element => {
          fullotp=fullotp+element
      });
      console.log(fullotp);
      setcode(fullotp);

    };

  return <>
    <div className='authcontainer'>
        <div className='signin'>Sign In</div>
         <div className='phoneinputbox'>
            {confermationResult?
            <>
            <div className='otplable'>OTP</div>
            {otp.map((value, index) => (
        <input
        className='otpinputs'
          key={index}
          id={`otp-${index}`}
          type="text"
          maxLength={1}
          pattern="[0-9]"
          required
          value={value}
          onChange={(e) => handleChange(index, e)}
          onInputCapture={(e) => handleChange(index, e)}
        />
      ))}
            </>
            :<>
            <div className='phonelabel'>Phone number</div>
            <input type="text" className='phoneinput' placeholder='Enter phone number'
            style={error?{border:'1px solid red'}:{}}
            value={phonenumber}
            onChange={(ev)=>{setphonenumber(ev.target.value)}}
            onInputCapture={(ev)=>{setphonenumber(ev.target.value)}}
            />
            </>
            }
            {confermationResult?<>
              <button
             className='getotpbutton'
            onClick={handleotpverification}
            >Sign In</button>
            </>:<>
            <button
            id='sign-in-button'
             className='getotpbutton'
            onClick={handlesignin}
            >Get Otp</button>
            </>}

         </div>
    </div>
  </>
}

export default Login
