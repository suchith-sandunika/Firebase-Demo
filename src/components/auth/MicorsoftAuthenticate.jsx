import React, { useState } from 'react';
import { getAuth, OAuthProvider, signInWithPopup } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { app } from '../../firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

const MicrosoftAuthenticate = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    let auth = getAuth(app);
    let authProvider = new OAuthProvider('microsoft.com');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(!email || !password) {
            toast.error("Please fill all fields", { position: "top-center" });
            return;
        }  
        
        // Microsoft Authentication ...
        signInWithPopup(auth, authProvider)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="App">
        <ToastContainer/>
            <div className="container-fluid">
                <div className="card w-25 mx-auto mt-5">
                    <div className="card-header bg-white border-0">
                        <h3 className="text-center text-black">Data Entering</h3>
                    </div>
                    <div className="card-body border-0">
                        <form className="form-control border-0">
                        <div className="form-group align-content-end">
                            <label for="email" className="mt-1">Email:</label>
                            <input type="email" id="email" className="mt-2 ms-1 rounded-1" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label for="password" className="mt-1">password:</label>
                            <input type="password" id="password" className="mt-2 ms-1 rounded-1" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MicrosoftAuthenticate;
