import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import UserCreate from './components/auth/UserCreate';
import UserSignIn from './components/auth/UserSignIn';
import GoogleAuthenticate from './components/auth/GoogleAuthenticate';
import GitHubAuthenticate from './components/auth/GitHubAuthenticate';

import StoreFilesInDB from './components/database/StoreFilesInDB';
import ViewStoredData from './components/database/ViewStoredData';
import UpdateData from './components/database/UpdateData';
import DeleteData from './components/database/DeleteData';

function App() { 
  return (
    <BrowserRouter>
      <Routes>

        {/* -Auth- */}
        <Route path="/auth/create" element={UserCreate} />
        <Route path="/auth/signin" element={UserSignIn} />
        <Route path='/auth/google-auth' element={GoogleAuthenticate}/>
        <Route path='/auth/github-auth' element={GitHubAuthenticate}/>

        {/* -database- */}
        <Route path='/database/store' element={StoreFilesInDB}/>
        <Route path='/database/view' element={ViewStoredData}/>
        <Route path='/database/update' element={UpdateData}/>
        <Route path='/database/delete' element={DeleteData}/>

        {/* -storage- */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
