import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from './firebaseConfig';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();

    // To Create A User ...
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   }); 

    // To Sign in ...
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });  

    // Google Authentication ...
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });  

  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="card w-25 mx-auto mt-5">
          <div className="card-header bg-white border-0">
            <h3 className="text-center text-black">Data Entering</h3>
          </div>
          <div className="card-body border-0">
            <form className="form-control border-0" onSubmit={handleSubmit}>
              <div className="form-group align-content-end">
                <labal for="email" className="mt-1">Email:</labal>
                <input type="email" id="email" className="mt-2 ms-1 rounded-1" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <labal for="password" className="mt-1">password:</labal>
                <input type="password" id="password" className="mt-2 ms-1 rounded-1" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
