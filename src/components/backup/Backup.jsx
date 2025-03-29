// import { useState } from "react";
// import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
// import { toast, ToastContainer } from "react-toastify";
// import { app, database, storage } from './firebaseConfig';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Backup() {
//     // const [email, setEmail] = useState("");
//     // const [password, setPassword] = useState("");

//   // const collectionRef = collection(database, 'users');

//   // let auth = getAuth();
//   // let googleProvider = new GoogleAuthProvider();
//   // let githubprovider = new GithubAuthProvider();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   if(!email || !password) {
//   //     toast.error("Please fill all fields", { position: "top-center" });
//   //     return;
//   //   }

//   //   // To Create A User ...
//   //   // createUserWithEmailAndPassword(auth, email, password)
//   //   //   .then((response) => {
//   //   //     console.log(response);
//   //   //   })
//   //   //   .catch((error) => {
//   //   //     console.log(error);
//   //   //   }); 

//   //   // To Sign in ...
//   //   // signInWithEmailAndPassword(auth, email, password)
//   //   //   .then((response) => {
//   //   //     console.log(response);
//   //   //   })
//   //   //   .catch((error) => {
//   //   //     console.log(error);
//   //   //   });  

//   //   // Google Authentication ...
//   //   // signInWithPopup(auth, googleProvider)
//   //   //   .then((response) => {
//   //   //     console.log(response);
//   //   //   })
//   //   //   .catch((error) => {
//   //   //     console.log(error);
//   //   //   });

//   //   // GitHub Authentication ...
//   //   // signInWithPopup(auth, githubprovider)
//   //   //   .then((response) => {
//   //   //     console.log(response);
//   //   //   })
//   //   //   .catch((error) => {
//   //   //     console.log(error);
//   //   //   });   
    
//   //   // save data in firestore db ...
//   //   // addDoc(collectionRef, {
//   //   //   email: email,
//   //   //   password: password
//   //   // })
//   //   // .then((response) => {
//   //   //   console.log(response);
//   //   //   toast.success('Data Added successfully');
//   //   // })
//   //   // .catch((error) => {
//   //   //   toast.error(error.message);
//   //   // })
//   // }


// //   const getData = async (e) => {
// //     e.preventDefault(); // Prevents form submission ...

// //     if(!email || !password) {
// //       toast.error("Please fill all fields", { position: "top-center" });
// //       return;
// //     }
  
// //     try {
// //       // return data ...
// //       const collectionRef = collection(database, "users");
// //       const response = await getDocs(collectionRef);
// //       const data = response.docs.map((doc) => doc.data());
// //       console.log(data);
// //       toast.success("Data fetched successfully");
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   const updateData = (e) => {
// //     e.preventDefault(); // Prevents form submission ...
// //     if(!email || !password) {
// //       toast.error("Please fill all fields", { position: "top-center" });
// //       return;
// //     }

// //     // Can update one data at a time ...
// //     const docToUpdate = doc(database, "users", 'WD2NEbLvwKtMnTkuCT6J');  // enter the userId use want to update ...
// //     updateDoc(docToUpdate, {
// //       email: 'sselions77@gmail.com',
// //       password: '+1234Lions'
// //     })
// //     .then(() => {
// //       toast.success('Data updated successfully');
// //     })
// //     .catch((error) => {
// //       toast.error(error.message);
// //     });
// //   }

//   // const deleteData = (e) => {
//   //   e.preventDefault();

//   //   if(!email || !password) {
//   //     toast.error("Please fill all fields", { position: "top-center" });
//   //     return;
//   //   }

//   //   const docToDelete = doc(database, "users", " OZABwydwBCVDTLQu1s5k");
//   //   deleteDoc(docToDelete)
//   //     .then((response) => {
//   //       toast.success('Data deleted successfully');
//   //     })
//   //     .catch((error) => {
//   //       toast.error(error.message);
//   //     });
//   // }

//   return (
//     <div className="App">
//       <ToastContainer/>
//       <div className="container-fluid">
//         <div className="card w-25 mx-auto mt-5">
//           <div className="card-header bg-white border-0">
//             <h3 className="text-center text-black">Data Entering</h3>
//           </div>
//           <div className="card-body border-0">
//             <form className="form-control border-0">
//               <div className="form-group align-content-end">
//                 <label for="email" className="mt-1">Email:</label>
//                 <input type="email" id="email" className="mt-2 ms-1 rounded-1" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//               </div>
//               <div className="form-group">
//                 <label for="password" className="mt-1">password:</label>
//                 <input type="password" id="password" className="mt-2 ms-1 rounded-1" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//               </div>
//               <button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }