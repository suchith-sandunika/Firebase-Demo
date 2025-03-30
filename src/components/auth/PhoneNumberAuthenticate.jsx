import React, { useState } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { app } from "../../firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";

const PhoneNumberAuthenticate = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const auth = getAuth(app);

  // Setup reCAPTCHA for phone authentication
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => {
          console.log("reCAPTCHA verified");
        },
      });
    }
  };

  // Send OTP to Phone Number
  const sendOtp = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      toast.error("Please enter a valid phone number", { position: "top-center" });
      return;
    }

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      toast.success("OTP sent successfully!", { position: "top-center" });
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Failed to send OTP. Please try again.", { position: "top-center" });
    }
  };

  // Verify OTP
  const verifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error("Please enter the OTP", { position: "top-center" });
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      toast.success("Phone number verified successfully!", { position: "top-center" });
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Invalid OTP. Please try again.", { position: "top-center" });
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="container-fluid">
        <div className="card w-25 mx-auto mt-5">
          <div className="card-header bg-white border-0">
            <h3 className="text-center text-black">Phone Authentication</h3>
          </div>
          <div className="card-body border-0">
            <form className="form-control border-0">
              {/* Phone Number Input */}
              <div className="form-group align-content-end">
                <label htmlFor="phoneNumber" className="mt-1">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="mt-2 ms-1 rounded-1 form-control"
                  placeholder="Enter Phone Number (e.g., +1234567890)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <button className="btn btn-primary mt-3" onClick={sendOtp}>
                Send OTP
              </button>

              {/* OTP Input Field */}
              {confirmationResult && (
                <div className="form-group">
                  <label htmlFor="otp" className="mt-3">
                    Enter OTP:
                  </label>
                  <input
                    type="text"
                    id="otp"
                    className="mt-2 ms-1 rounded-1 form-control"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button className="btn btn-success mt-3" onClick={verifyOtp}>
                    Verify OTP
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default PhoneNumberAuthenticate;


// import React, { useState } from 'react';
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { toast, ToastContainer } from "react-toastify";
// import { app } from '../../firebaseConfig';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const PhoneNumberAuthenticate = () => {
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [password, setPassword] = useState("");
    
//     let auth = getAuth(app);
//     let recaptchaVerifier;

//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         if(!email || !password) {
//             toast.error("Please fill all fields", { position: "top-center" });
//             return;
//         }  
    
//         // Google Authentication ...
//         signInWithPopup(auth, googleProvider)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     }

//     return (
//         <div className="App">
//         <ToastContainer/>
//             <div className="container-fluid">
//                 <div className="card w-25 mx-auto mt-5">
//                     <div className="card-header bg-white border-0">
//                         <h3 className="text-center text-black">Data Entering</h3>
//                     </div>
//                     <div className="card-body border-0">
//                         <form className="form-control border-0">
//                         <div className="form-group align-content-end">
//                             <label for="phoneNumber" className="mt-1">Phone Number:</label>
//                             <input type="text" id="phoneNumber" className="mt-2 ms-1 rounded-1" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
//                         </div>
//                         <div className="form-group">
//                             <label for="password" className="mt-1">password:</label>
//                             <input type="password" id="password" className="mt-2 ms-1 rounded-1" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//                         </div>
//                         <button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PhoneNumberAuthenticate;
