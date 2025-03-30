import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/base/Home';

import UserCreate from './components/auth/UserCreate';
import UserSignIn from './components/auth/UserSignIn';
import GoogleAuthenticate from './components/auth/GoogleAuthenticate';
import FacebookAuthenticate from './components/auth/FacebookAuthenticate';
import GitHubAuthenticate from './components/auth/GitHubAuthenticate';
import MicrosoftAuthenticate from './components/auth/MicorsoftAuthenticate';

import StoreFilesInDB from './components/database/StoreFilesInDB';
import ViewStoredData from './components/database/ViewStoredData';
import UpdateData from './components/database/UpdateData';
import DeleteData from './components/database/DeleteData';

import StoreData from './components/store/StoreData';

import RealTimeUpdates from './components/real-time-updates/RealTimeUpdates';
import Queries from './components/real-time-updates/Queries';

function App() { 
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>

        {/* -Auth- */}
        <Route path="/auth/create" element={<UserCreate/>} />
        <Route path="/auth/signin" element={<UserSignIn/>} />
        <Route path='/auth/google-auth' element={<GoogleAuthenticate/>}/>
        <Route path='/auth/facebook-auth' element={<FacebookAuthenticate/>}/>
        <Route path='/auth/github-auth' element={<GitHubAuthenticate/>}/>
        <Route path='/auth/microsoft-auth' element={<MicrosoftAuthenticate/>}/>

        {/* -database- */}
        <Route path='/database/store' element={<StoreFilesInDB/>}/>
        <Route path='/database/view' element={<ViewStoredData/>}/>
        <Route path='/database/update' element={<UpdateData/>}/>
        <Route path='/database/delete' element={<DeleteData/>}/>

        {/* -storage- */}
        <Route path='/storage/store' element={<StoreData/>}/>

        {/* -Real Time Updates- */}
        <Route path='/real-updates/update' element={<RealTimeUpdates/>}/>
        <Route path='/real-updates/query' element={<Queries/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
