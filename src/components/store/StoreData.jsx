import React, { useState, useRef } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import { storage } from '../../firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

const StoreData = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); // ✅ Use ref for better handling

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error('Please select a file');
      return;
    }

    try {
      const fileRef = ref(storage, `uploads/${file.name}`);
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done.`);
        }, 
        (error) => {
          console.error(error);
          toast.error('Upload failed. Please try again.');
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at:', downloadURL);
          toast.success('Upload successful!');
          
          // ✅ Reset file input after upload
          setFile(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Clear file input
          }
        }
      );
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('An error occurred while uploading.');
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="container-fluid">
        <div className="card w-25 mx-auto mt-5">
          <div className="card-header bg-white border-0">
            <h3 className="text-center text-black">Upload File</h3>
          </div>
          <div className="card-body border-0">
            <form className="form-control border-0" onSubmit={handleSubmit}>
              <div className="form-group align-content-end">
                <label htmlFor="file" className="mt-1">File:</label>
                <input 
                  type="file" 
                  id="file" 
                  className="mt-2 ms-1 rounded-1" 
                  ref={fileInputRef} // ✅ Attach ref to file input
                  onChange={(e) => setFile(e.target.files[0])} 
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4">Upload</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreData;



// import React, { useState } from 'react';
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { toast, ToastContainer } from "react-toastify";
// import { app, storage } from '../../firebaseConfig';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const StoreData = () => {
//   const [data, setData] = useState({});

//   const dataRef = ref(storage, `uploads/${data.name}`);
//   const uploadData = uploadBytesResumable(dataRef, data);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if(!data) {
//         toast.error('Please select a file');
//         return
//     }

//     uploadData.on('state_changed', (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log(`Upload is ${progress}% done.`);
//     }, (error) => {
//             console.log(error);
//             toast.error('Upload failed. Please try again.');
//         },
//         () => {
//             getDownloadURL(uploadData.snapshot.ref)
//             .then((downloadURL) => {
//                 console.log('File Available at', downloadURL);
//             });
//         }
//     );
//   }

//   return (
//     <div className="App">
//         <ToastContainer/>
//             <div className="container-fluid">
//                 <div className="card w-25 mx-auto mt-5">
//                     <div className="card-header bg-white border-0">
//                         <h3 className="text-center text-black">Data Entering</h3>
//                     </div>
//                     <div className="card-body border-0">
//                         <form className="form-control border-0" onSubmit={handleSubmit}>
//                             <div className="form-group align-content-end">
//                                 <label for="file" className="mt-1">File:</label>
//                                 <input type="file" id="file" className="mt-2 ms-1 rounded-1" placeholder="Select File" value={data} onChange={(e) => setData(e.target.files[0])}/>
//                             </div>
//                             <button type="submit" className="btn btn-primary mt-4">Submit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default StoreData;
